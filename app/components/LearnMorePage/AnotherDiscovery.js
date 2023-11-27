import { s } from "@/app/styles";
import { Button } from "../Button";

export const AnotherDiscovery = () => {
  return (
    <section className={s.container}>
      <div>
        <div
          className={`${s.bgImage} md:h-[21.6rem] md:bg-[url('./images/bg_curved_trapezoid.png')]`}
        >
          <div className="flex flex-col gap-4 items-center mb-10 md:mb-0">
            <h3 className={`${s.h3title} pt-24 2xl:pt-32`}>Discovery Stage</h3>
            <h6 className={`${s.h6titleM} text-grey`}>
              In Zhorben`s project flow, the critical discovery stage <br />
              includes four segments.
            </h6>
            <Button text="Request a quote" />
          </div>
        </div>
        <div className="box2 grid grid-cols-1 lg:grid-cols-4 px-12 py-8 mb-10">
          <div className="flex flex-col gap-4 p-5">
            <h1 className={s.h1title}>1.01</h1>
            <h6 className={s.h6title}>PRD (Documentation)</h6>
            <p className={`${s.p4book} text-grey`}>
              The product requirements document is a comprehensive specification
              and plan for product creation. The PRD specifies your business
              needs, describes the associated technical requirements, and helps
              plan all stages of your product development.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5">
            <h1 className={s.h1title}>1.02</h1>
            <h6 className={s.h6title}>Wireframes</h6>
            <p className={`${s.p4book} text-grey`}>
              A wireframe is a visual prototype of your product that shows all
              application screens and user flows. We can develop a dynamic
              prototype that you can test with project teams and alpha users.,
              and demonstrate to your investors and business partners.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5">
            <h1 className={s.h1title}>1.03</h1>
            <h6 className={s.h6title}>R&D</h6>
            <p className={`${s.p4book} text-grey`}>
              If you need deeper technical research and analysis, more extensive
              testing of an existing solution, or ideation of a new solution, we
              will allocate the necessary resources for research and
              development.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5 ">
            <h1 className={s.h1title}>1.04</h1>
            <h6 className={s.h6title}>Product strategy</h6>
            <p className={`${s.p4book} text-grey`}>
              If you are in the early stages of development, we can help you
              choose the best ideas to fulfill your product vision. Our team
              will brainstorm with you on functionality, define the solution
              scope and logic, develop a wireframe, plan the next stages of
              development, and schedule releases. Our process ensures that we
              mutually understand and agree on your product goals.
            </p>
          </div>
        </div>
        <div className="box1 flex flex-col dm:flex-row px-8 py-4 xl:px-40 xl:py-12 gap-10">
          <div
            className={`${s.bgImage} place-self-center shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')]`}
          />
          <div className="flex flex-col gap-2">
            <h5 className={s.h5title}>
              Q: Already have a PRD, wireframe, or initial design?
            </h5>
            <p className={`${s.p4book} text-grey`}>
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
