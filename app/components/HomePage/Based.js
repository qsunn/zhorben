import { s } from "@/app/styles";

export const Based = () => {
  return (
    <section
      className={`${s.container} opacityGradient pb-96 lg:pt-40 lg:pb-80 2xl:pt-36 2xl:pb-60 bg-no-repeat bg-left-top bg-auto lg:bg-center lg:bg-auto bg-[url('./images/Poland.png')]`}
    >
      <div className={"w-full flex flex-col lg:items-end 2xl:items-center 2xl:pl-96 content-start gap-5"}>
        <h3 className={`${s.h3title} text-center lg:text-left lg:max-w-[28rem]`}>
          We&apos;re based in Warsaw. We operate worldwide.
        </h3>
        <p className={`${s.p2medium} lg:max-w-[28rem] text-center lg:text-left text-secondary-light dark:text-secondary-dark`}>
          No matter where you are in North America, Europe, or Asia, our teams
          work effectively and efficiently on your schedule. We adjust our
          business processes to make our partnership smooth for you.
        </p>
      </div>
    </section>
  );
};
