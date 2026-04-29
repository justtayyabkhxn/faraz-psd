import { StatCounter } from "./components/StatCounter";
import { ThemeToggle } from "./components/ThemeToggle";
import { RoleTicker } from "./components/RoleTicker";

/* ── inline SVG icons ─────────────────────────────── */
function YTIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.8 8s-.195-1.377-.794-1.984c-.76-.797-1.609-.8-1.998-.847C16.24 5 12 5 12 5s-4.24 0-7.008.169c-.39.047-1.238.05-1.998.847C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517C2 14.38 2.2 16 2.2 16s.195 1.377.794 1.984c.76.797 1.719.771 2.154.855C6.4 19 12 19 12 19s4.24 0 7.008-.169c.39-.047 1.238-.05 1.998-.847.599-.607.794-1.984.794-1.984S22 14.38 22 12.757V11.24C22 9.62 21.8 8 21.8 8zM9.935 14.568V9.433L15.5 12l-5.565 2.568z" />
    </svg>
  );
}

function IGIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M2 10 10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const skills = [
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "YouTube Thumbnails",
  "Color Grading",
  "Visual Identity",
  "Social Media Content",
  "Typography",
];

/* ── shared class fragments ───────────────────────── */
const pillOutline =
  "flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--edge)] text-sm text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--edge-hi)] hover:bg-[var(--surface)] transition-all duration-200";

const pillOutlineXs =
  "inline-flex items-center gap-2 px-4 py-2 text-xs border border-[var(--edge)] rounded-full text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--edge-hi)] hover:bg-[var(--surface)] transition-all duration-200 whitespace-nowrap";

