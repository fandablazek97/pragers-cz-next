import Container from "@/components/Container";
import Heading from "@/components/Heading";
import clsx from "clsx";
import Image from "next/image";

function LargeBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex h-[520px] w-[520px] items-center justify-center rounded-full p-8",
        className
      )}
    >
      <img
        src="/svgs/rotating-badge-text.svg"
        alt="Fermented Handcrafted badge"
        loading="eager"
        className="h-full w-full opacity-10"
        aria-hidden="true"
      />
    </div>
  );
}

function Message({
  className = "",
  dotPosition = "right",
  title = "Lorem ipsum",
  children,
}: {
  className?: string;
  dotPosition?: "left" | "right";
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "absolute max-w-sm rounded-3xl bg-gray-900/40 p-4 backdrop-blur-lg sm:p-6",
        className
      )}
    >
      <Heading
        level="none"
        size="inherit"
        className="mb-2 text-sm sm:text-lg md:text-xl"
      >
        {title}
      </Heading>
      <p className="text-sm md:text-base">{children}</p>
      <div
        className={clsx(
          "absolute -top-3 flex h-9 w-9 origin-center items-center justify-center",
          dotPosition === "left" ? "-left-3" : "-right-3"
        )}
      >
        <div className="relative z-20 h-4 w-4 rounded-full bg-primary"></div>
        <div className="absolute h-6 w-6 origin-center animate-ping rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default function Hero({
  className = "",
  variant = "original",
}: {
  className?: string;
  variant: "original" | "yerba";
}) {
  return (
    <section
      className={clsx(
        "relative h-[calc(100vh-5rem)] min-h-[540px] overflow-hidden",
        variant === "original" ? "bg-original-700" : "bg-mate-700",
        className
      )}
    >
      <div className="pattern-white absolute inset-0 z-10 h-full w-full" />

      <Container pt="xl" pb="sm" className="relative z-20 h-full">
        <LargeBadge
          className={clsx(
            "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
            variant === "original" ? "bg-original-800" : "bg-mate-800"
          )}
        />
        <div className="absolute inset-y-0 left-1/2 z-20 h-full w-72 -translate-x-1/2 sm:w-96">
          <Image
            src="/images/kombucha/original/kombucha-original-render-bottle.png"
            alt="Lahev Pragers Kombucha"
            width={1080}
            height={1920}
            className="h-full w-full scale-105 object-contain sm:translate-y-20"
            loading="eager"
            priority
          />
        </div>
        <Message className="top-1/3 left-[55%] z-30" dotPosition="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          doloremque?
        </Message>
        <Message className="top-1/2 right-[55%] z-30 -translate-y-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          doloremque?
        </Message>
        <Message className="top-2/3 left-[55%] z-30" dotPosition="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          doloremque?
        </Message>
      </Container>
    </section>
  );
}
