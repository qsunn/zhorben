import { s } from "@/app/styles";
import { Button } from "../Button";

export const WaysOfWork = () => {
  return (
    <section className={`${s.container}`}>
      <h3 className={`${s.h3title} ${s.title}`}>
        Convenient ways to work with us
      </h3>
      <div className="grid place-items-center grid-flow-row gap-12 w-full">
        <div className="box1 w-full p-8">
          <h4 className={`${s.h4title} max-w-[12.375rem] mb-4`}>
            Team augmentation
          </h4>
          <p className={`${s.p4medium} text-secondary-light dark:text-secondary-dark max-w-[24rem] mb-10`}>
            Hire an individual or a custom group of professionals that will be
            formed by us and will become a dedicated part of your team.
          </p>
          <Button text="Let's chat" />
        </div>
        <div className="box1 w-full p-8">
          <h4 className={`${s.h4title}  max-w-[12.375rem] mb-4`}>
            Full-project development
          </h4>
          <p className={`${s.p4medium} text-secondary-light dark:text-secondary-dark max-w-[24rem] mb-10`}>
            Hire a team of dedicated professionals necessary to design, develop
            and launch your project.
          </p>
          <Button text="Let's chat" />
        </div>
      </div>
    </section>
  );
};
