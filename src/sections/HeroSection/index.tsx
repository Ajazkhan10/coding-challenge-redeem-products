import Button from "@/src/components/Button";
import { Heading } from "@/src/components/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon from "@/src/components/Icon/Icon";
import classNames from "classnames";
import StepCard from "./StepCard";

const stepsData = [
  {
    step: 1,
    image: "/assets/hero-card-image1.png",
    icon: "hero-card-icon-wrapper1",
    title: "BROWSE",
    description: "Browse our tech catalog with more than 20 top tech products",
  },
  {
    step: 2,
    image: "/assets/hero-card-image2.png",
    icon: "hero-card-icon-wrapper2",
    title: "CHOOSE",
    description: "Exchange your hard earned AeroPoints for the item you want",
  },
  {
    step: 3,
    image: "/assets/hero-card-image3.png",
    icon: "hero-card-icon-wrapper3",
    title: "ENJOY!",
    description:
      "All done, you can relax! We’ll take care of delivery of your tech item!",
  },
];

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  

  return (
    <section className="w-full bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/assets/wave-pethern-image.png"
          alt="wave-pethern"
          width={2200}
          height={1330}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full relative">
        <div className="w-full flex items-center mb-20 gap-[52px] max-w-[1496px] mx-auto px-4">
          <div className="w-full max-w-[335px] mx-auto lg:max-w-full lg:mx-0 lg:w-1/2 flex flex-col gap-2 text-center items-center lg:items-start justify-center lg:justify-start lg:text-left">
            <p className="body">
              EXPLORE THE
            </p>
            <Heading type="h1" className="!font-black !m-0 !p-0 flex flex-col">
              <span className="bg-textGradient bg-clip-text text-transparent">
                Tech
              </span>
              zone
            </Heading>
            <p className="body mt-2  text-center lg:text-left mb-10 lg:mb-14">
              Here you’ll be able to exchange all of your hard-earned Aeropoints
              and exchange them for cool tech.
            </p>
            <Button slug="/#products" label="VIEW ALL PRODUCTS" variant="primary" />
          </div>

          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image
              src="/assets/Saly-19.png"
              alt="hero-iamge"
              width={897}
              height={795}
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
        </div>

        <div className="w-full pb-20 md:px-4 mt-10 relative md:mt-[350px] md:pt-[230px] lg:mt-0 lg:pt-20 bg-card-background lg:bg-none">
          <div className="w-full max-w-[580px] relative overflow-hidden  mx-auto md:absolute z-20 md:left-2/4 md:-translate-x-2/4 -top-24 md:-top-[350px] block lg:hidden">
            <Image
              src="/assets/Saly-2.png"
              alt="hero-iamge"
              width={580}
              height={518.58}
              className="w-full min-h-[520px] h-full aspect-square object-cover"
            />
          </div>
          <div className="w-full hidden lg:block absolute top-[20%] inset-0 z-10 bg-card-background max-h-[528px]" />
          <div className="w-full px-4 md:px-0 relative -top-24 md:top-0 h-full grid  z-50 grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 lg:gap-6 max-w-[1496px] mx-auto">
            {stepsData?.map(
              ({ image, icon, step, title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={classNames(
                      "w-full relative",
                      step === 1
                        ? "lg:-mr-10"
                        : step === 2
                        ? "lg:-ml-10 z-20"
                        : "lg:-ml-16 xl:-ml-20 z-30"
                    )}
                    style={{
                      transform: isDesktop
                        ? step === 1
                          ? "rotate(-3deg)"
                          : step === 3
                          ? "rotate(3deg)"
                          : "none"
                        : "none",
                    }}
                  >
                    <StepCard
                      image={image}
                      icon={
                        <Icon
                          icon={icon}
                          width={48}
                          height={48}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      }
                      step={step}
                      title={title}
                      description={description}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
