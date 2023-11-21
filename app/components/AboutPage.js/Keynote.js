import { s } from "@/app/styles";
import { Button } from "../Button";

export const Keynote = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <div className={`box2 py-11 flex flex-col items-center gap-5`}>
          <h3 className={`${s.h3title}`}>Our keynote</h3>
          <p
            className={`${s.p4medium} text-grey mb-3 max-w-[18rem] sm:max-w-full`}
          >
            Check out our keynote to find more about our team and how we
            operate.
          </p>
          <Button style="w-min-content" text="Download (PDF)" />
        </div>
      </div>
    </section>
  );
};
