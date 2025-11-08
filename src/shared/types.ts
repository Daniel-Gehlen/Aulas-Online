import z from "zod";

export const LeadSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  interest: z.string(),
  google_user_id: z.string().nullable(),
  user_data: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Lead = z.infer<typeof LeadSchema>;

export const CreateLeadSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  interest: z.string().min(1, "Interesse é obrigatório"),
});

export type CreateLead = z.infer<typeof CreateLeadSchema>;
