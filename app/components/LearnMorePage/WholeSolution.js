import { s } from "@/app/styles";
import { Button } from "../Button";

export const WholeSolution = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col gap-5">
        <h3 className={`${s.h3title} text-center`}>
          Our whole-solution approach
        </h3>
        <h6 className={`${s.h6titleM} text-center text-grey sm:px-8 lg:px-16`}>
          The Zhorben development team doesn&apos;t just code product functions.
          We give you our expertise and experience to help your solution
          succeed. We suggest ideas, build dynamically and flexibly, see you
          through the initial launch, and help you envision and evolve the
          future for your business.
        </h6>
        <div className="flex place-content-center mt-10">
          <Button text="Let`s chat" />
        </div>
      </div>
    </section>
  );
};
