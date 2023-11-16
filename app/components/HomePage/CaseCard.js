import { s } from "@/app/styles";
import { Button } from "../Button";

export const CaseCard = () => {
  const Case = [
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
      {Case.map((t) => {
        return (
          <li key={t} className="box p-20 flex flex-row gap-10">
            <div className="flex flex-col gap-5 flex-1">
              <h4 className={s.h4title}>{"We have developed " + t.title}</h4>
              <ul className="w-full flex gap-x-2 gap-y-1">
                {t.techs.map((tt) => (
                  <li key={tt} className={`${s.p4medium} text-grey badge`}>
                    {tt}
                  </li>
                ))}
              </ul>
              <div className={t.logo} />
              <p className={`${s.p4medium} text-grey`}>{t.desc}</p>
              <Button style="w-[50%]" text="See more cases" />
            </div>
            <div className={`${t.img} flex-1 place-self-center w-52 h-52`} />
          </li>
        );
      })}
    </ul>
  );
};
