export function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 py-5 md:px-10 md:py-8">
        <a
          href="#top"
          className="group inline-flex items-baseline gap-1.5 font-mono text-[13px] tracking-tight text-paper"
        >
          <span className="text-amber">[</span>
          <span className="font-semibold">ginnie</span>
          <span className="text-paper-muted">/</span>
          <span className="font-semibold">agents</span>
          <span className="text-amber">]</span>
        </a>

        <nav className="flex items-center gap-5 font-mono text-[12px] tracking-[0.04em] md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <a
              className="link-rule text-paper-dim hover:text-paper"
              href="#what-you-build"
            >
              what you build
            </a>
            <a
              className="link-rule text-paper-dim hover:text-paper"
              href="#how-it-works"
            >
              how it works
            </a>
            <a
              className="link-rule text-paper-dim hover:text-paper"
              href="#start"
            >
              quickstart
            </a>
          </div>
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-rule px-3 py-1.5 text-paper-dim transition hover:border-amber/70 hover:text-paper md:ml-2"
            href="https://github.com/nitaybz/ginnie-agents"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
            </svg>
            github
          </a>
        </nav>
      </div>
    </header>
  );
}
