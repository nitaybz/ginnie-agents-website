type Tier = {
  file: string;
  cap: string;
  load: string;
  description: string;
  example: string;
  fill: number;
  accent: "amber" | "gold" | "steel";
};

const tiers: Tier[] = [
  {
    file: "rules.md",
    cap: "≤ 200 lines",
    load: "always remembered",
    description:
      "Things you tell the agent directly — your preferences, your guardrails. It writes them down the first time you say them, in one short line.",
    example: '“Never auto-apply changes that increase budget by more than 20%.”',
    fill: 28,
    accent: "amber",
  },
  {
    file: "playbook.md",
    cap: "≤ 300 lines",
    load: "always remembered",
    description:
      "Patterns the agent has noticed and a nightly routine has decided are real. Lessons that earned their spot.",
    example:
      '“When CTR drops 20%+ for 3+ days, check device-mix shift before increasing budget.”',
    fill: 41,
    accent: "gold",
  },
  {
    file: "episodes/2026-Q2.md",
    cap: "no cap",
    load: "looked up on demand",
    description:
      "The journal. Every meaningful exchange goes here. Not in the agent's head by default — but it can pull exactly the past it needs when you ask.",
    example:
      '“2026-04-12 · resolved a regression by reverting the budget change from 2026-04-10.”',
    fill: 78,
    accent: "steel",
  },
];

const accentColor: Record<Tier["accent"], string> = {
  amber: "var(--color-amber)",
  gold: "var(--color-gold)",
  steel: "var(--color-steel)",
};

export function MemoryDiagram() {
  return (
    <section id="memory" className="relative border-t border-rule py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mb-14 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <div className="caret mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
              how it remembers
            </div>
            <h2 className="serif-soft text-[36px] font-light leading-[1.02] tracking-tight text-paper sm:text-[44px] md:text-[58px]">
              Three layers, so it{" "}
              <span className="serif-italic text-amber">learns over time</span>{" "}
              <span className="text-paper-muted">— without forgetting.</span>
            </h2>
          </div>
          <p className="self-end font-mono text-[13px] leading-relaxed text-paper-dim md:col-span-5">
            Two of them are always in the agent's head. The third is a
            journal it looks up when you ask. Caps are real and enforced —
            no agent ever balloons into context-window soup.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-rule bg-ink-2/60">
          {/* tier rows */}
          {tiers.map((t, i) => (
            <article
              key={t.file}
              className={`grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-12 md:gap-10 md:px-10 ${
                i < tiers.length - 1 ? "border-b border-rule-soft" : ""
              }`}
            >
              <div className="md:col-span-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-faint">
                  tier {i + 1} · {t.load}
                </span>
                <div className="mt-3 font-mono text-[18px] text-paper">
                  {t.file}
                </div>
                <div className="mt-2 inline-block rounded-full border border-rule px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-muted">
                  {t.cap}
                </div>
              </div>

              <div className="md:col-span-5">
                <p className="text-[16.5px] leading-[1.55] text-paper-dim">
                  {t.description}
                </p>
                <blockquote className="mt-5 border-l border-rule pl-4 font-mono text-[12.5px] leading-relaxed text-paper-muted">
                  {t.example}
                </blockquote>
              </div>

              <div className="flex items-center md:col-span-4">
                <Bar pct={t.fill} accent={accentColor[t.accent]} cap={t.cap} fileName={t.file} />
              </div>
            </article>
          ))}

          {/* protections row */}
          <div className="grid grid-cols-1 gap-7 border-t border-rule-soft bg-ink-3/40 px-6 py-8 md:grid-cols-3 md:px-10">
            <Protection
              label="merges keep both sides"
              body="Conflicts can't silently lose a memory — git keeps every line by default."
            />
            <Protection
              label="caps are enforced"
              body="A pre-commit hook stops any commit that exceeds the cap or shrinks a journal."
            />
            <Protection
              label="warns before it hurts"
              body="A watcher DMs you when a memory file gets close to its cap, before anything bites."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar({
  pct,
  accent,
  cap,
  fileName,
}: {
  pct: number;
  accent: string;
  cap: string;
  fileName: string;
}) {
  return (
    <div className="w-full">
      <div
        className="relative h-3 overflow-hidden rounded-full border border-rule bg-ink"
        role="img"
        aria-label={`${fileName} occupies ${pct}% of its ${cap} cap`}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${accent}, ${accent}aa)`,
            boxShadow: `0 0 24px ${accent}55`,
          }}
        />
        {/* tick marks */}
        {[25, 50, 75].map((t) => (
          <span
            key={t}
            aria-hidden
            className="absolute inset-y-0 w-px bg-rule"
            style={{ left: `${t}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-baseline justify-between font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-faint">
        <span>0</span>
        <span style={{ color: accent }}>{pct}% used</span>
        <span>{cap.replace("≤ ", "")}</span>
      </div>
    </div>
  );
}

function Protection({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
        ⌗ {label}
      </div>
      <p className="mt-2 text-[13.5px] leading-[1.55] text-paper-dim">{body}</p>
    </div>
  );
}
