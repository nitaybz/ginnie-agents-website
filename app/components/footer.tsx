export function Footer() {
  return (
    <footer className="relative border-t border-rule">
      {/* Big closing statement */}
      <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10 md:py-32">
        <p className="serif-italic max-w-[18ch] text-[44px] font-light leading-[1.02] tracking-tight text-paper md:text-[68px]">
          More hands.{" "}
          <span className="not-italic text-paper-muted">
            With names.
          </span>{" "}
          <span className="text-amber">Living in Slack.</span>
        </p>
        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href="https://github.com/nitaybz/ginnie-agents"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 rounded-full border border-amber/60 bg-amber/10 px-6 py-3 font-mono text-[13px] tracking-tight text-amber transition hover:bg-amber/20 hover:text-paper"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
            github.com/nitaybz/ginnie-agents
          </a>
          <a
            href="https://github.com/nitaybz/ginnie-agents/blob/main/README.md"
            target="_blank"
            rel="noreferrer noopener"
            className="link-rule font-mono text-[13px] text-paper-dim hover:text-paper"
          >
            read the full README ↗
          </a>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-[11.5px] text-paper-muted md:flex-row md:items-center md:px-10">
          <div className="flex items-baseline gap-1.5">
            <span className="text-amber">[</span>
            <span className="text-paper">ginnie</span>
            <span>/</span>
            <span className="text-paper">agents</span>
            <span className="text-amber">]</span>
            <span className="ml-3 text-paper-faint">— MIT licensed</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="link-rule hover:text-paper" href="https://github.com/nitaybz/ginnie-agents/releases">
              releases
            </a>
            <a className="link-rule hover:text-paper" href="https://github.com/nitaybz/ginnie-agents/blob/main/ARCHITECTURE.md">
              architecture
            </a>
            <a className="link-rule hover:text-paper" href="https://github.com/nitaybz/ginnie-agents/issues">
              issues
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
