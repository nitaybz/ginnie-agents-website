type Line =
  | { kind: "comment"; text: string }
  | { kind: "prompt"; text: string }
  | { kind: "claude-prompt"; text: string }
  | { kind: "out"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "spacer" };

const lines: Line[] = [
  { kind: "comment", text: "── 01 · clone the repo ─────────────────────────────────" },
  { kind: "prompt", text: "git clone https://github.com/nitaybz/ginnie-agents" },
  { kind: "out", text: "Cloning into 'ginnie-agents'... done." },
  { kind: "prompt", text: "cd ginnie-agents" },

  { kind: "spacer" },
  { kind: "comment", text: "── 02 · open it in Claude Code ─────────────────────────" },
  { kind: "prompt", text: "claude" },
  { kind: "out", text: "Welcome to Claude Code · skills loaded · ready." },

  { kind: "spacer" },
  { kind: "comment", text: "── 03 · let it set you up ──────────────────────────────" },
  { kind: "claude-prompt", text: "set me up" },
  { kind: "ok", text: "✓ docker image built" },
  { kind: "ok", text: "✓ listener up on PM2" },
  { kind: "ok", text: "✓ doctor green · 12s heartbeat" },

  { kind: "spacer" },
  { kind: "comment", text: "── 04 · sketch your first teammate ─────────────────────" },
  { kind: "claude-prompt", text: "create an agent that handles support tickets in #support" },
  { kind: "ok", text: "✓ slack app created · 17 scopes wired" },
  { kind: "ok", text: "✓ agent scaffolded · soul, prompt, schedule" },
  { kind: "ok", text: "✓ added to #support · ready to chat" },

  { kind: "spacer" },
  { kind: "comment", text: "── 05 · talk to them in Slack ──────────────────────────" },
  { kind: "out", text: "you said: @support how are we doing today?" },
  { kind: "out", text: "support replied: 3 tickets resolved · 2 escalated · all green." },
];

const prereqs = [
  { label: "Claude Code", hint: "with a Max subscription" },
  { label: "Docker", hint: "20+" },
  { label: "Node.js", hint: "20+" },
  { label: "Slack", hint: "a workspace you can install apps in" },
];

export function Quickstart() {
  return (
    <section
      id="start"
      className="relative scroll-mt-12 border-t border-paper/8 bg-ink-2/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mx-auto mb-12 max-w-[820px] text-center md:mb-16">
          <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-muted">
            quickstart · ~15 minutes
          </p>
          <h2 className="serif text-balance text-[34px] font-light leading-[1.04] tracking-[-0.02em] text-paper sm:text-[44px] md:text-[56px]">
            From clone to a{" "}
            <span className="serif-italic text-amber">teammate in Slack</span>{" "}
            — without leaving Claude Code.
          </h2>
        </header>

        {/* Prerequisites — small inline list */}
        <ul className="mx-auto mb-10 grid max-w-[820px] grid-cols-2 gap-2.5 sm:grid-cols-4 md:mb-12">
          {prereqs.map((p) => (
            <li
              key={p.label}
              className="flex items-baseline gap-2 rounded-lg border border-paper/8 bg-ink-2/60 px-3 py-2.5"
            >
              <span className="font-mono text-[10px] text-amber">›</span>
              <div className="min-w-0">
                <div className="truncate font-mono text-[12px] font-semibold text-paper">
                  {p.label}
                </div>
                <div className="truncate font-mono text-[10px] text-paper-faint">
                  {p.hint}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Terminal */}
        <div className="mx-auto max-w-[860px]">
          <div className="overflow-hidden rounded-2xl border border-paper/12 bg-[#0a0a0c] shadow-[0_60px_140px_-30px_rgba(255,122,45,0.18)]">
            {/* title bar */}
            <div className="flex items-center justify-between border-b border-paper/10 bg-ink-3/80 px-4 py-2.5">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
                ~/ginnie-agents · zsh
              </span>
              <span className="font-mono text-[10.5px] text-paper-faint">
                100×40
              </span>
            </div>

            {/* body */}
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[12.5px] leading-[1.85] text-paper">
              {lines.map((l, i) => {
                if (l.kind === "spacer")
                  return <div key={i} className="h-2.5" />;

                if (l.kind === "comment")
                  return (
                    <div key={i} className="text-paper-faint">
                      <span className="text-paper-muted">#</span>{" "}
                      <span>{l.text.replace(/^── /, "").replace(/ ──.*/, "")}</span>
                      <span className="text-paper-faint">
                        {l.text.match(/ ──.*$/)?.[0] ?? ""}
                      </span>
                    </div>
                  );

                if (l.kind === "prompt")
                  return (
                    <div key={i} className="flex gap-3">
                      <span className="select-none text-amber">$</span>
                      <span className="text-paper">{l.text}</span>
                    </div>
                  );

                if (l.kind === "claude-prompt")
                  return (
                    <div key={i} className="flex gap-3">
                      <span className="select-none text-plum">{">"}</span>
                      <span className="text-paper">{l.text}</span>
                    </div>
                  );

                if (l.kind === "ok")
                  return (
                    <div key={i} className="text-mint">
                      {l.text}
                    </div>
                  );

                return (
                  <div key={i} className="text-paper-dim">
                    {l.text}
                  </div>
                );
              })}
              {/* blinking cursor at the end */}
              <div className="mt-1 flex gap-3">
                <span className="text-amber">$</span>
                <span
                  aria-hidden
                  className="inline-block h-4 w-[7px] animate-pulse bg-paper"
                />
              </div>
            </pre>
          </div>

          {/* small legend */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-paper-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-amber">$</span> shell
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-plum">{">"}</span> Claude Code
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-mint">✓</span> success
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-paper-muted">#</span> annotation
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-16">
          <a
            href="https://github.com/nitaybz/ginnie-agents"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-[13px] font-medium tracking-tight text-ink transition hover:bg-amber-soft"
          >
            Clone the repo on GitHub
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://github.com/nitaybz/ginnie-agents#quickstart"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 font-mono text-[13px] text-paper transition hover:border-paper/40"
          >
            Read the full quickstart →
          </a>
        </div>
      </div>
    </section>
  );
}
