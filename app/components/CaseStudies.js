import { s } from "@/app/styles";
import { Button } from "./Button";
import { CaseCard } from "./CaseCard";

export const CaseStudies = () => {
  const cases = [
    {
      title: "an Android mobile app for a quick groceries delivery service",
      techs: ["React", "Angular", "Electron", "Typescript"],
      logo: "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')]",
      desc: "FoodRocket is a service of fresh grocery delivery within 15 minutes or less. You can get everything you want delivered to your door in the blink of an eye.",
      img: "bg-no-repeat bg-center bg-contain bg-[url('./images/uzor.png')]",
    },
    {
      title: "an Android mobile app for a quick groceries delivery service",
      techs: ["React", "Angular", "Electron", "Typescript"],
      logo: "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')]",
      desc: "FoodRocket is a service of fresh grocery delivery within 15 minutes or less. You can get everything you want delivered to your door in the blink of an eye.",
      img: "bg-no-repeat bg-center bg-contain bg-[url('./images/uzor.png')]",
    },
  ];

  return (
    <section className={`${s.container}`}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Our case studies</h3>
        <ul className="flex flex-col gap-16">
          {cases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </ul>
        <Button style="w-full mt-12 lg:my-12" text="See more cases" />
      </div>
    </section>
  );
};
