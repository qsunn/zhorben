import { s } from "@/app/styles";

export const Investments = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>
          Our clients got investments from
        </h3>
        <div className="flex flex-wrap place-items-center justify-center gap-16 lg:gap-x-56 sm:px-[10%]">
          <div className="h-7 w-48 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_y-comb.svg')] transition-all hover:scale-125" />
          <div className="h-7 w-48 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_google-assist.svg')] transition-all hover:scale-125" />
          <div className="h-14 w-48 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_angelList.svg')] transition-all hover:scale-125" />
          <div className="h-16 w-48 bg-center bg-no-repeat bg-contain bg-[url('./images/logo_SVB.svg')] transition-all hover:scale-125" />
        </div>
      </div>
    </section>
  );
};
