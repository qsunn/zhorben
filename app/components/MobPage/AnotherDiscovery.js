import { s } from "@/app/styles";
import { Button } from "../Button";

export const AnotherDiscovery = () => {
  return (
    <section className={`${s.container} md:mt-16 2xl:mt-32`}>
      <div className="relative">
        <div className={`${s.image} hidden md:block absolute -top-32 left-0 -z-10 w-full h-[32rem] bg-[url('./images/bg_curved_trapezoid.png')] dark:bg-[url('./images/bg_curved_trapezoid_dark.png')]`} />
        <div className="flex flex-col gap-4 items-start mb-10 sm:pl-32 2xl:pl-56">
          <h3 className={`${s.h3title}`}>Discovery Stage</h3>
          <h6 className={`${s.h6titleM} text-secondary-light dark:text-secondary-dark`}>
            In Zhorben`s project flow, the critical discovery stage <br />
            includes four segments.
          </h6>
          <Button text="Request a quote" />
        </div>
        <div className="box2 !rounded-[1rem] grid grid-cols-1 lg:grid-cols-4 gap-6 px-12 py-8 mb-12">
          <div className="flex flex-col gap-4">
            <h1 className={s.h1title}>1.01</h1>
            <h6 className={s.h6title}>PRD (Documentation)</h6>
            <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
              The product requirements document is a comprehensive specification
              and plan for product creation. The PRD specifies your business
              needs, describes the associated technical requirements, and helps
              plan all stages of your product development.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={s.h1title}>1.02</h1>
            <h6 className={s.h6title}>Wireframes</h6>
            <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
              A wireframe is a visual prototype of your product that shows all
              application screens and user flows. We can develop a dynamic
              prototype that you can test with project teams and alpha users.,
              and demonstrate to your investors and business partners.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={s.h1title}>1.03</h1>
            <h6 className={s.h6title}>R&D</h6>
            <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
              If you need deeper technical research and analysis, more extensive
              testing of an existing solution, or ideation of a new solution, we
              will allocate the necessary resources for research and
              development.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className={s.h1title}>1.04</h1>
            <h6 className={s.h6title}>Product strategy</h6>
            <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
              If you are in the early stages of development, we can help you
              choose the best ideas to fulfill your product vision. Our team
              will brainstorm with you on functionality, define the solution
              scope and logic, develop a wireframe, plan the next stages of
              development, and schedule releases. Our process ensures that we
              mutually understand and agree on your product goals.
            </p>
          </div>
        </div>
        <div className="box1 flex flex-col md:flex-row items-center p-8 xl:px-40 xl:py-12 gap-4">
          <div
            className={`${s.image} place-self-center shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')] dark:bg-[url('./images/icon_crossed_circles_dark.svg')]`}
          />
          <div className="flex flex-col gap-2 text-center md:text-start">
            <h5 className={s.h5title}>
              Q: Already have a PRD, wireframe, or initial design?
            </h5>
            <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
              A: That&apos;s great. Our design and engineering team will analyze
              your project to determine the remaining scope of work and suggest
              a vision for the next stages of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
