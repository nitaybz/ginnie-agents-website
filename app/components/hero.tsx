import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Backdrop image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* layered gradients for legibility + depth */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,rgba(8,8,10,0.05),rgba(8,8,10,0.55)_55%,rgba(8,8,10,0.92)_92%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent"
        />
      </div>

      {/* Top nav */}
      <header className="relative z-30">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 pt-6 md:px-10 md:pt-8">
          <a href="#top" className="inline-flex items-baseline gap-1.5 font-mono text-[13px] tracking-tight text-paper">
            <span className="text-amber">[</span>
            <span className="font-semibold">ginnie</span>
            <span className="text-paper-muted">/</span>
            <span className="font-semibold">agents</span>
            <span className="text-amber">]</span>
          </a>
          <a
            href="https://github.com/nitaybz/ginnie-agents"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 bg-ink/40 px-3.5 py-1.5 font-mono text-[12px] text-paper backdrop-blur transition hover:border-amber/60"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
            github
          </a>
        </div>
      </header>

      {/* Center content */}
      <div
        id="top"
        className="relative mx-auto flex min-h-[88vh] max-w-[1100px] flex-col items-center justify-center px-5 pb-32 pt-24 text-center md:min-h-[90vh] md:px-10 md:pb-40 md:pt-32"
      >
        <span
          className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-ink/30 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-dim backdrop-blur"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          open source · MIT · runs on Claude Code
        </span>

        <h1
          className="rise serif text-balance text-[44px] font-light leading-[0.98] tracking-[-0.025em] text-paper sm:text-[64px] md:text-[84px]"
          style={{ animationDelay: "100ms" }}
        >
          AI teammates{" "}
          <span className="serif-italic text-amber">for your Slack.</span>
        </h1>

        <p
          className="rise mt-7 max-w-[44ch] text-balance text-[17px] leading-[1.5] text-paper-dim md:text-[19px]"
          style={{ animationDelay: "200ms" }}
        >
          Open-source framework for AI coworkers — with names, voices, and
          memory that lasts. Set up entirely from inside Claude Code.
        </p>

        <div
          className="rise mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="https://github.com/nitaybz/ginnie-agents#quickstart"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-[13px] font-medium tracking-tight text-ink transition hover:bg-amber-soft"
          >
            Get started
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://github.com/nitaybz/ginnie-agents"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-ink/40 px-5 py-3 font-mono text-[13px] text-paper backdrop-blur transition hover:border-paper/40"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
