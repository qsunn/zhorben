import { s } from "../styles";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export const Form = () => {
  return (
    <div className="w-full">
      <form className="w-full grid grid-flow-row gap-4 box1 p-8">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">First name*</label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/icon_filled_people.svg")] ${s.inputIcon}`}
              />
              <input type="text" name="firstName" className={s.input} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Last name*</label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/icon_filled_people.svg")] ${s.inputIcon}`}
              />
              <input type="text" name="lastName" className={s.input} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#C0C5DA] text-lg">Company name*</label>
          <div className="flex">
            <div
              className={`${s.image} h-5 w-5 bg-[url("./images/icon_filled_people.svg")] ${s.inputIcon}`}
            />
            <input type="text" name="company" className={s.input} />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Your work email*</label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/icon_envelope.svg")] ${s.inputIcon}`}
              />
              <input type="email" name="email" className={s.input} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Phone*</label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/icon_telephone.svg")] ${s.inputIcon}`}
              />
              <input type="tel" name="phone" className={s.input} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#C0C5DA] text-lg">Tell your story</label>
          <textarea
            name="message"
            rows="4"
            className={`${s.input} resize-none !rounded-l-2xl`}
            placeholder="Please, let us know more about you and the project"
          />
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between items-center mt-10 gap-5">
          <Button text="Send request" style="!px-16" />
          <Checkbox title="Subscribe to our newsletters" />
        </div>
      </form>
    </div>
  );
};
