import BrandStrip from "@/components/BrandStrip";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Reveal from "@/components/Reveal";
import clsx from "clsx";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi2";

type Props = {
  className?: string;
};

export default function Hero({ className = "" }: Props) {
  return (
    <>
      <div
        className={clsx(
          "relative w-screen bg-mate-700 md:h-[calc(100vh-5rem)] md:max-h-[1100px] md:min-h-[580px] xl:min-h-[700px]",
          className
        )}
      >
        <div className="pattern-white absolute inset-0 z-10 h-full w-full" />
        <Reveal noVertical>
          <Container
            py="xl"
            className="relative z-30 grid h-full gap-32 md:grid-cols-12 md:gap-8"
          >
            <Reveal
              hasTriggerMargin={false}
              delay={0.1}
              className="col-span-1 flex flex-col items-start justify-center gap-10 md:col-span-6 xl:col-span-7"
            >
              <Heading
                level={1}
                size="inherit"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
              >
                Lorem ipsum dolor
              </Heading>
              <p className="max-w-prose">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                saepe ea totam dolor libero consectetur, ullam facilis
                temporibus placeat veniam?
              </p>
              <Button size="lg" rightIcon={<HiArrowDown />}>
                Zjistit více
              </Button>
            </Reveal>
            <Reveal
              hasTriggerMargin={false}
              delay={0.2}
              noVertical
              className="relative isolate z-0 col-span-1 flex items-center justify-center md:col-span-6 xl:col-span-5"
            >
              <div className="aspect-square w-full rounded-full bg-mate-900"></div>
              <Image
                src="/images/kombucha/original/kombucha-original-render-bottle.png"
                alt="Kombucha originál ve flašce"
                width={1080}
                height={1920}
                priority
                className="absolute top-1/2 left-1/2 z-10 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-12 scale-75 object-contain md:translate-y-[calc(-50%+3rem)] md:scale-[0.85]"
              />
            </Reveal>
          </Container>
        </Reveal>
      </div>
      <BrandStrip />
    </>
  );
}