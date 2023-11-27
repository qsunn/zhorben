import { s } from "@/app/styles";
import { Button } from "../Button";

const stageList = [
  {
    title: "Discovery stage",
    desc: "To efficiently plan and run your project, we start with discovery. In this four-step stage, we collaborate with you to align functionality, prioritize business goals, coordinate strategy, and prototype future products. During discovery, we also define your deadlines and budget.",
  },
  {
    title: "Design stage",
    desc: "To efficiently plan and run your project, we start with discovery. In this four-step stage, we collaborate with you to align functionality, prioritize business goals, coordinate strategy, and prototype future products. During discovery, we also define your deadlines and budget.",
  },
  {
    title: "Development stage",
    desc: "After releasing the MVP, our team performs new sprints to speed new releases with additional functionality. And we support and maintain the latest version of the launched app.",
  },
  {
    title: "Ongoing development, support, and maintenance stage",
    desc: "After releasing the MVP, our team performs new sprints to speed new releases with additional functionality. And we support and maintain the latest version of the launched app.",
  },
];
export const Stages = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <div className=" w-full sm:w-[50%]">
          <h3 className={s.h3title}>Project Stages and Flow</h3>
          <h6 className={`${s.h6titleM} text-grey mt-4 mb-8`}>
            Based on your current project stage, we will propose the most
            effective plan to achieve your objectives—within your timeframe and
            budget.
          </h6>
          <Button text="Let`s chat" />
        </div>
        <h5 className={`${s.h5title} my-8`}>
          Our typical project flow includes the following stages.
        </h5>
        <ul className="w-full grid sm:grid-cols-2 gap-8">
          {stageList.map((item, i) => {
            return (
              <li
                key={item}
                className={`lg:min-w-[26.875rem] box1 flex flex-col pr-8 py-8 gap-4`}
              >
                <div classNAme="flex flex-col gap-5">
                  <h2 className={`${s.h2title} ml-8`}>{"0" + (i + 1)}</h2>
                  <h6 className={`${s.h6title} ml-8`}>{item.title}</h6>
                </div>
                <div className="box2 py-4 px-8">
                  <p className={`${s.p4book} text-grey`}>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
