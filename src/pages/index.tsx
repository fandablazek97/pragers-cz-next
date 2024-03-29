import BadgeCircle from "@/components/BadgeCircle";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import CtaContact from "@/components/pages/home/CtaContact";
import CtaPrager from "@/components/pages/home/CtaPrager";
import CtaProductLine from "@/components/pages/home/CtaProductLine";
import Hero from "@/components/pages/home/Hero";
import ScrollBadge from "@/components/pages/home/ScrollBadge";
import BodyImage from "@/components/pages/shared/BodyImage";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";

import { useTranslation } from "@/hooks/useTranslation";

// New mac - testing whole development enviroment on new mac

export default function Home() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.home.seo.title} description={t.home.seo.description} />
      <Hero />
      <Container as={"section"} id="vice" py="md">
        <Reveal className="pb-10">
          <Heading
            level={2}
            size="xl"
            color="primary"
            hasMarginBottom
            className="mx-auto text-center"
          >
            {t.home.about.title}
          </Heading>
          <p className="mx-auto max-w-prose text-center">
            {t.home.about.perex}
          </p>
        </Reveal>

        <Container
          isInner
          py="md"
          className="grid gap-10 md:grid-cols-12 xl:gap-16"
        >
          <div className="flex max-w-md flex-col justify-end md:col-span-5">
            <Parallax className="hidden pb-24 md:block">
              <BadgeCircle />
            </Parallax>
            <Reveal hasTriggerMargin={false}>
              <Heading level={3} size="xs" hasMarginBottom>
                {t.home.about.subtitle1}
              </Heading>
              <p>{t.home.about.content1}</p>
            </Reveal>
          </div>
          <BodyImage
            src="/images/common/pragers-common-1.jpg"
            alt="pragers"
            width={1920}
            height={1280}
            className="md:col-span-7"
          />
        </Container>

        <Container isInner py="sm">
          <Reveal>
            <Heading
              level={"none"}
              size="lg"
              color="primary"
              className="!leading-tight"
              hasMarginBottom
            >
              {t.home.about.largeText}
            </Heading>
          </Reveal>

          <div className="grid gap-10 pt-24 md:grid-cols-2">
            <div className="col-span-1 space-y-8 md:order-2">
              <Reveal className="max-w-md pb-12">
                <Heading level={3} size="xs" hasMarginBottom>
                  {t.home.about.subtitle2}
                </Heading>
                <p>{t.home.about.content2}</p>
              </Reveal>
              <BodyImage
                src="/images/common/pragers-common-3.jpg"
                alt="pragers"
                width={1920}
                height={1280}
                className="md:col-span-7"
              />
            </div>
            <div className="col-span-1 md:order-1">
              <BodyImage
                src="/images/common/pragers-common-4.jpg"
                alt="pragers"
                width={1920}
                height={1280}
                className="md:col-span-7"
              />
              <Reveal className="mt-14 mb-4 ml-auto w-max md:mr-auto">
                <ScrollBadge />
              </Reveal>
            </div>
          </div>
        </Container>
      </Container>

      <CtaProductLine as={"section"} />
      <CtaContact />
      <CtaPrager />
    </Layout>
  );
}
