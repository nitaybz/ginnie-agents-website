import { MemoryStack, IsolationDiagram, SlackIdentityCard } from "./pillar-diagrams";

type Pillar = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  body: string;
  detail?: React.ReactNode;
  accent: "amber" | "steel" | "gold" | "mint";
};

const pillars: Pillar[] = [
  {
    index: "01",
    kicker: "claude code is the operator",
    accent: "amber",
    title: (
      <>
        Set up by <span className="serif-italic text-amber">talking</span>, not configuring.
      </>
    ),
    body:
      "Clone the repo, open it in Claude Code, and just say what you want. `set me up` for the first install. “Create an agent that handles support tickets.” “The listener seems off, run doctor.” No CLI to learn, no YAML to babysit — you describe intent and the skills shipped in the repo do the wiring.",
    detail: (
      <CodeBlock
        title="claude code · interactive"
        lines={[
          { kind: "user", text: "set me up" },
          { kind: "out", text: "✓ docker built · listener up on PM2 · doctor green" },
          { kind: "user", text: "create an agent that handles support tickets" },
          { kind: "out", text: "✓ slack app made · agent wired · added to #support" },
          { kind: "user", text: "give them a friendlier voice" },
          { kind: "out", text: "✓ updated SOUL.md · agent restart not needed" },
        ]}
      />
    ),
  },
  {
    index: "02",
    kicker: "memory that doesn't reset",
    accent: "gold",
    title: (
      <>
        Remembers what matters,{" "}
        <span className="serif-italic text-gold">forgets what doesn't.</span>
      </>
    ),
    body:
      "Three layers, two of them always in the agent's head, one a journal it pulls from when you ask. Yours grows up — without forgetting and without bloating its context window into soup.",
    detail: <MemoryStack />,
  },
  {
    index: "03",
    kicker: "each agent in its own room",
    accent: "steel",
    title: (
      <>
        Quietly{" "}
        <span className="serif-italic text-steel">isolated</span> from each other.
      </>
    ),
    body:
      "Every session runs in its own clean container, mounted only with its own files. Neighbors can't see each other. The host can't be read either. Your marketing and ops agents share a box without ever meeting.",
    detail: <IsolationDiagram />,
  },
  {
    index: "04",
    kicker: "where your team already is",
    accent: "mint",
    title: (
      <>
        Shows up{" "}
        <span className="serif-italic text-mint">like a person</span>, not a webhook.
      </>
    ),
    body:
      "Its own Slack identity, its own channel, its own avatar. @mentions, threads, reactions — all of it. You talk to them the way you'd talk to anyone else.",
    detail: <SlackIdentityCard />,
  },
];

export function Pillars() {
  return (
    <section id="how-it-works" className="relative border-t border-rule py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mb-14 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="caret mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
              what makes it different
            </div>
            <h2 className="serif-soft text-[36px] font-light leading-[1.02] tracking-tight text-paper sm:text-[44px] md:text-[60px]">
              Four small decisions that make this{" "}
              <span className="serif-italic text-amber">feel like a team.</span>
            </h2>
          </div>
          <p className="self-end font-mono text-[13px] leading-relaxed text-paper-dim md:col-span-5 md:col-start-8">
            None of these are individually new. Wiring them together so it
            just works on first install — that's the part nobody else has
            quite done. (Deeper internals live in the README.)
          </p>
        </header>

        <ol className="divide-y divide-rule">
          {pillars.map((p, i) => (
            <li
              key={p.index}
              className={`grid grid-cols-1 gap-10 py-14 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[&>*:first-child]:md:order-2" : ""
              }`}
            >
              <div className="md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-mono text-[44px] leading-none ${
                      p.accent === "amber"
                        ? "text-amber"
                        : p.accent === "gold"
                          ? "text-gold"
                          : p.accent === "steel"
                            ? "text-steel"
                            : "text-mint"
                    }`}
                  >
                    /{p.index}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="serif-soft mt-6 text-[34px] font-light leading-[1.05] tracking-tight text-paper md:text-[40px]">
                  {p.title}
                </h3>
              </div>
              <div className="space-y-6 md:col-span-7">
                <p className="max-w-[60ch] text-[17px] leading-[1.55] text-paper-dim md:text-[18px]">
                  {p.body.split("`").map((part, idx) =>
                    idx % 2 === 1 ? (
                      <code
                        key={idx}
                        className="rounded bg-ink-3 px-1.5 py-0.5 font-mono text-[15px] text-paper"
                      >
                        {part}
                      </code>
                    ) : (
                      <span key={idx}>{part}</span>
                    ),
                  )}
                </p>
                {p.detail}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CodeBlock({
  title,
  lines,
}: {
  title: string;
  lines: { kind: "user" | "out"; text: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-rule bg-ink-2/80">
      <div className="flex items-center justify-between border-b border-rule-soft bg-ink-3/60 px-4 py-2">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
          {title}
        </span>
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose/70" />
          <span className="h-2 w-2 rounded-full bg-gold/70" />
          <span className="h-2 w-2 rounded-full bg-mint/70" />
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-3">
            <span
              className={
                l.kind === "user" ? "text-amber" : "text-paper-muted"
              }
            >
              {l.kind === "user" ? ">" : " "}
            </span>
            <span className={l.kind === "user" ? "text-paper" : "text-paper-dim"}>
              {l.text}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
