import { s } from "@/app/styles";
import { Button } from "../Button";

export const Landing = () => {
  const list = [
    "Our principles",
    "Laser focus on your product and business goals",
    "Only dedicated project teams; no cross-project sharing",
    "Only full-time senior engineers who know your industry",
    "Vetting and verification of team member expertise in industry-leading technology standards and methodologies",
    "Always clear, transparent communications with you about everything",
  ];

  return (
    <section
      className={`${s.container} bg-no-repeat bg-center lg:bg-right-top bg-auto pt-[12rem] 2xl:pt-[16rem] 2xl:pb-[3.75rem] bg-[url('./images/uzor.png')]`}
    >
      <div className="w-full grid grid-flow-row">
        <div className="max-w-[39.25rem] grid grid-flow-row gap-8 place-items-start mb-[12rem] 2xl:mb-[15.75rem]">
          <h2 className={s.h2titleH}>
            Build and scale your business fast with our world-class senior
            developers
          </h2>
          <p className={`${s.p1medium} text-grey max-w-[32.875rem]`}>
            Hire our full-time team of senior developers to launch, accelerate
            and support your business applications. Mobile. Web. AI.
          </p>
          <Button text="Let's chat" />
        </div>
        <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5`}>
          {list.map((item) => (
            <li
              key={item}
              className={` listBox p-[2.625rem] rounded-[15px] bg-[#F5F5F5] grid place-items-center text-center ${s.p2heavy} `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
