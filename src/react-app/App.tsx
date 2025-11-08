import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "@getmocha/users-service/react";
import HomePage from "@/react-app/pages/Home";
import AuthCallback from "@/react-app/pages/AuthCallback";
import Admin from "@/react-app/pages/Admin";
import Privacy from "@/react-app/pages/Privacy";
import Terms from "@/react-app/pages/Terms";
import LGPD from "@/react-app/pages/LGPD";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/lgpd" element={<LGPD />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
