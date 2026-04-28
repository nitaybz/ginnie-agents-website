type Msg = {
  who: string;
  handle?: string;
  isBot?: boolean;
  color: string;
  initials: string;
  time: string;
  body: React.ReactNode;
  reaction?: { emoji: string; count: number };
};

const messages: Msg[] = [
  {
    who: "you",
    color: "bg-steel/20 text-steel",
    initials: "y",
    time: "9:42",
    body: (
      <>
        <span className="text-steel">@ops</span> scan the fleet, anything new this morning?
      </>
    ),
  },
  {
    who: "ops",
    handle: "APP",
    isBot: true,
    color: "bg-amber/15 text-amber",
    initials: "·",
    time: "9:42",
    body: <span className="text-paper-dim">on it. ~30s.</span>,
  },
  {
    who: "ops",
    handle: "APP",
    isBot: true,
    color: "bg-amber/15 text-amber",
    initials: "·",
    time: "9:43",
    body: (
      <div className="space-y-2">
        <p>3 hosts drifted overnight.</p>
        <ul className="ml-2 space-y-1.5 text-paper-dim">
          <li>
            <span className="font-mono text-rose">●</span>{" "}
            <span className="font-mono text-paper">edr-host-04</span> · disk{" "}
            <span className="text-rose">89%</span>{" "}
            <span className="text-paper-faint">(was 71% yesterday)</span>
          </li>
          <li>
            <span className="font-mono text-mint">●</span> 2 within tolerance, monitoring
          </li>
          <li>
            <span className="font-mono text-paper-faint">·</span>{" "}
            opened task{" "}
            <span className="font-mono text-steel">#214</span> for #04
          </li>
        </ul>
        <p className="text-paper-faint">back at 14:00.</p>
      </div>
    ),
    reaction: { emoji: "👀", count: 2 },
  },
];

export function SlackThread() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,122,45,0.18),transparent_70%)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-rule bg-ink-2/90 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)] backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rule-soft bg-ink-3/60 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slack/30 font-mono text-[11px] font-semibold text-paper">
              #
            </div>
            <div className="leading-tight">
              <div className="font-mono text-[12px] text-paper">operations</div>
              <div className="font-mono text-[10px] text-paper-faint">
                4 members · 1 agent
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-muted">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
            live
          </div>
        </div>

        {/* Messages */}
        <ol className="divide-y divide-rule-soft/60 bg-ink-2/40">
          {messages.map((m, idx) => (
            <li key={idx} className="flex gap-3 px-4 py-3.5">
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-mono text-[14px] font-medium ${m.color}`}
              >
                {m.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[13px] font-semibold text-paper">
                    {m.who}
                  </span>
                  {m.handle && (
                    <span className="rounded-sm bg-ink-4 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-paper-muted">
                      {m.handle}
                    </span>
                  )}
                  <span className="font-mono text-[10.5px] text-paper-faint">
                    {m.time}
                  </span>
                </div>
                <div className="mt-1 font-mono text-[13px] leading-relaxed text-paper">
                  {m.body}
                </div>
                {m.reaction && (
                  <button className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-rule bg-ink-3 px-2 py-0.5 font-mono text-[11px] text-paper-dim transition hover:border-amber/60">
                    <span>{m.reaction.emoji}</span>
                    <span className="text-paper-muted">{m.reaction.count}</span>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Input */}
        <div className="border-t border-rule-soft bg-ink-3/40 p-3">
          <div className="flex items-center gap-2 rounded-lg border border-rule-soft bg-ink-2 px-3 py-2 font-mono text-[12px] text-paper-faint">
            <span className="text-paper-muted">message #operations</span>
            <span className="ml-auto h-4 w-px animate-pulse bg-paper-dim" />
          </div>
        </div>
      </div>

      {/* Caption underneath */}
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-faint">
        ↑ a real agent, posting to its channel — no orchestration UI in sight.
      </p>
    </div>
  );
}
