import { s } from "@/app/styles";
import { Button } from "../Button";

export const DevFormat = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>
          Development formats and billing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-8">
          <div
            className={`${s.image} md:hidden bg-right w-full h-80 bg-[url('./images/graph_1.svg')] dark:bg-[url('./images/graph_1_dark.png')]`}
          />
          <div className="flex flex-col gap-5 items-start">
            <h5 className={s.h5title}>Time & Materials</h5>
            <p className={`${s.h6titleM} text-secondary-light dark:text-secondary-dark`}>
              For outsourced software development, a time-and-materials (T&M)
              approach saves you money—and produces better results—than a
              fixed-price contract. That&apos;s because the best software
              requires flexible thinking, tweaks to requirements, and shifts
              in scope. And because with fixed-price estimates, you always
              overpay for risk contingencies that you probably won&apos;t
              need. Read our blog for a full analysis
            </p>
            <Button text="Let's chat" />
          </div>
          <div
            className={`${s.image} hidden md:block bg-right w-full h-80 bg-[url('./images/graph_1.svg')] dark:bg-[url('./images/graph_1_dark.png')]`}
          />
          <div
            className={`${s.image} bg-left w-full h-80 bg-[url('./images/graph_2.png')] dark:bg-[url('./images/graph_2_dark.png')]`}
          />
          <div className="flex flex-col gap-5 items-start">
            <h5 className={s.h5title}>Agile vs Waterfall</h5>
            <p className={`${s.h6titleM} text-secondary-light dark:text-secondary-dark`}>
              Agile software development involves a series of short sprints to
              ensure rapid, transparent progress toward your product goals. We
              apply this nimble, responsive approach to incorporate your
              feedback, adjust priorities as needed, and ensure your approval
              at every step. We use the Agile best practice because it is more
              flexible—and less risky—than the linear Waterfall development
              methodology.
            </p>
            <Button text="Let's chat" />
          </div>
        </div>
      </div>
    </section>
  );
};
