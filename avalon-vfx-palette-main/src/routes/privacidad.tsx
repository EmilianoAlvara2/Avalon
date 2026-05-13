import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidad — AVALON" },
      {
        name: "description",
        content:
          "Cómo AVALON recolecta, usa y protege la información personal de clientes y visitantes del sitio.",
      },
      { property: "og:title", content: "Política de Privacidad — AVALON" },
      {
        property: "og:description",
        content: "Tratamiento de datos personales en avalon.studio.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-28">
      <article className="mx-auto max-w-3xl prose-invert">
        <Link to="/" className="text-sm text-secondary hover:underline">← Volver al inicio</Link>
        <h1 className="display-font text-4xl md:text-5xl font-bold mt-6">Política de Privacidad</h1>
        <p className="text-muted-foreground mt-2 text-sm">Última actualización: mayo 2026</p>

        <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">1. Responsable</h2>
            <p>AVALON Studio (“AVALON”, “nosotros”) es responsable del tratamiento de los datos personales que recolecta a través de este sitio y de los canales de contacto asociados.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">2. Datos que recolectamos</h2>
            <p>Recolectamos los datos que nos proporcionás voluntariamente al completar el formulario de contacto: nombre, email y la descripción de tu proyecto. También podemos registrar datos técnicos básicos (IP, navegador, páginas visitadas) con fines estadísticos.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">3. Finalidad</h2>
            <p>Usamos esta información para responder tus consultas, elaborar propuestas comerciales, prestar nuestros servicios de VFX y mejorar la experiencia del sitio. No vendemos ni compartimos tus datos con terceros sin tu consentimiento.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">4. Conservación</h2>
            <p>Conservamos tus datos por el tiempo necesario para cumplir con la finalidad para la que fueron recolectados y con las obligaciones legales aplicables.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">5. Tus derechos</h2>
            <p>Podés solicitar acceso, rectificación, eliminación u oposición al tratamiento de tus datos escribiéndonos a <a className="text-secondary hover:underline" href="mailto:hola@avalon.studio">hola@avalon.studio</a>.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">6. Seguridad</h2>
            <p>Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.</p>
          </div>
          <div>
            <h2 className="display-font text-2xl font-semibold mb-2">7. Cambios</h2>
            <p>Podemos actualizar esta política. Publicaremos cualquier cambio en esta misma página indicando la fecha de la última actualización.</p>
          </div>
        </section>
      </article>
    </main>
  );
}