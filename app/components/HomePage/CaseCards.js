import { CaseCard } from "./CaseCard";

export const CaseCards = () => {
  const cases = [
    {
      title: "an Android mobile app for a quick groceries delivery service",
      techs: ["React", "Angular", "Electron", "Typescript"],
      logo: "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')]",
      desc: "FoodRocket is a service of fresh grocery delivery within 15 minutes or less. You can get everything you want delivered to your door in the blink of an eye.",
      img: "bg-no-repeat bg-center bg-contain bg-current bg-[url('./images/uzor.png')]",
    },
    {
      title: "an Android mobile app for a quick groceries delivery service",
      techs: ["React", "Angular", "Electron", "Typescript"],
      logo: "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')]",
      desc: "FoodRocket is a service of fresh grocery delivery within 15 minutes or less. You can get everything you want delivered to your door in the blink of an eye.",
      img: "bg-no-repeat bg-center bg-contain bg-current bg-[url('./images/bg_uzor.png')]",
    },
  ];
  return (
    <ul className="flex flex-col gap-20">
      {cases.map((item) => (
        <CaseCard key={item.title} item={item} />
      ))}
    </ul>
  );
};
