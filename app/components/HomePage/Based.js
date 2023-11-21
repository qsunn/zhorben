import { s } from "@/app/styles";

export const Based = () => {
  return (
    <section
      className={`${s.container} opacityGradient lg:pt-[8.5rem] lg:!pb-[19.5rem] !2xl:pb-[18rem] bg-no-repeat bg-[-20%_50%] bg-cover lg:bg-center lg:bg-auto lg:bg-[url('./images/Poland.png')]`}
    >
      <div className={"w-full flex flex-col lg:items-end content-start gap-5"}>
        <h3 className={`${s.h3title} text-center lg:text-left lg:max-w-[28rem] mt-6`}>
          We&apos;re based in Warsaw. We operate worldwide.
        </h3>
        <p className={`${s.p2medium} lg:max-w-[28rem] text-center lg:text-left text-grey`}>
          No matter where you are in North America, Europe, or Asia, our teams
          work effectively and efficiently on your schedule. We adjust our
          business processes to make our partnership smooth for you.
        </p>
      </div>
    </section>
  );
};
