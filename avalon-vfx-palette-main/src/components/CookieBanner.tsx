import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "avalon-cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const choice = localStorage.getItem(STORAGE_KEY);
    if (!choice) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mx-auto max-w-3xl glass rounded-2xl border border-border p-5 md:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="size-1.5 rounded-full bg-secondary glow-lime" />
              <span className="text-xs uppercase tracking-[0.2em] text-secondary">Cookies</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Usamos cookies para mejorar tu experiencia y entender cómo se usa el sitio. Podés leer más en nuestra{" "}
              <Link to="/cookies" className="text-foreground underline hover:text-secondary transition">
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => decide("rejected")}
              className="rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold hover:border-primary transition"
            >
              Rechazar
            </button>
            <button
              onClick={() => decide("accepted")}
              className="rounded-full bg-secondary text-secondary-foreground px-5 py-2.5 text-sm font-semibold glow-lime hover:scale-[1.03] transition"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}