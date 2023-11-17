import { s } from "@/app/styles";
import { Button } from "../Button";

export const OurClients = () => {
  return (
    <section className={`${s.container} my-[5rem]`}>
      <h3 className={`${s.h3title} mb-[5rem]`}>Our clients were featured on</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-y-28 gap-x-28">
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_forbes.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_cnbc.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_venturebeat.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_sun_newspaper.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_the_next_web.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_bloomberg.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_business_insider.svg')]" />
        <div className="h-20 w-28 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_yahoo_finance.svg')]" />
      </div>
    </section>
  );
};