import { s } from "@/app/styles";
export const DiscoverySteps = () => {
  const stages = [
    "Analysis: Core review, Product review",
    "Documentation: PRD, BRD, and Wireframes",
    "Integration: integration plan, Security audit planning, R&D",
    "Development plan and release schedule",
    "Development",
  ];
  return (
    <div>
      <h6 className={`${s.h6title} my-[4rem]`}>
        What we do during the discovery stage
      </h6>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-5 grid-flow-row gap-5 relative">
          {stages.map((item) => (
            <li
              key={item}
              className={`box p-6 pt-[5rem] relative grid grid-flow-row justify-items-start items-start  text-left max-w-[25rem] ${s.p4medium} text-blue`}
            >
              <div className="ellipse bg-[#EFEFEF] flex  justify-center p-9 items-center max-h-[4.5rem] max-w-[4.5rem] absolute top-[-1rem] left-[1.5rem] z-50 ">
                <h3 className={`${s.h3title}`}>
                  {"0" + (stages.indexOf(item) + 1)}
                </h3>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
