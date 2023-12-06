import { s } from "../styles";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export const LetsChat = () => {
  return (
    <section className={s.container}>
      <div>
        <h3 className={`${s.h3title} text-center`}>Get a quote</h3>
        <form className="w-full grid grid-flow-row gap-4 p-8">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full flex flex-col gap-1">
              <label className="text-tooltips-text text-lg">Your name*</label>
              <div className="flex border-[#E0E0E0] dark:border-[#282B42] border  rounded-2xl pl-1 sm:pl-3 gap-2">
                <div
                  className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_filled_people.svg")]`}
                />
                <input
                  type="text"
                  name="name"
                  className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
                />
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
          <div>
            <fieldset className="w-full grid grid-cols-1 sm:grid-cols-2">
              <legend className="text-[#C0C5DA] text-lg">
                What are you looking for?
              </legend>
              <Checkbox title="Mobile application" id="1" />
              <Checkbox title="Team augmentation" id="2" />
              <Checkbox title="Technical support" id="3" />
              <Checkbox title="Secure architecture development" id="4" />
              <Checkbox title="Web application" id="5" />
              <Checkbox title="AI and computer vision development" id="6" />
              <Checkbox title="Back-end development" id="7" />
            </fieldset>
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
            <Checkbox
              title="Subscribe to our newsletters"
              textStyle="text-secondary-light dark:text-secondary-dark"
              id="spamCheckbox"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
