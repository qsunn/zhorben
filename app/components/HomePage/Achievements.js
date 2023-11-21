import { s } from "@/app/styles";
import { Achievement } from "./Achievement";

export const Achievements = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Our achievements</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
          <Achievement />
        </div>
      </div>
    </section>
  );
};
