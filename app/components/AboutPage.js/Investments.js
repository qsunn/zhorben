import { s } from "@/app/styles";

export const Investments = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>
          Our clients got investments from
        </h3>
        <div className="w-full grid place-items-center grid-cols-2 sm:grid-cols-4 grid-flow-row gap-16 lg:gap-28">
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_forbes.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_cnbc.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_venturebeat.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_sun_newspaper.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_next_web.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_bloomberg.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')]" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')]" />
        </div>
      </div>
    </section>
  );
};
