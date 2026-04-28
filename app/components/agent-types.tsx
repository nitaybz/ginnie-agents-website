import Image from "next/image";

type Card = {
  src: string;
  name: string;
  tag: string;
};

const cards: Card[] = [
  { src: "/img/agents/ops.png", name: "the ops monitor", tag: "watches your stuff · doesn't drop the thread" },
  { src: "/img/agents/marketing.png", name: "the marketing operator", tag: "tracks ads · ships the safe wins" },
  { src: "/img/agents/sales.png", name: "the sales analyst", tag: "reads your calls · spots the pattern" },
  { src: "/img/agents/assistant.png", name: "the personal assistant", tag: "your second brain · in your DMs" },
  { src: "/img/agents/codereview.png", name: "the code-review companion", tag: "watches your PRs · in your own words" },
  { src: "/img/agents/standup.png", name: "the standup runner", tag: "DMs the team · writes the post" },
];

export function AgentTypes() {
  return (
    <section id="what-you-build" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mx-auto mb-14 max-w-[760px] text-center md:mb-20">
          <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-muted">
            what you build
          </p>
          <h2 className="serif text-balance text-[34px] font-light leading-[1.04] tracking-[-0.02em] text-paper sm:text-[44px] md:text-[56px]">
            Pick a job, ship a{" "}
            <span className="serif-italic text-amber">teammate.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[55ch] text-[15.5px] leading-relaxed text-paper-dim md:text-[16.5px]">
            About 15 minutes from idea to a working agent in your Slack —
            voice, schedule, memory, and all.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.src}
              className="group relative overflow-hidden rounded-2xl border border-paper/8 bg-ink-2/60 transition hover:border-paper/15"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={c.src}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink-2/80 via-ink-2/0 to-transparent"
                />
              </div>
              <div className="space-y-1.5 px-5 py-5">
                <h3 className="serif-italic text-[22px] font-medium leading-tight text-paper">
                  {c.name}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-muted">
                  {c.tag}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-[55ch] text-center font-mono text-[12.5px] leading-relaxed text-paper-muted md:mt-14">
          ↳ none ship pre-built. You decide what each one does and how it
          talks. Claude Code wires up the rest.
        </p>
      </div>
    </section>
  );
}
