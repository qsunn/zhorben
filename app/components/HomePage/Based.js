import { s } from "@/app/styles";

export const Based = () => {
  return (
    <section
      className={`opacityGradient px-[3.5rem] pt-32 pb-72 md:px-[8.75rem] my-[3.5rem] bg-no-repeat bg-center bg-auto bg-current/ bg-[url('./images/Poland.png')]`}
    >
      <div className={"flex flex-col items-end content-start gap-5"}>
        <h3 className={`${s.h3title} text-left max-w-[28rem] mt-6`}>
          We&apos;re based in Warsaw. We operate worldwide.
        </h3>
        <p className={`${s.p2medium} max-w-[28rem] text-left text-grey`}>
          No matter where you are in North America, Europe, or Asia, our teams
          work effectively and efficiently on your schedule. We adjust our
          business processes to make our partnership smooth for you.
        </p>
      </div>
    </section>
  );
};
