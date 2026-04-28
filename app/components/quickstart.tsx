import { CopyLine } from "./ui/copy-line";

const steps: { n: string; title: string; body: string; ask?: string }[] = [
  {
    n: "01",
    title: "Clone the repo, open it in Claude Code",
    body: "One repo. No global install. Claude Code finds the skills inside and takes it from there.",
  },
  {
    n: "02",
    title: "Say `set me up`",
    body: "Claude builds Docker, wakes up the listener, sets up your team directory, gets your tokens. Three sips of coffee max.",
    ask: "set me up",
  },
  {
    n: "03",
    title: "Describe your first teammate",
    body: "Tell Claude what you want this agent to do, in plain language. It scaffolds the prompt, the personality, the schedule, and the Slack app.",
    ask: "create an agent for handling support tickets in #support",
  },
  {
    n: "04",
    title: "Talk to it in Slack",
    body: "It DMs you back like anyone else on the team. Correct it once and it remembers. Tell it to do something on Mondays at 10 and it puts it on the schedule itself.",
  },
];

export function Quickstart() {
  return (
    <section id="start" className="relative border-t border-rule py-20 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <div className="caret mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
              quickstart · about 15 minutes
            </div>
            <h2 className="serif-soft text-[36px] font-light leading-[1.02] tracking-tight text-paper sm:text-[44px] md:text-[58px]">
              From <span className="serif-italic text-amber">empty repo</span>{" "}
              to a teammate in your Slack — without leaving Claude Code.
            </h2>
          </div>
          <div className="self-end md:col-span-5">
            <CopyLine text="git clone github.com/nitaybz/ginnie-agents" />
            <p className="mt-4 font-mono text-[12.5px] leading-relaxed text-paper-muted md:mt-5">
              ↳ you'll need Claude Code (with a Max subscription), Docker,
              Node 20+, and a Slack workspace you can install apps in. Runs
              on whatever box you've got.
            </p>
          </div>
        </header>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative flex flex-col gap-5 bg-ink-2 p-8 transition-colors hover:bg-ink-3"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-faint">
                  step /{s.n}
                </span>
                <span className="serif-italic text-[26px] text-amber/70 transition group-hover:text-amber">
                  ↳
                </span>
              </div>
              <h3 className="serif-soft text-[26px] font-medium leading-tight text-paper">
                {s.title.split("`").map((part, idx) =>
                  idx % 2 === 1 ? (
                    <code
                      key={idx}
                      className="rounded bg-ink-3 px-1.5 py-0.5 font-mono text-[18px] text-amber"
                    >
                      {part}
                    </code>
                  ) : (
                    <span key={idx}>{part}</span>
                  ),
                )}
              </h3>
              <p className="text-[15px] leading-[1.55] text-paper-dim">{s.body}</p>
              {s.ask && (
                <div className="mt-auto rounded-lg border border-rule-soft bg-ink-3/60 p-3 font-mono text-[12.5px] text-paper-dim">
                  <span className="text-amber">{">"}</span>{" "}
                  <span className="text-paper">{s.ask}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
