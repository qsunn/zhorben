import { s } from "@/app/styles";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export const Consultation = () => {
  return (
    <section className={s.container}>
      <div>
        <h3 className={`${s.h3title} ${s.title}`}>
          Get a free 15-minutes consultation
        </h3>
        <div className="box1 flex flex-col p-6 md:p-10 gap-5">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Your name*</label>
            <input
              type="text"
              name="name"
              className="w-full box2-rounded p-4 focus:outline-none border-[#E0E0E0] dark:border-[#282B42] border-[1px]"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Email*</label>
            <input
              type="email"
              name="email"
              className="w-full box2-rounded p-4 focus:outline-none border-[#E0E0E0] dark:border-[#282B42] border-[1px]"
            />
          </div>
          <Button text="Send request" style="!px-16" />
          <Checkbox
            title="I want to receive Zhorben updates"
            textStyle="text-secondary-light dark:text-secondary-dark"
            id="spamCheckbox"
          />
        </div>
      </div>
    </section>
  );
};
