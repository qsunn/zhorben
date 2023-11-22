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
      <h6 className={`${s.h6title} my-16 text-center md:text-left`}>
        What we do during the discovery stage
      </h6>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-8 relative">
          {stages.map((item, i) => (
            <li
              key={item}
              className={`box1 w-full p-8 pt-20 relative grid grid-flow-row justify-items-start items-start text-left ${s.p4medium} text-blue`}
            >
              <div className="box1 !rounded-full flex justify-center p-8 items-center max-h-[4.5rem] max-w-[4.5rem] absolute top-[-1rem] left-[1.5rem] z-10 ">
                <h3 className={`${s.h3title}`}>{"0" + (i + 1)}</h3>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
