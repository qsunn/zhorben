import { s } from "@/app/styles";

export const Landing = () => {
  return (
    <section className={s.container}>
      <div className="max-w-[64%] flex flex-col gap-8 pt-36 2xl:pt-44">
        <h2 className={`${s.h2titleH} text-center mb-2`}>
          Top professionals for turning your business idea into a real software
          solution, web service platform, mobile application, SaaS, AI
        </h2>
        <div className={`${s.h6titleM} text-center text-grey px-4`}>
          We specialize in taking your idea, vision, or business goal and
          transforming it into a mobile application or enterprise digital
          solution. With decades of development experience, a deep understanding
          of global markets, and unmatched technical expertise, our team has
          everything you need to create great products.
        </div>
        <div className={`${s.h6titleM} text-center text-grey px-4`}>
          Let us help you choose the best path forward to deliver the perfect
          solution.
        </div>
        <div className={`${s.h6titleM} text-center text-grey px-4`}>
          At Zhorben, we don&apos;t just develop apps, we build, accelerate, and
          support your business.
        </div>
      </div>
    </section>
  );
};
