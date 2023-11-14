import { s } from "@/app/styles";
import { ArrowButton } from "../ArrowButton";

export const Offer = () => {
  return (
    <section className={`${s.container} py-20`}>
      <h3 className={`${s.h2title}`}>What do we offer?</h3>
      <div className={"grid grid-flow-col  pt-[3.75rem] gap-5 "}>
        <div
          className={`box w-max p-10 flex flex-col gap-5 bg-center bg-no-repeat bg-cover !bg-[url('./images/bg_squares.png')]`}
        >
          <div className="w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_calc.svg')]" />

          <h5 className={`${s.h4title} max-w-[6rem] `}>Transparent billing</h5>
          <p className={"text-xl/5 text-[#5F6E90]  max-w-[32rem]"}>
            Hire an individual or a custom group of professionals that will be
            formed by us and will become a dedicated part of your team.
          </p>
          <p className={`text-xl/5 text-[#5F6E90]  max-w-[32rem] `}>
            Mobile developers, back-end developers, front-end developers,
            software architects, QA engineers, UI designers, project managers,
            business analysts, DevOps engineers.
          </p>
        </div>
        <div className={`box min-w-[16rem] pt-[6rem] grid`}>
          <h5 className={`${s.h4title} px-[2.5rem] max-w-[6rem]`}>
            Clean communication
          </h5>
          <ArrowButton />
        </div>
        <div className={`box min-w-[16rem] pt-[6rem] grid`}>
          <h5 className={`${s.h4title} px-[2.5rem] break-normal max-w-[15rem]`}>
            Detailed reporting and deliverables
          </h5>
          <ArrowButton />
        </div>
      </div>
    </section>
  );
};
