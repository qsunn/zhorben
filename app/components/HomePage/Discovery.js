import { s } from "@/app/styles";
import { Button } from "../Button";

export const Discovery = () => {
  const stages = [
    "Analysis: Core review, Product review",
    "Documentation: PRD, BRD, and Wireframes",
    "Integration: integration plan, Security audit planning, R&D",
    "Development plan and release schedule",
    "Development",
  ];
  return (
    <section
      className={`${s.container} bg-no-repeat bg-right bg-auto pt-[16rem] pb-[3.75rem] bg-[url('./images/uzor.png')]`}
    >
      <div className="w-full grid grid-flow-row">
        <div className="max-w-[37.5rem] grid grid-flow-row gap-8 place-items-start mb-[4rem]">
          <h3 className={"text-3xl font-bold"}>
            Discovery stage is the most important part of the project
            development
          </h3>
          <p className={`text-xl/6 text-[#5F6E90]`}>
            In our experience, the discovery stage of application development is
            often crucial for project success. That&apos;s true whether you are
            developing a new product or onboarding an existing one.
          </p>
          <p className={`text-xl/6 text-[#5F6E90]`}>
            Our team will study your project, gather key functional
            requirements, define the market fit, and analyze every option to
            find the technical approach that will work best for your product. By
            working with us to map out your entire product development cycle,
            you&apos;ll be able to effectively plan project stages, perform
            initial estimates, and define critical points to be defined further.
          </p>
          <p className={`text-xl/6 text-[#5F6E90]`}>
            Think of the discovery phase as your trail map for a hike through a
            dense forest. Without that map, you have a good chance of getting
            lost. To get where you want to go, you need that map.
          </p>
          <Button text="Get a quote" />
          <h6 className={`${s.h6title} mt-7`}>
            What we do during the discovery stage
          </h6>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-5 grid-flow-row gap-5 relative">
            {stages.map((item) => (
              <li
                key={item}
                className={`box p-6 pt-[5rem] relative grid grid-flow-row justify-items-start items-start font-[450] text-base text-left max-w-[15rem] text-blue`}
              >
                <div className="ellipse bg-[#EFEFEF] rounded-full  flex  justify-center p-8 items-center max-h-[4.5rem] max-w-[4.5rem] absolute top-[-1rem] left-[1.5rem] z-50 ">
                  <h2 className={`${s.h2title}`}>
                    {"0" + (stages.indexOf(item) + 1)}
                  </h2>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
