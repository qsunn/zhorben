import { s } from "@/app/styles";
import { Button } from "../Button";

const logos = [
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_forbes.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_cnbc.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_venturebeat.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_sun_newspaper.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_next_web.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_bloomberg.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')] transition-all hover:scale-125",
  "h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')] transition-all hover:scale-125",
];
export const ClientsLanding = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col gap-10 items-center">
        <h2 className={`${s.h2title} text-center`}>
          Success project stories with our clients
        </h2>
        <Button text="Let`s chat" />
        <ul className="w-full flex flex-row flex-wrap place-content-center gap-8">
          {logos.map((t) => {
            return (
              <li key={t}>
                <div className={t} />
              </li>
            );
          })}
        </ul>
        <h3 className={`${s.h3title} text-center mt-20`}>
          We are what our clients need us to be
        </h3>
        <div className="w-full flex flex-wrap gap-5 sm:flex-row justify-around">
          <div className="flex flex-col items-center">
            <div className="box1 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_suitcase.svg')]`}
              />
            </div>
            <p className={`${s.p5medium} text-secondary-light dark:text-secondary-dark`}>projects launched</p>
            <p className={s.p0medium}>1100+</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="box1 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_filled_people.svg')]`}
              />
            </div>
            <p className={`${s.p5medium} text-secondary-light dark:text-secondary-dark`}>satisfied clients</p>
            <p className={s.p0medium}>450+</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="box1 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_puzzle.svg')]`}
              />
            </div>
            <p className={`${s.p5medium} text-secondary-light dark:text-secondary-dark`}>years of experience</p>
            <p className={s.p0medium}>14+</p>
          </div>
        </div>
      </div>
    </section>
  );
};
