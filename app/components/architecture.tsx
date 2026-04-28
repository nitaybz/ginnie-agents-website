export function Architecture() {
  return (
    <section className="relative border-t border-paper/8 py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-6 md:px-10">
        <header className="mx-auto mb-14 max-w-[760px] text-center md:mb-16">
          <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper-muted">
            architecture
          </p>
          <h2 className="serif text-balance text-[34px] font-light leading-[1.04] tracking-[-0.02em] text-paper sm:text-[40px] md:text-[48px]">
            Three moving parts.{" "}
            <span className="serif-italic text-amber">That's it.</span>
          </h2>
        </header>

        <div className="mx-auto max-w-[1000px]">
          {/* Diagram */}
          <div className="relative overflow-hidden rounded-2xl border border-paper/10 bg-ink-2/50 px-6 py-12 md:px-12 md:py-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
              <Node
                label="Slack"
                kicker="where they live"
                color="var(--color-mint)"
                icon={<SlackIcon />}
              />
              <Connector />
              <Node
                label="Listener"
                kicker="spawns containers"
                color="var(--color-amber)"
                icon={<ListenerIcon />}
              />
              <Connector />
              <Node
                label="Agent · Docker"
                kicker="fresh, isolated, ephemeral"
                color="var(--color-steel)"
                icon={<AgentIcon />}
              />
            </div>

            <p className="mt-10 text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-paper-faint md:mt-14">
              your machine · your data · your slack
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-[55ch] text-center text-[14.5px] leading-relaxed text-paper-dim md:mt-10">
            A small daemon listens to Slack. Each message spins up a fresh
            container with only that agent's files, runs the Claude Agent
            SDK, and posts back. Containers can't see each other or your
            host.
          </p>
        </div>
      </div>
    </section>
  );
}

function Node({
  label,
  kicker,
  color,
  icon,
}: {
  label: string;
  kicker: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center md:col-span-1">
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-paper/10 bg-ink-3"
        style={{
          boxShadow: `0 0 0 1px ${color}22, 0 30px 60px -30px ${color}66`,
        }}
      >
        <span className="absolute -inset-px rounded-2xl" style={{ background: `radial-gradient(60% 60% at 50% 0%, ${color}25, transparent 70%)` }} />
        <span className="relative" style={{ color }}>
          {icon}
        </span>
      </div>
      <p className="serif mt-5 text-[22px] text-paper">{label}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-muted">
        {kicker}
      </p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center md:col-span-1" aria-hidden>
      {/* Mobile: vertical down arrow */}
      <span className="font-mono text-paper-faint md:hidden">↓</span>
      {/* Desktop: horizontal dashed line */}
      <svg
        className="hidden h-12 w-full md:block"
        viewBox="0 0 200 48"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="24"
          x2="200"
          y2="24"
          stroke="var(--color-paper)"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <circle cx="100" cy="24" r="2" fill="var(--color-amber)" />
      </svg>
    </div>
  );
}

function SlackIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5.04 14.83a2.07 2.07 0 1 1 2.07-2.07v2.07Zm1.04 0a2.07 2.07 0 1 1 4.14 0v5.18a2.07 2.07 0 1 1-4.14 0Zm2.07-9.93A2.07 2.07 0 1 1 10.22 6.97H8.15Zm0 1.04a2.07 2.07 0 1 1 0 4.14H2.97a2.07 2.07 0 1 1 0-4.14ZM18 9.07a2.07 2.07 0 1 1-2.07 2.07V9.07Zm-1.04 0a2.07 2.07 0 1 1-4.14 0V3.9a2.07 2.07 0 1 1 4.14 0Zm-2.07 9.93a2.07 2.07 0 1 1-2.07-2.07h2.07Zm0-1.04a2.07 2.07 0 1 1 0-4.14h5.18a2.07 2.07 0 1 1 0 4.14Z" />
    </svg>
  );
}

function ListenerIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 0 1 18 0v3a3 3 0 0 1-3 3h-1v-6h4" />
      <path d="M3 12v3a3 3 0 0 0 3 3h1v-6H3" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 16.5L12 21 3 16.5V7.5L12 3l9 4.5z" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <line x1="3" y1="7.5" x2="12" y2="12" />
      <line x1="21" y1="7.5" x2="12" y2="12" />
    </svg>
  );
}
