import type { ComponentType, SVGProps } from "react";
import {
  ExclamationTriangleIcon,
  FireIcon,
  SignalIcon,
} from "@heroicons/react/24/solid";

type FeatureIcon = ComponentType<SVGProps<SVGSVGElement>>;
type GlowSide = "left" | "center" | "right";

const features: {
  title: string;
  description: string;
  Icon: FeatureIcon;
  glow: GlowSide;
}[] = [
  {
    title: "Real-time Gas Detection",
    description: "Detects dangerous concentrations and issues alerts instantly.",
    Icon: FireIcon,
    glow: "right",
  },
  {
    title: "LoRa Radio Hub Integration",
    description: "Radio hubs transmit data reliably over a large area.",
    Icon: SignalIcon,
    glow: "center",
  },
  {
    title: "Instant Alerts",
    description:
      "The central system integrates every signal into a clear picture.",
    Icon: ExclamationTriangleIcon,
    glow: "left",
  },
];

const glowPosition: Record<
  GlowSide,
  { orange: string; white: string }
> = {
  right: {
    orange: "right-[-40px] top-[-125px]",
    white: "right-[-10px] top-[-79px]",
  },
  center: {
    orange: "left-1/2 top-[-136px] -translate-x-1/2",
    white: "left-1/2 top-[-90px] -translate-x-1/2",
  },
  left: {
    orange: "left-[-111px] top-[-125px]",
    white: "left-[-65px] top-[-79px]",
  },
};

function FeatureIconGlow({ Icon }: { Icon: FeatureIcon }) {
  return (
    <div className="relative z-10 flex h-[210px] w-full items-center justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute size-16 rounded-full bg-accent/[0.04] blur-xl transition-all duration-300 group-hover:size-24 group-hover:bg-accent/10"
      />
      <Icon
        className="relative size-36 text-accent transition-[filter] duration-300 [filter:drop-shadow(0_0_1px_rgba(252,96,2,0.15))] group-hover:[filter:drop-shadow(0_0_5px_rgba(252,96,2,0.4))_drop-shadow(0_0_10px_rgba(252,96,2,0.18))]"
        aria-hidden
      />
    </div>
  );
}

export function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-background px-4 py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-12 md:gap-16">
        <div className="relative flex w-full flex-col items-center justify-center">
          <h2 className="relative z-10 max-w-[550px] text-center text-[clamp(2rem,5vw,3.125rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
            Safety that&apos;s always close at hand
          </h2>
          <p
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 bg-gradient-to-t from-transparent from-[12%] to-white/25 to-[71%] bg-clip-text text-[clamp(5rem,20vw,15.625rem)] font-semibold leading-none tracking-[-0.04em] text-transparent opacity-40 select-none"
          >
            Solution
          </p>
        </div>

        <div className="grid w-full gap-2.5 rounded-[40px] bg-surface p-[15px] md:grid-cols-3">
          {features.map(({ title, description, Icon, glow }) => {
            const position = glowPosition[glow];

            return (
              <article
                key={title}
                className="group relative flex flex-col gap-2.5 overflow-hidden rounded-[30px] bg-[#020100] p-5"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute size-[210px] rounded-full bg-accent blur-[70px] ${position.orange}`}
                />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute size-[118px] rounded-full bg-white blur-[30px] ${position.white}`}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[30px] shadow-[inset_0_13px_27px_rgba(255,255,255,0.15),inset_0_-18px_43px_rgba(0,0,0,0.25)]"
                />

                <FeatureIconGlow Icon={Icon} />
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold tracking-[-0.8px] text-white">
                    {title}
                  </h3>
                  <p className="font-[family-name:var(--font-jakarta)] text-lg leading-[1.4] tracking-[-0.54px] text-muted">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
