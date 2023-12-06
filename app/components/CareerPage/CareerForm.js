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
      <div className="w-full xl:px-24">
        <h2 className="text-4xl text-center underline mb-20">
          Let us know you better
        </h2>
        <form className="w-full grid grid-flow-row gap-4 box1 p-8">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Your name*</label>
              <div className="flex">
                <div
                  className={`${s.image} h-5 w-5 bg-[url("./images/icon_filled_people.svg")] ${s.inputIcon}`}
                />
                <input type="text" id="name" className={s.input} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Phone*</label>
              <div className="flex">
                <div
                  className={`${s.image} h-5 w-5 bg-[url("./images/icon_telephone.svg")] ${s.inputIcon}`}
                />
                <input type="tel" id="phoneNumber" className={s.input} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Your work email*</label>
              <div className="flex">
                <div
                  className={`${s.image} h-5 w-5 bg-[url("./images/icon_envelope.svg")] ${s.inputIcon}`}
                />
                <input type="email" className={s.input} />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="text-[#C0C5DA] text-lg">Vacancy*</label>
              <div className="flex select-wrapper">
                <div
                  className={`${s.image} h-5 w-5 bg-[url("./images/icon_briefcase_eye.svg")] ${s.inputIcon}`}
                />
                <select className={`${s.input} appearance-none`}>
                  <option>Please select</option>
                  {Vacancy.map((item, i) => {
                    return (
                      <option key={item.position} value={i}>
                        {item.position}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">
              Your Github profile (optional)
            </label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/logo_github.svg")] ${s.inputIcon}`}
              />
              <input type="url" className={s.input} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-[#C0C5DA] text-lg">
              Your Linkedin profile (optional)
            </label>
            <div className="flex">
              <div
                className={`${s.image} h-5 w-5 bg-[url("./images/logo_linkedin.svg")] ${s.inputIcon}`}
              />
              <input type="url" className={s.input} />
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
