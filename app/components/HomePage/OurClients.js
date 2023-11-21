import { s } from "@/app/styles";

export const OurClients = () => {
  return (
    <section className={`${s.container}`}>
      <div className="w-full lg:w-[75%]">
        <h3 className={`${s.h3title} ${s.title}`}>
          Our clients were featured on
        </h3>
        <div className="w-full grid place-items-center grid-cols-2 sm:grid-cols-4 grid-flow-row gap-16 lg:gap-28">
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_forbes.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_cnbc.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_venturebeat.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_sun_newspaper.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_next_web.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_bloomberg.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')] transition-all hover:scale-125" />
          <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')] transition-all hover:scale-125" />
        </div>
      </div>
    </section>
  );
};
