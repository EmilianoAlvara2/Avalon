import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: "Política de Cookies — AVALON" },
      {
        name: "description",
        content: "Qué cookies utiliza el sitio de AVALON y cómo podés gestionarlas.",
      },
      { property: "og:title", content: "Política de Cookies — AVALON" },
      {
        property: "og:description",
        content: "Información sobre el uso de cookies en avalon.studio.",
      },
    ],
  }),
});

function CookiesPage() {
  return (
    <main className="min-h-screen px-6 py-28">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm text-secondary hover:underline">← Volver al inicio</Link>
        <h1 className="display-font text-4xl md:text-5xl font-bold mt-6">Política de Cookies</h1>
        <p className="text-muted-foreground mt-2 text-sm">Última actualización: mayo 2026</p>

        <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo para recordar información sobre tu visita, como preferencias de idioma o métricas de uso.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">Cookies que utilizamos</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Esenciales:</strong> necesarias para el funcionamiento básico del sitio (no se pueden desactivar).
              </li>
              <li>
                <strong>Analíticas:</strong> nos ayudan a entender cómo los visitantes interactúan con el sitio de forma anónima y agregada.
              </li>
              <li>
                <strong>Funcionales:</strong> recuerdan preferencias para mejorar tu experiencia.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">Cómo gestionarlas</h2>
            <p>Podés aceptar, rechazar o eliminar cookies desde la configuración de tu navegador. Tené en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del sitio.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">Contacto</h2>
            <p>Si tenés dudas sobre el uso de cookies, escribinos a <a className="text-secondary hover:underline" href="mailto:hola@avalon.studio">hola@avalon.studio</a>.</p>
          </div>
        </section>
      </article>
    </main>
  );
}