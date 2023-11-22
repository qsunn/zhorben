import { s } from "@/app/styles";
import { Achievement } from "./Achievement";
import { Button } from "../components/Button";

export const Achievements = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Our achievements</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
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
        <div className="flex place-content-center mt-10">
          <Button text="More achievements" />
        </div>
      </div>
    </section>
  );
};
