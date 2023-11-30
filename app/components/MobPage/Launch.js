import { s } from "@/app/styles";
import { Button } from "../Button";

export const Launch = () => {
  return (
    <section className={s.container}>
      <div className="w-full box1 px-5 py-8 sm:px-20 sm:py-12 flex flex-col gap-12">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-5 items-start md:w-[50%]">
            <h3 className={s.h3title}>Launch</h3>
            <h6 className={`${s.h6titleM} text-secondary-light dark:text-secondary-dark`}>
              Launching your application is a critical task that requires
              careful, upfront planning. Many developers overlook crucial steps
              that can delay a launch. But launch support is one of
              Zorben&apos;s core competencies and a vital value-added service.
            </h6>
            <Button text="Let's chat" />
          </div>
          <div
            className={`${s.image} hidden md:flex flex-none place-self-center w-48 h-48 sm:pt-40 !bg-[url('./images/uzor.png')] dark:!bg-[url('./images/uzor_dark.png')]`}
          />
        </div>
        <div className="grid grid-flow-row md:grid-flow-col gap-5">
          <div
            className={`rounded-2xl border-[1px] border-primary-light dark:border-primary-dark flex flex-row p-5 gap-4`}
          >
            <div className="flex flex-col gap-4">
              <div
                className={`${s.bgImage} hidden sm:flex justify-self-start shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')] dark:bg-[url('./images/icon_crossed_circles_dark.svg')]`}
              />
              <h6 className={`${s.h6title}`}>Google Play / Apple App Store</h6>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                We know how to organize and manage the entire launch process
                with Google and Apple. We help you prepare everything you need
                to publish your app, meet compliance requirements, set up the
                distribution infrastructure, and establish all necessary
                external accounts. We know how to get it right the first time,
                so you can focus on growing revenue instead of fixing launch
                issues.
              </p>
            </div>
          </div>
          <div
            className={`rounded-2xl border-[1px] border-primary-light dark:border-primary-dark flex flex-row p-5 gap-4`}
          >
            <div className="flex flex-col gap-4">
              <div
                className={`${s.bgImage} hidden sm:flex justify-self-start shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')] dark:bg-[url('./images/icon_crossed_circles_dark.svg')]`}
              />
              <h5 className={`${s.h5title}`}>CI/CD for deployment</h5>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                Product development doesn&apos;t end with launch. We apply the
                best practice of continuous integration and continuous delivery
                (CI/CD) to optimize your ongoing product releases, incorporating
                what we learn along the way. The CI/CD process reduces the risk
                of product downtime and lowers the cost of new releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
