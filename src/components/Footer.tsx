import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background px-4 py-[60px]">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-[235px] flex-col gap-2.5">
          <div className="flex items-center gap-[7px]">
            <div className="relative size-[50px] overflow-hidden rounded-full">
              <Image
                src="/assets/footer-logo-v2.png"
                alt="MineSafe"
                width={58}
                height={55}
                className="absolute left-[-7%] top-[-7%] h-[111%] w-[115%] max-w-none"
              />
            </div>
            <p className="text-xl font-medium tracking-[-0.6px] text-white">
              MineSafe
            </p>
          </div>
          <p className="font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-white">
            Place where revolution starts
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-xl font-medium tracking-[-0.8px] text-white">
            Quick Links
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="#solution"
              className="font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-muted transition-colors hover:text-white"
            >
              Solution
            </a>
            <a
              href="#competitors"
              className="font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-muted transition-colors hover:text-white"
            >
              Competitors
            </a>
            <a
              href="#connect"
              className="font-[family-name:var(--font-jakarta)] text-lg tracking-[-0.54px] text-muted transition-colors hover:text-white"
            >
              Connect
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5">
            <p className="text-xl font-medium tracking-[-0.8px] text-white">
              Contact us
            </p>
            <a
              href="mailto:desmeushalapai@gmail.com"
              className="inline-flex items-center gap-1.5 text-[17px] tracking-[-0.51px] text-white transition-opacity hover:opacity-70"
            >
              <span className="font-[family-name:var(--font-jakarta)]">
                desmeushalapai@gmail.com
              </span>
              <span className="relative size-[18px] rotate-90">
                <Image
                  src="/assets/icon-arrow.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
