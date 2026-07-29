import Image from "next/image";

const quotes = [
  {
    text: "Examine the oil industry sector and technical journals regarding system modernization. Implement the expertise of the Rio Tinto R&D center in the field of ventilation.",
    name: "Almas Amirzhan",
    role: "Mining Engineer",
    avatar: "/assets/avatar-almas-v2.png",
  },
  {
    text: "Recommended submitting an internal request for testing and implementing the project.",
    name: "Konstantin Bryukhanov",
    role: "SRE at Kazakhmys",
    avatar: "/assets/avatar-konstantin-v2.png",
  },
];

export function Testimonials() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-background px-4 py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-12 md:gap-16">
        <div className="relative flex w-full flex-col items-center gap-4">
          <h2 className="relative z-10 text-center text-[clamp(2rem,5vw,3.125rem)] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
            Voices from the Mine.
          </h2>
          <p className="relative z-10 font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-muted">
            Real feedback from engineers and operators who tried MineSafe.
          </p>
          <p
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 bg-gradient-to-t from-transparent from-[12%] to-white/25 to-[71%] bg-clip-text text-[clamp(4rem,16vw,15.625rem)] font-semibold leading-none tracking-[-0.04em] text-transparent opacity-40 select-none"
          >
            Connect
          </p>
        </div>

        <div className="grid w-full gap-5 rounded-[47px] bg-surface p-5 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[25px] lg:min-h-[505px]">
            <Image
              src="/assets/testimonial-left-v2.jpg"
              alt="MineSafe team at Quectel booth"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            {quotes.map((quote) => (
              <article
                key={quote.name}
                className="flex flex-1 flex-col justify-between gap-6 rounded-[23px] border border-border p-[15px]"
              >
                <p className="font-[family-name:var(--font-jakarta)] text-lg leading-[1.4] tracking-[-0.54px] text-white">
                  {quote.text}
                </p>
                <div className="flex items-center gap-2">
                  <div className="relative size-[53px] overflow-hidden rounded-full">
                    <Image
                      src={quote.avatar}
                      alt={quote.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold tracking-[-0.72px] text-white">
                      {quote.name}
                    </p>
                    <p className="font-[family-name:var(--font-jakarta)] text-[15px] tracking-[-0.45px] text-muted">
                      {quote.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[25px] lg:min-h-[505px]">
            <Image
              src="/assets/testimonial-right-v2.jpg"
              alt="MineSafe social spotlight"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
