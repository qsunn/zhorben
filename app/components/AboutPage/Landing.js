import { s } from "@/app/styles";

export const Landing = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col gap-8 pt-44 2xl:pt-56">
        <h2 className={`${s.h2title} text-center mb-2`}>
          Top professionals for turning your business idea into a real software
          solution, web service platform, mobile application, SaaS, AI
        </h2>
        <h6 className={`${s.h6titleM} text-center text-grey px-4`}>
          We specialize in taking your idea, vision, or business goal and
          transforming it into a mobile application or enterprise digital
          solution. With decades of development experience, a deep understanding
          of global markets, and unmatched technical expertise, our team has
          everything you need to create great products.
        </h6>
        <h6 className={`${s.h6titleM} text-center text-grey px-4`}>
          Let us help you choose the best path forward to deliver the perfect
          solution.
        </h6>
        <h6 className={`${s.h6titleM} text-center text-grey px-4`}>
          At Zhorben, we don&apos;t just develop apps, we build, accelerate, and
          support your business.
        </h6>
      </div>
    </section>
  );
};
