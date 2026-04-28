type Card = {
  num: string;
  glyph: string;
  title: string;
  role: string;
  blurb: string;
  voice: string;
  accent: "amber" | "steel" | "gold" | "mint" | "rose" | "plum";
};

const cards: Card[] = [
  {
    num: "01",
    glyph: "◐",
    title: "the ops monitor",
    role: "watches your stuff · doesn't drop the thread",
    blurb:
      "Keeps an eye on what's running, opens a task when something looks off, follows up until it's actually fixed.",
    voice: "“host-04 disk 89%, was 71% yesterday — opened #214, monitoring.”",
    accent: "mint",
  },
  {
    num: "02",
    glyph: "◇",
    title: "the marketing operator",
    role: "tracks ads · ships the safe wins",
    blurb:
      "Watches your campaigns, makes the small obvious changes itself, drafts the risky ones for you, posts a short daily read.",
    voice: "“ROAS 3.1, down 14% w/w. one campaign capped early. nothing to ship today.”",
    accent: "amber",
  },
  {
    num: "03",
    glyph: "▲",
    title: "the sales analyst",
    role: "reads your calls · spots the pattern",
    blurb:
      "Pulls call recordings and CRM data every morning, finds what's repeating across deals, asks the question that moves things forward.",
    voice: "“5 of 7 lost deals mentioned price in the last 90s. proposal drafted in #sales.”",
    accent: "steel",
  },
  {
    num: "04",
    glyph: "◍",
    title: "the personal assistant",
    role: "your second brain · in your DMs",
    blurb:
      "DM it anything. It remembers what you said in March and surfaces the thing you've been quietly worrying about.",
    voice: "“you said you'd reply to A. by Tuesday. it's Tuesday. want me to draft?”",
    accent: "plum",
  },
  {
    num: "05",
    glyph: "▼",
    title: "the code-review companion",
    role: "watches your PRs · in your own words",
    blurb:
      "Reads pull requests and reminds you of decisions you've already made — quoted back in the words you used at the time.",
    voice: "“we agreed last sprint not to swallow exceptions in the worker. this PR does it twice.”",
    accent: "gold",
  },
  {
    num: "06",
    glyph: "◆",
    title: "the standup runner",
    role: "DMs the team · writes the post",
    blurb:
      "DMs each teammate every morning, collects updates, turns them into one short post your team will actually read.",
    voice: "“3 unblocked, 1 blocked on auth, 2 OOO. eng is on track for the friday demo.”",
    accent: "rose",
  },
];

const accentMap: Record<Card["accent"], { ring: string; text: string; bg: string }> = {
  amber: { ring: "ring-amber/40", text: "text-amber", bg: "bg-amber/10" },
  steel: { ring: "ring-steel/40", text: "text-steel", bg: "bg-steel/10" },
  gold: { ring: "ring-gold/40", text: "text-gold", bg: "bg-gold/10" },
  mint: { ring: "ring-mint/40", text: "text-mint", bg: "bg-mint/10" },
  rose: { ring: "ring-rose/40", text: "text-rose", bg: "bg-rose/10" },
  plum: { ring: "ring-plum/40", text: "text-plum", bg: "bg-plum/10" },
};

export function AgentTypes() {
  return (
    <section id="what-you-build" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="caret mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
              what you build
            </div>
            <h2 className="serif-soft text-[36px] font-light leading-[1.02] tracking-tight text-paper sm:text-[44px] md:text-[60px]">
              Pick a job, sketch the agent,{" "}
              <span className="serif-italic text-amber">ship it in Slack.</span>
            </h2>
          </div>
          <p className="font-mono text-[13px] leading-relaxed text-paper-dim md:col-span-5">
            About 15 minutes from idea to a working teammate. These are some
            shapes that fit — none of them ship pre-built. You decide what
            yours does and how it talks.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const a = accentMap[c.accent];
            return (
              <article
                key={c.num}
                className="group relative flex flex-col gap-6 bg-ink-2 p-7 transition-colors duration-300 hover:bg-ink-3"
              >
                <header className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.bg} ring-1 ${a.ring} text-2xl ${a.text}`}
                    aria-hidden
                  >
                    {c.glyph}
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-faint">
                    /{c.num}
                  </span>
                </header>

                <div>
                  <h3 className="serif-italic text-[24px] font-medium leading-tight text-paper">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
                    {c.role}
                  </p>
                </div>

                <p className="text-[15px] leading-[1.55] text-paper-dim">{c.blurb}</p>

                <blockquote
                  className={`mt-auto rounded-lg border-l-2 bg-ink-3/60 p-4 font-mono text-[12.5px] leading-relaxed text-paper-dim`}
                  style={{ borderLeftColor: `var(--color-${c.accent})` }}
                >
                  {c.voice}
                </blockquote>
              </article>
            );
          })}
        </div>

        <p className="mt-8 max-w-[60ch] font-mono text-[12.5px] leading-relaxed text-paper-muted md:mt-10">
          ↳ you write what each one does — its voice, its rhythm, its
          channel — in plain language. Claude Code wires up the rest.
        </p>
      </div>
    </section>
  );
}
