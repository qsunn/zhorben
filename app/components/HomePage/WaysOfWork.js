import { s } from "@/app/styles";
import { Button } from "../Button";

export const WaysOfWork = () => {
  return (
    <section className={`${s.container} py-20`}>
      <div className="grid place-items-center grid-flow-row gap-[3.75rem] w-full px-[8rem]">
        <h2 className={`${s.h3title} mb-10`}>
          Convenient ways to work with us
        </h2>
        <div className="px-10 py-[1.875rem] box w-full">
          <h3 className={`${s.h4title} max-w-[12.375rem] mb-4`}>
            Team augmentation
          </h3>
          <p className={`${s.p4medium} text-grey max-w-[24rem] mb-10`}>
            Hire an individual or a custom group of professionals that will be
            formed by us and will become a dedicated part of your team.
          </p>
          <Button text="Let's chat" />
        </div>
        <div className="px-10 py-[1.875rem] box w-full">
          <h3 className={`${s.h4title}  max-w-[12.375rem] mb-4`}>
            Full-project development
          </h3>
          <p className={`${s.p4medium} text-grey max-w-[24rem] mb-10`}>
            Hire a team of dedicated professionals necessary to design, develop
            and launch your project.
          </p>
          <Button text="Let's chat" />
        </div>
      </div>
    </section>
  );
};
