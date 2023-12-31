import { s } from "@/app/styles";
import { Button } from "../Button";
import { DiscoverySteps } from "./DiscoverySteps";

export const Discovery = () => {
  return (
    <section
      className={`${s.container} bg-no-repeat bg-center bg-auto lg:bg-right lg:bg-contain lg:bg-[url('./images/bg_uzor.png')] dark:lg:bg-[url('./images/bg_uzor_dark.png')]`}
    >
      <div className="w-full">
        <div className="max-w-[37.5rem] grid grid-flow-row gap-8 place-items-start">
          <h4 className={s.h4title}>
            Discovery stage is the most important part of the project
            development
          </h4>
          <p className={`${s.p2book} text-secondary-light dark:text-secondary-dark`}>
            In our experience, the discovery stage of application development is
            often crucial for project success. That&apos;s true whether you are
            developing a new product or onboarding an existing one.
          </p>
          <p className={`${s.p2book} text-secondary-light dark:text-secondary-dark`}>
            Our team will study your project, gather key functional
            requirements, define the market fit, and analyze every option to
            find the technical approach that will work best for your product. By
            working with us to map out your entire product development cycle,
            you&apos;ll be able to effectively plan project stages, perform
            initial estimates, and define critical points to be defined further.
          </p>
          <p className={`${s.p2book} text-secondary-light dark:text-secondary-dark`}>
            Think of the discovery phase as your trail map for a hike through a
            dense forest. Without that map, you have a good chance of getting
            lost. To get where you want to go, you need that map.
          </p>
          <Button text="Get a quote" />
        </div>
        <DiscoverySteps />
      </div>
    </section>
  );
};
