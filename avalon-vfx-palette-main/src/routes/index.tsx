import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-vfx.jpg";
import workEvent from "@/assets/work-event.jpg";
import workGen from "@/assets/work-generative.jpg";
import workBrand from "@/assets/work-brand.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AVALON — VFX & Visuales con TouchDesigner" },
      {
        name: "description",
        content:
          "Estudio AVALON: VFX, visuales en vivo y arte generativo con TouchDesigner para marcas, artistas y eventos de música.",
      },
      { property: "og:title", content: "AVALON — Alquimia Visual" },
      {
        property: "og:description",
        content: "VFX y visuales generativos para marcas, artistas y eventos.",
      },
    ],
  }),
});

const services = [
  {
    title: "Visuales para eventos",
    desc: "Mapping, LED walls y visuales sincronizados al BPM para conciertos, festivales y clubs.",
    icon: "🎛️",
  },
  {
    title: "Contenido para artistas",
    desc: "Loops, music videos generativos y cover art para singles, EPs y giras.",
    icon: "🎨",
  },
  {
    title: "Activaciones de marca",
    desc: "Instalaciones interactivas, branded content y experiencias inmersivas para empresas.",
    icon: "⚡",
  },
];

const steps = [
  { n: "01", t: "Brief", d: "Entendemos marca, audiencia y objetivos." },
  { n: "02", t: "Concepto", d: "Moodboards y dirección visual." },
  { n: "03", t: "Diseño", d: "Sistemas generativos en TouchDesigner." },
  { n: "04", t: "Render", d: "Output en 4K, sync a audio y entrega." },
  { n: "05", t: "Show", d: "Operación en vivo o entrega final." },
];

const works = [
  { img: workEvent, tag: "EVENTO", title: "Tour Visual — Live Set" },
  { img: workGen, tag: "GENERATIVO", title: "Fluid System / Loop 4K" },
  { img: workBrand, tag: "MARCA", title: "Activación LED — Lanzamiento" },
];

const promos = [
  { title: "Pack Single", price: "Desde $4,500", desc: "Cover art animado + 3 loops verticales para reels." },
  { title: "Show Live", price: "Desde $12,000", desc: "Set de visuales 30–60 min, sync BPM, operado en vivo." },
  { title: "Brand Activation", price: "A medida", desc: "Instalación interactiva o LED wall para tu evento." },
];