const sectionLabel =
  "text-[10px] text-[var(--fg-3)] uppercase tracking-[0.3em] font-medium";

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--fg)]">

      {/* ═══ NAV ═══ */}
      <nav className="animate-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-[var(--edge)] bg-[var(--bg-nav)] backdrop-blur-xl">
        <a href="#" className="text-lg font-bold tracking-tight">faraz.</a>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-[var(--fg-2)] font-medium uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--green)]" />
            </span>
            Open for Freelance
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-14 pb-10 px-6 text-center overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center">
          {/* profile photo */}
          <div className="animate-hero-1 relative mb-5">
            <div
              className="w-34 h-34 rounded-full overflow-hidden border border-[var(--edge)]"
              style={{ boxShadow: "0 0 0 4px var(--surface)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRA_CNrIagZal3Ac5fr5t1tjqqVwLZnlsImQ&s"
                alt="Faraz"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[var(--green)]"
              style={{ border: "2px solid var(--bg)" }}
            />
          </div>

          {/* roles — swipe ticker */}
          <div className="animate-hero-2 mb-5">
            <RoleTicker />
          </div>

          {/* name */}
          <h1 className="animate-hero-3 text-7xl sm:text-9xl font-bold tracking-[-0.04em] leading-none mb-4">
            Faraz
          </h1>

          {/* tagline */}
          <p className="animate-hero-4 text-[var(--fg-2)] text-lg sm:text-xl font-light  mb-4">
            Frames that speak. Designs that move.
          </p>

          {/* bio */}
          <p className="animate-hero-4 max-w-sm sm:max-w-md text-[var(--fg-2)] text-sm sm:text-[15px] leading-relaxed mb-3">
            Based in <span className="text-[var(--fg)]">Aligarh, India</span> — turning raw footage
            and blank canvases into stories worth watching. With{" "}
            <span className="text-[var(--fg)]">148K+ subscribers</span> and{" "}
            <span className="text-[var(--fg)]">18M+ views</span> on YouTube,
            the work speaks for itself.
          </p>

          {/* current role line */}
          <p className="animate-hero-4 text-[var(--fg-3)] text-xs  tracking-[0.05em] mb-8">
            Currently at{" "}
            <a
              href="https://www.youtube.com/@imageclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline underline-offset-4 transition-all duration-200"
            >
              Image Classes Aligarh
            </a>
            {"  ·  "}
            {/* <span className="text-[var(--green)]">Open for freelance</span> */}
          </p>

          {/* CTAs */}
          <div className="animate-hero-5 flex flex-wrap items-center justify-center gap-3">
            <a href="https://www.youtube.com/c/Farazpsd" target="_blank" rel="noopener noreferrer" className={pillOutline}>
              <YTIcon className="w-4 h-4 text-red-500" />
              YouTube
            </a>
            <a href="https://www.instagram.com/farazpsd_/" target="_blank" rel="noopener noreferrer" className={pillOutline}>
              <IGIcon className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919897225289&text=Hey%2C%20Faraz"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--fg)] text-[var(--fg-inv)] text-sm font-semibold hover:opacity-90 transition-all duration-200"
            >
              Connect
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--fg-3)]">
          <span className="text-[9px] uppercase tracking-[0.3em]">scroll</span>
          <svg viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1" className="w-3.5 h-[22px]">
            <rect x="1" y="1" width="12" height="20" rx="6" />
            <circle cx="7" cy="6" r="1.5" fill="currentColor" className="scroll-dot" />
          </svg>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="border-t border-[var(--edge)] px-6 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <p className={`text-center ${sectionLabel} mb-16`}>By the numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--edge)] text-center">
            <div className="py-12 sm:py-0 sm:px-10">
              <div className="text-[72px] sm:text-[80px] xl:text-[96px] font-bold tracking-[-0.04em] leading-none mb-4 tabular-nums">
                <StatCounter to={148} suffix="K" duration={2200} />
              </div>
              <p className={`text-[10px] ${sectionLabel}`}>YouTube Subscribers</p>
            </div>
            <div className="py-12 sm:py-0 sm:px-10">
              <div className="text-[72px] sm:text-[80px] xl:text-[96px] font-bold tracking-[-0.04em] leading-none mb-4 tabular-nums">
                <StatCounter to={18.7} suffix="M" decimals={1} duration={2500} />
              </div>
              <p className={`text-[10px] ${sectionLabel}`}>Total Views</p>
            </div>
            <div className="py-12 sm:py-0 sm:px-10">
              <div className="text-[72px] sm:text-[80px] xl:text-[96px] font-bold tracking-[-0.04em] leading-none mb-4 tabular-nums">
                <StatCounter to={23.2} suffix="K" decimals={1} duration={2000} />
              </div>
              <p className={`text-[10px] ${sectionLabel}`}>Instagram Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CURRENTLY ═══ */}
      <section className="border-t border-[var(--edge)] px-6 sm:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <p className={`${sectionLabel} mb-12`}>Currently</p>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Image Classes Aligarh
              </h2>
              <p className={`${sectionLabel} mb-6`}>
                Video Grapher, Editor &amp; Graphic Designer
              </p>
              <p className="text-[var(--fg-2)] text-sm leading-relaxed max-w-md">
                Producing high-quality educational video content, managing visual
                identity, and designing engaging graphics for one of Aligarh&apos;s
                leading educational institutes.
              </p>
            </div>
            <div className="flex sm:flex-col gap-3">
              <a href="https://www.youtube.com/@imageclasses" target="_blank" rel="noopener noreferrer" className={pillOutlineXs}>
                <YTIcon className="w-3.5 h-3.5 text-red-500" />
                @imageclasses
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <a href="https://www.instagram.com/image_classes/" target="_blank" rel="noopener noreferrer" className={pillOutlineXs}>
                <IGIcon className="w-3.5 h-3.5" />
                @image_classes
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT I DO ═══ */}
      <section className="border-t border-[var(--edge)] px-6 sm:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <p className={`${sectionLabel} mb-12`}>What I Do</p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-[var(--edge)] text-sm text-[var(--fg-2)] hover:border-[var(--edge-hi)] hover:text-[var(--fg)] transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONNECT ═══ */}
      <section id="connect" className="border-t border-[var(--edge)] px-6 py-32 sm:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <p className={`${sectionLabel} mb-10`}>Get in Touch</p>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-[-0.03em] leading-[1.05] mb-8">
            Let&apos;s create<br />
            <span className="text-[var(--fg-3)]">something great.</span>
          </h2>
          <p className="text-[var(--fg-2)] text-sm sm:text-base leading-relaxed mb-14 max-w-sm mx-auto">
            Open for freelance projects in video editing, motion graphics, and
            graphic design. Reach out on Instagram or YouTube.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/farazpsd_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3 rounded-full bg-[var(--fg)] text-[var(--fg-inv)] font-semibold text-sm hover:opacity-90 transition-all duration-200"
            >
              <IGIcon className="w-4 h-4" />
              Message on Instagram
            </a>
            <a
              href="https://www.youtube.com/c/Farazpsd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3 rounded-full border border-[var(--edge)] text-sm text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--edge-hi)] hover:bg-[var(--surface)] transition-all duration-200"
            >
              <YTIcon className="w-4 h-4 text-red-500" />
              YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[var(--edge)] px-6 sm:px-10 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-base font-bold">faraz.</span>
          <p className={`text-[10px] ${sectionLabel}`}>
            Video Editor &amp; Graphic Designer · Aligarh, India
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.youtube.com/c/Farazpsd" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--fg-3)] hover:text-[var(--fg-2)] transition-colors">YouTube</a>
            <a href="https://www.instagram.com/farazpsd_/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--fg-3)] hover:text-[var(--fg-2)] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
