import { CopyLine } from "./ui/copy-line";
import { SlackThread } from "./slack-thread";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 md:grid-cols-12 md:gap-12 md:px-10 md:pb-24 md:pt-14 lg:gap-16 lg:pb-32 lg:pt-20">
        {/* LEFT */}
        <div className="md:col-span-7">
          <div className="rise mb-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper-muted md:text-[11px]">
            <span className="caret font-mono text-paper-dim">open source · MIT</span>
            <span aria-hidden className="hidden h-px w-8 bg-rule sm:block" />
            <span className="text-paper-muted">runs on claude code</span>
          </div>

          <h1
            className="rise serif-italic max-w-[14ch] text-[15vw] font-light leading-[0.92] tracking-[-0.025em] text-paper sm:text-[12vw] md:text-[clamp(56px,8.6vw,124px)]"
            style={{ animationDelay: "120ms" }}
          >
            <span className="block not-italic font-medium text-paper">AI teammates</span>
            <span className="block">that live in</span>
            <span className="relative inline-block">
              <span className="relative z-10 text-amber">your Slack.</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-[14%] -skew-x-6 rounded-sm bg-amber/15"
              />
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-[56ch] text-pretty text-[17px] leading-[1.55] text-paper-dim md:mt-10 md:text-[20px]"
            style={{ animationDelay: "260ms" }}
          >
            Real coworkers, not chatbots. Each one comes with a name, a Slack
            channel, and a memory that sticks around for weeks. You{" "}
            <span className="serif-italic text-paper">
              set them up from inside Claude Code
            </span>{" "}
            — no API keys to wrangle, no dashboard to host, no managed service in
            the middle.
          </p>

          <div
            className="rise mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 md:mt-12"
            style={{ animationDelay: "400ms" }}
          >
            <CopyLine text="git clone github.com/nitaybz/ginnie-agents" />

            <a
              href="https://github.com/nitaybz/ginnie-agents"
              target="_blank"
              rel="noreferrer noopener"
              className="link-rule font-mono text-[13px] tracking-tight text-paper-dim hover:text-paper"
            >
              read the source <span aria-hidden>↗</span>
            </a>
          </div>

          {/* sub-stat row */}
          <dl
            className="rise mt-12 grid max-w-md grid-cols-3 gap-5 border-t border-rule pt-6 md:mt-14 md:gap-6 md:pt-7"
            style={{ animationDelay: "540ms" }}
          >
            <Stat k="setup" v="~15min" hint="from clone to live" />
            <Stat k="api keys" v="0" hint="needed, ever" />
            <Stat k="hosting" v="yours" hint="self-hosted" />
          </dl>
        </div>

        {/* RIGHT */}
        <div
          className="rise md:col-span-5 md:pt-2"
          style={{ animationDelay: "320ms" }}
        >
          <SlackThread />
        </div>
      </div>

      {/* Marquee strip */}
      <Ticker />
    </section>
  );
}

function Stat({ k, v, hint }: { k: string; v: string; hint?: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-faint">
        {k}
      </dt>
      <dd className="mt-2 font-display text-[22px] font-medium text-paper">
        {v}
      </dd>
      {hint && (
        <p className="mt-1 font-mono text-[10.5px] text-paper-muted">{hint}</p>
      )}
    </div>
  );
}

const tickerItems = [
  "set up from inside claude code",
  "your team, your slack",
  "memory that sticks",
  "no API keys to wrangle",
  "self-hostable on anything",
  "MIT licensed",
  "feels like a teammate",
  "no dashboard to host",
  "claude code is the operator",
  "your metal · your data",
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative border-y border-rule bg-ink-2/40">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="overflow-hidden py-3">
        <div className="ticker-track flex w-max gap-12 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-muted">
          {items.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="text-amber">◇</span>
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
