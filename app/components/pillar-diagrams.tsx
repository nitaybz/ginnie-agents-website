/* Memory tiers — three stacked layers */
export function MemoryStack() {
  const tiers = [
    {
      label: "rules.md",
      hint: "≤ 200 lines · always",
      fill: 28,
      accent: "var(--color-amber)",
      depth: 0,
    },
    {
      label: "playbook.md",
      hint: "≤ 300 lines · always",
      fill: 41,
      accent: "var(--color-gold)",
      depth: 1,
    },
    {
      label: "episodes/",
      hint: "no cap · on demand",
      fill: 78,
      accent: "var(--color-steel)",
      depth: 2,
    },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-rule bg-ink-2/70 p-6">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative flex flex-col gap-3">
        {tiers.map((t) => (
          <div
            key={t.label}
            className="relative overflow-hidden rounded-xl border border-rule-soft bg-ink-3/80"
            style={{ marginLeft: `${t.depth * 14}px` }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: t.accent }}
                />
                <span className="font-mono text-[12.5px] text-paper">
                  {t.label}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper-faint">
                {t.hint}
              </span>
            </div>
            <div className="relative h-1.5 w-full bg-ink">
              <span
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${t.fill}%`,
                  background: `linear-gradient(90deg, ${t.accent}, ${t.accent}aa)`,
                  boxShadow: `0 0 16px ${t.accent}55`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-5 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-muted">
        <span aria-hidden className="h-px flex-1 bg-rule" />
        <span>≤ 500 lines always-loaded · forever</span>
        <span aria-hidden className="h-px flex-1 bg-rule" />
      </div>
    </div>
  );
}

/* Container isolation — host + 3 isolated agent containers */
export function IsolationDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-rule bg-ink-2/70 p-6">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <svg
        viewBox="0 0 600 320"
        fill="none"
        className="relative w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="hostgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-ink-3)" />
            <stop offset="100%" stopColor="var(--color-ink-2)" />
          </linearGradient>
          <pattern
            id="isodot"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.5" cy="0.5" r="0.4" fill="rgba(237,233,222,0.08)" />
          </pattern>
        </defs>

        {/* Host */}
        <rect
          x="20"
          y="220"
          width="560"
          height="80"
          rx="14"
          fill="url(#hostgrad)"
          stroke="var(--color-rule)"
        />
        <rect
          x="20"
          y="220"
          width="560"
          height="80"
          rx="14"
          fill="url(#isodot)"
        />
        <text
          x="40"
          y="250"
          fontFamily="var(--font-mono)"
          fontSize="11"
          letterSpacing="2.5"
          fill="rgba(237,233,222,0.55)"
        >
          YOUR HOST
        </text>
        <text
          x="40"
          y="282"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="rgba(237,233,222,0.85)"
        >
          listener · docker · pm2
        </text>

        {/* Connection lines */}
        <path
          d="M 130 220 Q 130 170 130 130"
          stroke="rgba(237,233,222,0.18)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M 300 220 Q 300 170 300 130"
          stroke="rgba(237,233,222,0.18)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />
        <path
          d="M 470 220 Q 470 170 470 130"
          stroke="rgba(237,233,222,0.18)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          fill="none"
        />

        {/* Containers */}
        {[
          { x: 60, color: "var(--color-amber)", label: "marketing" },
          { x: 230, color: "var(--color-steel)", label: "ops" },
          { x: 400, color: "var(--color-mint)", label: "support" },
        ].map((c) => (
          <g key={c.label}>
            <rect
              x={c.x}
              y={20}
              width={140}
              height={110}
              rx={10}
              fill="var(--color-ink-3)"
              stroke={c.color}
              strokeOpacity="0.55"
            />
            <rect
              x={c.x + 10}
              y={32}
              width={120}
              height={6}
              rx={3}
              fill={c.color}
              fillOpacity="0.6"
            />
            <rect
              x={c.x + 10}
              y={46}
              width={88}
              height={4}
              rx={2}
              fill="rgba(237,233,222,0.4)"
            />
            <rect
              x={c.x + 10}
              y={56}
              width={104}
              height={4}
              rx={2}
              fill="rgba(237,233,222,0.25)"
            />
            <rect
              x={c.x + 10}
              y={66}
              width={70}
              height={4}
              rx={2}
              fill="rgba(237,233,222,0.25)"
            />
            <text
              x={c.x + 10}
              y={108}
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="2"
              fill="rgba(237,233,222,0.7)"
            >
              {c.label.toUpperCase()}
            </text>
            <text
              x={c.x + 10}
              y={120}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill={c.color}
              fillOpacity="0.85"
            >
              fresh · ephemeral
            </text>
            {/* lock icon */}
            <g transform={`translate(${c.x + 116}, 100)`}>
              <rect
                x="0"
                y="6"
                width="14"
                height="10"
                rx="2"
                fill="var(--color-ink-2)"
                stroke={c.color}
                strokeOpacity="0.7"
              />
              <path
                d="M 3 6 Q 3 0 7 0 Q 11 0 11 6"
                fill="none"
                stroke={c.color}
                strokeOpacity="0.7"
                strokeWidth="1.4"
              />
            </g>
          </g>
        ))}

        {/* Crossed connection between containers — to indicate they cannot see each other */}
        <g stroke="rgba(225,110,77,0.45)" strokeWidth="1.2" strokeLinecap="round">
          <line x1="200" y1="80" x2="230" y2="80" strokeDasharray="3 3" />
          <line x1="208" y1="74" x2="222" y2="86" />
          <line x1="208" y1="86" x2="222" y2="74" />
        </g>
        <g stroke="rgba(225,110,77,0.45)" strokeWidth="1.2" strokeLinecap="round">
          <line x1="370" y1="80" x2="400" y2="80" strokeDasharray="3 3" />
          <line x1="378" y1="74" x2="392" y2="86" />
          <line x1="378" y1="86" x2="392" y2="74" />
        </g>
      </svg>

      <p className="relative mt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-paper-muted">
        ↳ neighbors can't read each other · host can't be read either
      </p>
    </div>
  );
}

/* Slack identity — channel with three agent rows */
export function SlackIdentityCard() {
  const rows = [
    {
      ch: "#ops",
      who: "ops",
      preview: "host-04 disk 89% — opened #214",
      color: "var(--color-mint)",
    },
    {
      ch: "#ads",
      who: "marketing",
      preview: "ROAS 3.1, down 14% w/w. nothing to ship today.",
      color: "var(--color-amber)",
    },
    {
      ch: "#support",
      who: "support",
      preview: "3 tickets resolved · 2 escalated to humans",
      color: "var(--color-steel)",
    },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-rule bg-ink-2/70">
      <div className="flex items-center justify-between border-b border-rule-soft bg-ink-3/60 px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-mint pulse-dot" />
          your slack workspace
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose/70" />
          <span className="h-2 w-2 rounded-full bg-gold/70" />
          <span className="h-2 w-2 rounded-full bg-mint/70" />
        </div>
      </div>
      <ul className="divide-y divide-rule-soft">
        {rows.map((r) => (
          <li key={r.ch} className="flex items-center gap-3 px-4 py-3.5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-mono text-[12px] font-semibold"
              style={{ background: `${r.color}22`, color: r.color }}
            >
              ·
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[12.5px] font-semibold text-paper">
                  {r.who}
                </span>
                <span className="rounded-sm bg-ink-4 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-paper-muted">
                  app
                </span>
                <span className="font-mono text-[10.5px] text-paper-faint">
                  {r.ch}
                </span>
              </div>
              <p className="mt-0.5 truncate font-mono text-[12px] text-paper-dim">
                {r.preview}
              </p>
            </div>
            <span
              className="hidden font-mono text-[10px] uppercase tracking-[0.16em] sm:inline"
              style={{ color: r.color }}
            >
              live
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-rule-soft bg-ink-3/40 px-4 py-3 font-mono text-[11px] text-paper-muted">
        <span className="text-amber">↳</span> three teammates · one workspace ·
        each one a real Slack identity
      </div>
    </div>
  );
}
