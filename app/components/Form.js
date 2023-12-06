import { s } from "../styles";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export const Form = () => {
  return (
    <div className="w-full">
      <form className="w-full grid grid-flow-row gap-4 box1 p-8">
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">First name*</label>
            <div className="flex border-[#E0E0E0] dark:border-[#282B42] border  rounded-2xl pl-1 sm:pl-3 gap-2">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_filled_people.svg")]`}
              />
              <input
                type="text"
                name="firstName"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Last name*</label>
            <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] ">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_filled_people.svg")]`}
              />
              <input
                type="text"
                name="lastName"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#C0C5DA] text-lg">Company name*</label>
          <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] ">
            <div
              className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_filled_people.svg")]`}
            />
            <input
              type="text"
              name="company"
              className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Your work email*</label>
            <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] ">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_envelope.svg")]`}
              />
              <input
                type="email"
                name="email"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">Phone*</label>
            <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] ">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_telephone.svg")]`}
              />
              <input
                type="tel"
                name="phone"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-[#C0C5DA] text-lg">Tell your story</label>
          <textarea
            name="message"
            rows="4"
            className="w-full box2 p-4 !rounded-l-2xl border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px] resize-none"
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
