import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const others = [
  "High price — 6–7× more expensive",
  "No location tracking",
  "No operator–worker communication system",
];

const mineSafe = [
  "Saves companies money as well as lives",
  "Real-time gas level monitoring",
  "Real-time worker health monitoring",
  "Data transmission via LoRa radio hubs to the central system",
  "A fast, reliable, and more cost-effective solution for high-risk industries",
];

export function Competitors() {
  return (
    <section
      id="competitors"
      className="relative overflow-hidden bg-background px-4 py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-12 md:gap-16">
        <div className="relative flex w-full flex-col items-center justify-center">
          <h2 className="relative z-10 max-w-[700px] text-center text-[clamp(2rem,5vw,3.125rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
            Built to outperform the alternatives
          </h2>
          <p className="relative z-10 mt-4 max-w-[480px] text-center font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-muted">
            See how MineSafe compares to other solutions on the market.
          </p>
          <p
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 bg-gradient-to-t from-transparent from-[12%] to-white/25 to-[71%] bg-clip-text text-[clamp(3.5rem,14vw,12rem)] font-semibold leading-none tracking-[-0.04em] text-transparent opacity-40 select-none"
          >
            Competitors
          </p>
        </div>

        <div className="grid w-full gap-2.5 rounded-[40px] bg-surface p-[15px] md:grid-cols-2">
          <article className="relative flex flex-col gap-6 overflow-hidden rounded-[30px] bg-[#020100] p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[30px] shadow-[inset_0_13px_27px_rgba(255,255,255,0.15),inset_0_-18px_43px_rgba(0,0,0,0.25)]"
            />
            <h3 className="relative z-10 text-2xl font-semibold tracking-[-0.8px] text-muted">
              Others
            </h3>
            <ul className="relative z-10 flex flex-col gap-4">
              {others.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <XMarkIcon className="size-4 text-[#939393]" aria-hidden />
                  </span>
                  <span className="font-[family-name:var(--font-jakarta)] text-lg leading-[1.4] tracking-[-0.54px] text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative flex flex-col gap-6 overflow-hidden rounded-[30px] bg-[#020100] p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[-136px] size-[210px] -translate-x-1/2 rounded-full bg-accent blur-[70px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[-90px] size-[118px] -translate-x-1/2 rounded-full bg-white blur-[30px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[30px] shadow-[inset_0_13px_27px_rgba(255,255,255,0.15),inset_0_-18px_43px_rgba(0,0,0,0.25)]"
            />
            <h3 className="relative z-10 text-2xl font-semibold tracking-[-0.8px] text-white">
              MineSafe
            </h3>
            <ul className="relative z-10 flex flex-col gap-4">
              {mineSafe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <CheckIcon className="size-4 text-accent" aria-hidden />
                  </span>
                  <span className="font-[family-name:var(--font-jakarta)] text-lg leading-[1.4] tracking-[-0.54px] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
