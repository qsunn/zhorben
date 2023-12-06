import { s } from "../../styles";
import { Button } from "../Button";

const Vacancy = [
  { position: "Senior Project Manager", location: "Remote" },
  { position: "Senior front-end developer", location: "Remote" },
  {
    position: "Senior Operations Manager",
    location: "Sunnyvale, CA, USA or remote",
  },
  { position: "Marketing Manager", location: "Remote" },
  { position: "Business Development Manager", location: "USA remote" },
  { position: "Senior Node.js developer", location: "Remote" },
  { position: "Senior Recruiter", location: "Remote" },
  { position: "Sales Development Representative", location: "USA/Canada" },
  { position: "Senior React Native developer", location: "Remote" },
  { position: "Senior PHP back-end developer (Symfony)", location: "Remote" },
];
export const CareerForm = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h2 className="text-4xl text-center underline mb-8">
          Let&apos;s get started
        </h2>
        <form className="w-full grid grid-flow-row gap-4 box1 p-8">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Your name*</label>
              <div className="flex border-[#E0E0E0] dark:border-[#282B42] border focus-within:border-[#C0C5DA] rounded-2xl pl-1 sm:pl-3 gap-2">
                <div
                  className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_filled_people.svg")]`}
                />
                <input
                  type="text"
                  id="name"
                  className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Phone*</label>
              <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] focus-within:border-[#C0C5DA]">
                <div
                  className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_telephone.svg")]`}
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Your work email*</label>
              <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] focus-within:border-[#C0C5DA]">
                <div
                  className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_envelope.svg")]`}
                />
                <input
                  type="email"
                  className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Vacancy*</label>
              <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] focus-within:border-[#C0C5DA]">
                <div
                  className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/icon_briefcase_eye.svg")]`}
                />
                <select
                  id=""
                  className="w-full h-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
                >
                  <option selected>Please select</option>
                  {Vacancy.map((item, i) => {
                    return <option value={i}>{item.position}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">
              Your Github profile (optional)
            </label>
            <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] focus-within:border-[#C0C5DA]">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/logo_github.svg")]`}
              />
              <input
                type="url"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">
              Your Linkedin profile (optional)
            </label>
            <div className="flex rounded-2xl pl-1 sm:pl-3 gap-2 border-[#E0E0E0] dark:border-[#282B42] border-[1px] focus-within:border-[#C0C5DA]">
              <div
                className={`${s.image} h-5 w-5 place-self-center bg-[url("./images/logo_linkedin.svg")]`}
              />
              <input
                type="url"
                className="w-full peer box2 p-4 border-[#E0E0E0] focus:outline-none dark:border-[#282B42] border-[1px]"
              />
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between items-center mt-10 gap-8 sm:gap-5">
            <div className="flex flex-col-reverse sm:flex-row gap-2 items-center">
              <Button text="Upload file" style="!px-10" />
              <p
                className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}
              >
                Upload your CV (pdf, doc)*
              </p>
            </div>
            <Button text="Send request" style="!px-16" />
          </div>
        </form>
      </div>
    </section>
  );
};
