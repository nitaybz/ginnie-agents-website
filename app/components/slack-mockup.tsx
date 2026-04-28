type Channel = {
  name: string;
  active?: boolean;
  unread?: boolean;
  dot?: string;
};

const channels: Channel[] = [
  { name: "operations", active: true, dot: "var(--color-mint)" },
  { name: "ads", unread: true, dot: "var(--color-amber)" },
  { name: "sales", dot: "var(--color-steel)" },
  { name: "support", dot: "var(--color-plum)" },
  { name: "code-review", dot: "var(--color-gold)" },
  { name: "standup", dot: "var(--color-rose)" },
];

const dms = [
  { who: "ops", color: "var(--color-mint)", online: true },
  { who: "ads", color: "var(--color-amber)", online: true },
  { who: "sally", color: "var(--color-steel)", online: false },
];

export function SlackMockup() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 rounded-[40px] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,122,45,0.25),transparent_70%)] blur-3xl"
      />
      {/* outer chrome */}
      <div className="overflow-hidden rounded-2xl border border-paper/15 bg-ink-2/95 shadow-[0_60px_140px_-30px_rgba(0,0,0,0.85)] backdrop-blur-sm">
        {/* macOS-style top bar */}
        <div className="flex items-center gap-2 border-b border-paper/10 bg-ink-3/80 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/80" />
          </span>
          <span className="ml-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-muted">
            slack · your workspace
          </span>
        </div>

        <div className="grid grid-cols-12 min-h-[440px]">
          {/* Sidebar */}
          <aside className="col-span-4 hidden border-r border-paper/8 bg-[#3F0E40]/30 sm:block md:col-span-3">
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-semibold tracking-tight text-paper">
                  Your Team
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-muted">
                  ⌘K
                </span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 font-mono text-[10.5px] text-mint">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint pulse-dot" />
                you
              </p>
            </div>

            <div className="mt-6 px-2">
              <p className="px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper-faint">
                channels
              </p>
              <ul className="mt-1.5 space-y-0.5">
                {channels.map((c) => (
                  <li
                    key={c.name}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] ${
                      c.active
                        ? "bg-paper/10 text-paper"
                        : "text-paper-dim hover:bg-paper/5"
                    }`}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: c.dot, opacity: c.active ? 1 : 0.7 }}
                    />
                    <span className="font-mono text-[12.5px]">#</span>
                    <span className={c.unread ? "font-semibold text-paper" : ""}>
                      {c.name}
                    </span>
                    {c.unread && (
                      <span
                        className="ml-auto rounded-full bg-amber px-1.5 py-0.5 font-mono text-[9px] font-semibold text-ink"
                        aria-label="2 unread messages"
                      >
                        2
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 px-2">
              <p className="px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper-faint">
                direct messages
              </p>
              <ul className="mt-1.5 space-y-0.5">
                {dms.map((d) => (
                  <li
                    key={d.who}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] text-paper-dim"
                  >
                    <span className="relative inline-flex">
                      <span
                        className="h-4 w-4 rounded-sm"
                        style={{ background: `${d.color}55` }}
                      />
                      {d.online && (
                        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#3F0E40] bg-mint" />
                      )}
                    </span>
                    <span>{d.who}</span>
                    <span className="ml-auto rounded bg-paper/10 px-1 font-mono text-[8.5px] uppercase tracking-[0.16em] text-paper-muted">
                      app
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main panel */}
          <section className="col-span-12 sm:col-span-8 md:col-span-9">
            {/* Channel header */}
            <div className="flex items-center justify-between border-b border-paper/8 bg-ink-2/70 px-5 py-3">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[14px] text-paper-muted">#</span>
                <span className="text-[15px] font-semibold text-paper">operations</span>
                <span className="font-mono text-[11px] text-paper-faint">
                  4 members · 1 agent
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint pulse-dot" />
                live
              </div>
            </div>

            {/* Messages */}
            <ol className="divide-y divide-paper/5">
              <Msg
                avatarBg="bg-steel/25"
                avatarFg="text-steel"
                initials="y"
                who="you"
                time="9:42"
              >
                <span className="text-steel">@ops</span> scan the fleet, anything
                new this morning?
              </Msg>

              <Msg
                avatarBg="bg-mint/15"
                avatarFg="text-mint"
                initials="·"
                who="ops"
                bot
                time="9:42"
              >
                <span className="text-paper-dim">on it. ~30s.</span>
              </Msg>

              <Msg
                avatarBg="bg-mint/15"
                avatarFg="text-mint"
                initials="·"
                who="ops"
                bot
                time="9:43"
                reaction={{ emoji: "👀", count: 2 }}
              >
                <p>3 hosts drifted overnight.</p>
                <ul className="mt-1.5 space-y-1 text-paper-dim">
                  <li>
                    <span className="text-rose">●</span>{" "}
                    <span className="text-paper">edr-host-04</span> · disk{" "}
                    <span className="text-rose">89%</span>{" "}
                    <span className="text-paper-faint">(was 71% yesterday)</span>
                  </li>
                  <li>
                    <span className="text-mint">●</span> 2 within tolerance,
                    monitoring
                  </li>
                  <li>
                    <span className="text-paper-faint">·</span> opened task{" "}
                    <span className="text-steel">#214</span> for #04
                  </li>
                </ul>
                <p className="mt-1.5 text-paper-faint">back at 14:00.</p>
              </Msg>
            </ol>

            {/* Composer */}
            <div className="border-t border-paper/8 bg-ink-2/40 p-3">
              <div className="flex items-center gap-2 rounded-lg border border-paper/10 bg-ink/60 px-3 py-2.5">
                <span className="font-mono text-[12.5px] text-paper-faint">
                  Message #operations
                </span>
                <span aria-hidden className="ml-auto h-4 w-px animate-pulse bg-paper-dim" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Msg({
  avatarBg,
  avatarFg,
  initials,
  who,
  bot,
  time,
  reaction,
  children,
}: {
  avatarBg: string;
  avatarFg: string;
  initials: string;
  who: string;
  bot?: boolean;
  time: string;
  reaction?: { emoji: string; count: number };
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 px-5 py-4">
      <div
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-mono text-[14px] font-medium ${avatarBg} ${avatarFg}`}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[13.5px] font-semibold text-paper">{who}</span>
          {bot && (
            <span className="rounded-sm bg-paper/10 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-paper-muted">
              app
            </span>
          )}
          <span className="font-mono text-[11px] text-paper-faint">{time}</span>
        </div>
        <div className="mt-1 text-[13.5px] leading-relaxed text-paper">
          {children}
        </div>
        {reaction && (
          <button className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-paper/15 bg-ink-3 px-2 py-0.5 font-mono text-[11px] text-paper-dim">
            <span>{reaction.emoji}</span>
            <span className="text-paper-muted">{reaction.count}</span>
          </button>
        )}
      </div>
    </li>
  );
}
