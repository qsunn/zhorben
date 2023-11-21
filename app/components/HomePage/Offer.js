import { s } from "@/app/styles";
import { ArrowButton } from "../ArrowButton";

export const Offer = () => {
  return (
    <section className={`${s.container}`}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>What do we offer?</h3>
        <div className={"w-full grid gap-8 grid-flow-row lg:grid-flow-col"}>
          <div
            className={`box1 w-full p-8 flex flex-col gap-4 bg-center bg-no-repeat !bg-cover !bg-[url('./images/bg_squares.png')]`}
          >
            <div className="w-5 h-6 bg-center bg-no-repeat bg-cover bg-[url('./images/icon_calc.svg')]" />
            <h5 className={`${s.h5title} max-w-[6rem] `}>Transparent billing</h5>
            <p className={`${s.p2book} text-grey max-w-[26rem]`}>
              Hire an individual or a custom group of professionals that will be
              formed by us and will become a dedicated part of your team.
            </p>
            <p className={`${s.p2book} text-grey max-w-[26rem]`}>
              Mobile developers, back-end developers, front-end developers,
              software architects, QA engineers, UI designers, project managers,
              business analysts, DevOps engineers.
            </p>
          </div>
          <div className={`box1 min-w-[16rem] p-10 flex flex-col justify-between`}>
            <div>
              <div className="w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]" />
              <h5 className={`${s.h5title} max-w-[6rem] mt-5`}>
                Clean communication
              </h5>
            </div>
            <ArrowButton />
          </div>
          <div className={`box1 min-w-[16rem] p-10 flex flex-col justify-between`}>
            <div>
              <div className="w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_book.svg')]" />
              <h5 className={`${s.h5title} max-w-[6rem] mt-5`}>
                Detailed reporting and deliverables
              </h5>
            </div>
            <ArrowButton />
          </div>
        </div>
      </div>
    </section>
  );
};
