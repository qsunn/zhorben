import { s } from "@/app/styles";
import { Button } from "../Button";
import { DevCards } from "./DevCards";

export const DevFormat = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <div className="">
          <h3 className={`${s.h3title} ${s.title}`}>
            Development formats and billing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-28 mb-32">
            <div className="flex flex-col gap-5">
              <h5 className={s.h5title}>Time & Materials</h5>
              <h6 className={`${s.h6titleM} text-grey`}>
                For outsourced software development, a time-and-materials (T&M)
                approach saves you money—and produces better results—than a
                fixed-price contract. That&apos;s because the best software
                requires flexible thinking, tweaks to requirements, and shifts
                in scope. And because with fixed-price estimates, you always
                overpay for risk contingencies that you probably won&apos;t
                need. Read our blog for a full analysis
              </h6>
              <Button style="max-w-[10rem]" text="Let's chat" />
            </div>
            <div
              className={`${s.image} w-full h-80 bg-[url('./images/graph_1.svg')]`}
            />
            <div
              className={`${s.image} w-full h-80 bg-[url('./images/graph_2.png')]`}
            />
            <div className="flex flex-col gap-5">
              <h5 className={s.h5title}>Agile vs Waterfall</h5>
              <h6 className={`${s.h6titleM} text-grey`}>
                Agile software development involves a series of short sprints to
                ensure rapid, transparent progress toward your product goals. We
                apply this nimble, responsive approach to incorporate your
                feedback, adjust priorities as needed, and ensure your approval
                at every step. We use the Agile best practice because it is more
                flexible—and less risky—than the linear Waterfall development
                methodology.
              </h6>
              <Button style="max-w-[10rem]" text="Let's chat" />
            </div>
          </div>
          <DevCards />
        </div>
      </div>
    </section>
  );
};
