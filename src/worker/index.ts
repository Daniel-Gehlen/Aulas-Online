// Define Env interface inline to avoid external file dependency
interface Env {
  DB: any;
  R2_BUCKET: any;
  AULAS_USERS_SERVICE_API_URL: string;
  AULAS_USERS_SERVICE_API_KEY: string;
}

import { Hono } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import {
  exchangeCodeForSessionToken,
  getOAuthRedirectUrl,
  authMiddleware,
  deleteSession,
} from "@getmocha/users-service/backend";

// Local session cookie name (replaces previous MOCHA_* naming)
const SESSION_TOKEN_COOKIE_NAME = "AULAS_SESSION_TOKEN";

const app = new Hono<{ Bindings: Env }>();

// Lead schema
const LeadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  interest: z.string().min(1),
});

// OAuth redirect URL
app.get("/api/oauth/google/redirect_url", async (c) => {
  const redirectUrl = await getOAuthRedirectUrl("google", {
    apiUrl: c.env.AULAS_USERS_SERVICE_API_URL,
    apiKey: c.env.AULAS_USERS_SERVICE_API_KEY,
  });

  return c.json({ redirectUrl }, 200);
});

// Exchange code for session token
app.post("/api/sessions", async (c) => {
  const body = await c.req.json();

  if (!body.code) {
    return c.json({ error: "No authorization code provided" }, 400);
  }

  try {
    const sessionToken = await exchangeCodeForSessionToken(body.code, {
      apiUrl: c.env.AULAS_USERS_SERVICE_API_URL,
      apiKey: c.env.AULAS_USERS_SERVICE_API_KEY,
    });

    setCookie(c, SESSION_TOKEN_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      path: "/",
      sameSite: "none",
      secure: true,
      maxAge: 60 * 24 * 60 * 60, // 60 days
    });

    return c.json({ success: true }, 200);
  } catch (error) {
    return c.json({ error: "Failed to exchange code" }, 400);
  }
});

// Get current user
app.get("/api/users/me", authMiddleware, async (c) => {
  return c.json(c.get("user"));
});

// Logout
app.get("/api/logout", async (c) => {
  const sessionToken = getCookie(c, SESSION_TOKEN_COOKIE_NAME);

  if (typeof sessionToken === "string") {
    try {
      await deleteSession(sessionToken, {
        apiUrl: c.env.AULAS_USERS_SERVICE_API_URL,
        apiKey: c.env.AULAS_USERS_SERVICE_API_KEY,
      });
    } catch (error) {
      // Error deleting session, continue with logout
    }
  }

  setCookie(c, SESSION_TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

// Create lead
app.post("/api/leads", zValidator("json", LeadSchema), async (c) => {
  const { name, email, interest } = c.req.valid("json");

  try {
    const result = await c.env.DB.prepare(
      "INSERT INTO leads (name, email, interest, created_at, updated_at) VALUES (?, ?, ?, datetime('now'), datetime('now'))"
    )
      .bind(name, email, interest)
      .run();

    return c.json({ success: true, id: result.meta.last_row_id }, 201);
  } catch (error) {
    return c.json({ error: "Failed to create lead" }, 500);
  }
});

// Get all leads (protected route)
app.get("/api/leads", authMiddleware, async (c) => {
  const { startDate, endDate, interest } = c.req.query();

  let query = "SELECT * FROM leads WHERE 1=1";
  const params: any[] = [];

  if (startDate) {
    query += " AND date(created_at) >= ?";
    params.push(startDate);
  }

  if (endDate) {
    query += " AND date(created_at) <= ?";
    params.push(endDate);
  }

  if (interest && interest !== "all") {
    query += " AND interest = ?";
    params.push(interest);
  }

  query += " ORDER BY created_at DESC";

  try {
    const { results } = await c.env.DB.prepare(query)
      .bind(...params)
      .all();
    return c.json(results);
  } catch (error) {
    return c.json({ error: "Failed to fetch leads" }, 500);
  }
});

// Export leads as CSV (protected route)
app.get("/api/leads/export", authMiddleware, async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT name, email, interest, created_at FROM leads ORDER BY created_at DESC"
    ).all();

    const csvHeader = "Nome,Email,Interesse,Data de Cadastro\n";
    const csvRows = results
      .map(
        (lead: any) =>
          `"${lead.name}","${lead.email}","${lead.interest}","${new Date(
            lead.created_at
          ).toLocaleString("pt-BR")}"`
      )
      .join("\n");

    const csvContent = csvHeader + csvRows;

    return c.text(csvContent, 200, {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="leads.csv"',
    });
  } catch (error) {
    return c.json({ error: "Failed to export leads" }, 500);
  }
});

export default app;