const testimonials = [
  { q: "Los visuales transformaron la noche. La gente no paró de grabar.", a: "— Promotor, festival electrónico" },
  { q: "Profesionales, ordenados y con un estilo único. Volveremos.", a: "— Director de marca" },
  { q: "Hicieron que mi single se viera como un universo entero.", a: "— Artista independiente" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Works />
      <Promos />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass rounded-full px-5 py-3 flex items-center justify-between">
          <a href="#top" className="display-font text-lg font-bold tracking-tight">
            AVALON<span className="text-secondary">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
            <a href="#proceso" className="hover:text-foreground transition">Proceso</a>
            <a href="#trabajos" className="hover:text-foreground transition">Trabajos</a>
            <a href="#promos" className="hover:text-foreground transition">Promos</a>
          </nav>
          <a
            href="#contacto"
            className="text-sm font-semibold rounded-full bg-secondary text-secondary-foreground px-4 py-2 hover:scale-[1.03] transition"
          >
            Cotizar
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 text-center relative">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-secondary glow-lime" />
          Estudio de VFX · TouchDesigner
        </div>
        <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
          Alquimia visual <br />
          <span className="text-gradient">para marcas y escenarios.</span>
        </h1>
        <p className="mt-7 max-w-2xl mx-auto text-lg text-muted-foreground">
          Diseñamos VFX, visuales en vivo y arte generativo que convierten un escenario, un lanzamiento
          o una campaña en una experiencia que se recuerda.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold glow-lime hover:scale-[1.03] transition"
          >
            Empezar un proyecto
          </a>
          <a
            href="#trabajos"
            className="rounded-full border border-border bg-card/50 backdrop-blur px-7 py-3.5 font-semibold hover:border-primary transition"
          >
            Ver trabajos
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["TouchDesigner", "Real-time VFX", "Projection Mapping", "Generative Art", "Live Visuals", "LED Walls", "Sync to Audio"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border py-5 overflow-hidden bg-card/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {row.map((t, i) => (
          <span key={i} className="display-font text-2xl text-muted-foreground flex items-center gap-12">
            {t} <span className="text-secondary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Servicios" title="Lo que hacemos" />
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary transition overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                   style={{ background: "var(--gradient-radial)" }} />
              <div className="relative">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="display-font text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="py-28 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Proceso" title="De la idea al show" />
        <ol className="mt-14 grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-xl border border-border bg-card/60 p-6">
              <div className="display-font text-3xl text-gradient font-bold">{s.n}</div>
              <div className="mt-3 font-semibold">{s.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="trabajos" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Trabajos" title="Selección reciente" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {works.map((w) => (
            <figure
              key={w.title}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/5]"
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6">
                <span className="text-xs tracking-[0.25em] text-secondary">{w.tag}</span>
                <div className="display-font text-xl font-semibold mt-1">{w.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promos() {
  return (
    <section id="promos" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Promos" title="Paquetes para arrancar" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {promos.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-2xl p-8 border ${
                i === 1
                  ? "border-secondary bg-card glow-lime"
                  : "border-border bg-card/60"
              }`}
            >
              {i === 1 && (
                <div className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                  Más popular
                </div>
              )}
              <h3 className="display-font text-2xl font-bold">{p.title}</h3>
              <div className="mt-2 text-gradient display-font text-3xl font-bold">{p.price}</div>
              <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
              <a
                href="#contacto"
                className={`mt-6 block text-center rounded-full px-5 py-3 font-semibold transition ${
                  i === 1
                    ? "bg-secondary text-secondary-foreground hover:scale-[1.02]"
                    : "border border-border hover:border-primary"
                }`}
              >
                Solicitar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Opiniones" title="Lo que dicen" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <blockquote
              key={t.a}
              className="rounded-2xl border border-border bg-card p-7 relative"
            >
              <div className="text-secondary text-4xl leading-none mb-3">"</div>
              <p className="text-foreground/90 leading-relaxed">{t.q}</p>
              <footer className="mt-4 text-sm text-muted-foreground">{t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-28 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border p-10 md:p-16 relative overflow-hidden glass">
        <div className="absolute -top-32 -right-32 size-80 rounded-full blur-3xl opacity-40"
             style={{ background: "var(--neon-purple)" }} />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full blur-3xl opacity-30"
             style={{ background: "var(--neon-lime)" }} />
        <div className="relative">
          <h2 className="display-font text-4xl md:text-5xl font-bold">
            ¿Listo para <span className="text-gradient">encender</span> tu próximo show?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Contanos qué tenés en mente. Te respondemos en menos de 24h con una propuesta inicial.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-8 grid sm:grid-cols-2 gap-3"
          >
            <input
              required
              placeholder="Tu nombre"
              className="rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary"
            />
            <textarea
              required
              rows={4}
              placeholder="Contanos sobre el proyecto: fecha, lugar, vibe..."
              className="sm:col-span-2 rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-full bg-secondary text-secondary-foreground py-3.5 font-semibold glow-lime hover:scale-[1.01] transition"
            >
              {sent ? "¡Recibido! Te escribimos pronto ✦" : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-10 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="display-font text-lg text-foreground">
            AVALON<span className="text-secondary">.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition">Instagram</a>
            <a href="#" className="hover:text-secondary transition">TikTok</a>
            <a href="#" className="hover:text-secondary transition">Vimeo</a>
          </div>
          <div>© 2026 AVALON · Ciudad Juárez, MX</div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-5 pt-4 border-t border-border/60 text-xs">
          <Link to="/privacidad" className="hover:text-secondary transition">Política de Privacidad</Link>
          <Link to="/cookies" className="hover:text-secondary transition">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-3">{kicker}</div>
        <h2 className="display-font text-4xl md:text-5xl font-bold max-w-xl">{title}</h2>
      </div>
      <div className="h-px flex-1 min-w-[60px] bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}
