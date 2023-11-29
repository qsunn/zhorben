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
      className={`${s.container} bg-no-repeat bg-center lg:bg-right-top bg-auto pt-44 2xl:pt-56 bg-[url('./images/uzor.png')]`}
    >
      <div className="w-full grid grid-flow-row">
        <div className="max-w-[39.25rem] grid grid-flow-row gap-8 place-items-start mb-32 2xl:mb-56">
          <h2 className={s.h2titleH}>
            Build and scale your business fast with our world-class senior
            developers
          </h2>
          <p className={`${s.p1medium} text-secondary-light dark:text-secondary-dark max-w-[32.875rem]`}>
            Hire our full-time team of senior developers to launch, accelerate
            and support your business applications. Mobile. Web. AI.
          </p>
          <Button text="Let's chat" />
        </div>
        <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4`}>
          {list.map((item) => (
            <li
              key={item}
              className={`box1 p-8 grid place-items-center text-center ${s.p2heavy}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
