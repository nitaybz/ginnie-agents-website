import { SlackMockup } from "./slack-mockup";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft atmospheric backdrop (no longer image-based) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_-5%,rgba(255,122,45,0.18),transparent_60%),radial-gradient(40%_40%_at_85%_30%,rgba(122,169,255,0.10),transparent_60%),linear-gradient(180deg,#0c0c10_0%,#08080a_100%)]"
      />

      {/* Top nav */}
      <header className="relative z-30">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 pt-6 md:px-10 md:pt-8">
          <a
            href="#top"
            className="inline-flex items-baseline gap-1.5 font-mono text-[13px] tracking-tight text-paper"
          >
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

      {/* Headline column */}
      <div
        id="top"
        className="relative mx-auto max-w-[1100px] px-5 pt-14 text-center md:px-10 md:pt-20"
      >
        <span
          className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-ink/30 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-dim backdrop-blur"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          open source · MIT · runs on Claude Code
        </span>

        <h1
          className="rise serif text-balance text-[42px] font-light leading-[1.0] tracking-[-0.025em] text-paper sm:text-[60px] md:text-[80px]"
          style={{ animationDelay: "100ms" }}
        >
          AI teammates{" "}
          <span className="serif-italic text-amber">for your Slack.</span>
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-[42ch] text-balance text-[16px] leading-[1.5] text-paper-dim sm:mt-7 md:text-[18px]"
          style={{ animationDelay: "200ms" }}
        >
          Open-source framework for AI coworkers — with names, voices, and
          memory that lasts. Set up entirely from inside Claude Code.
        </p>

        <div
          className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#start"
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

      {/* Product mockup — centerpiece */}
      <div
        className="rise relative mx-auto mt-16 max-w-[1100px] px-5 pb-24 sm:mt-20 sm:px-6 md:mt-24 md:px-10 md:pb-32"
        style={{ animationDelay: "420ms" }}
      >
        <SlackMockup />
        <p className="mt-6 text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-paper-faint">
          ↑ a real agent, posting in its own channel — no orchestration UI
        </p>
      </div>

      {/* Soft fade-out edge to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink"
      />
    </section>
  );
}
