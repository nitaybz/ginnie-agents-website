type Line =
  | { kind: "user"; text: string }
  | { kind: "out"; text: string }
  | { kind: "spacer" };

const lines: Line[] = [
  { kind: "user", text: "set me up" },
  { kind: "out", text: "✓ docker built · listener up · doctor green" },
  { kind: "spacer" },
  { kind: "user", text: "create an agent that handles support tickets in #support" },
  { kind: "out", text: "✓ slack app created · agent wired · added to #support" },
  { kind: "spacer" },
  { kind: "user", text: "give them a friendlier voice" },
  { kind: "out", text: "✓ updated SOUL.md · agent restart not needed" },
];

export function SetupDemo() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-paper/8 bg-ink-2/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mx-auto mb-14 max-w-[820px] text-center md:mb-20">
          <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-muted">
            how it works
          </p>
          <h2 className="serif text-balance text-[34px] font-light leading-[1.04] tracking-[-0.02em] text-paper sm:text-[44px] md:text-[56px]">
            Set up by{" "}
            <span className="serif-italic text-amber">talking</span>, not
            configuring.
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-[15.5px] leading-relaxed text-paper-dim md:text-[16.5px]">
            Clone the repo, open it in Claude Code, and just say what you
            want. Every install, every new agent, every fix — done by
            conversation.
          </p>
        </header>

        <div className="mx-auto max-w-[780px]">
          <div className="overflow-hidden rounded-2xl border border-paper/10 bg-ink shadow-[0_60px_120px_-40px_rgba(255,122,45,0.18)]">
            <div className="flex items-center justify-between border-b border-paper/8 bg-ink-2/80 px-4 py-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
                claude code · you
              </span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose/70" />
                <span className="h-2 w-2 rounded-full bg-gold/70" />
                <span className="h-2 w-2 rounded-full bg-mint/70" />
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-[1.9]">
              {lines.map((l, i) => {
                if (l.kind === "spacer") return <div key={i} className="h-2" />;
                return (
                  <div key={i} className="flex gap-3">
                    <span className={l.kind === "user" ? "text-amber" : "text-mint"}>
                      {l.kind === "user" ? ">" : " "}
                    </span>
                    <span
                      className={
                        l.kind === "user" ? "text-paper" : "text-paper-dim"
                      }
                    >
                      {l.text}
                    </span>
                  </div>
                );
              })}
              <div className="mt-2 flex gap-3">
                <span className="text-amber">{">"}</span>
                <span className="inline-block h-4 w-px animate-pulse bg-paper" />
              </div>
            </pre>
          </div>

          <p className="mt-6 text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-paper-faint">
            ↑ no CLI · no YAML · no dashboard
          </p>
        </div>
      </div>
    </section>
  );
}
