import { s } from "@/app/styles";

const table = [
  { icon: "bg-[url('./images/icon_eye.svg')]", title: "UI/UX Design Services" },
  {
    icon: "bg-[url('./images/icon_computer.svg')]",
    title: "Web Apps with Interactive User Interfaces",
  },
  {
    icon: "bg-[url('./images/icon_puzzle.svg')]",
    title: "Responsive Website Design",
  },
  {
    icon: "bg-[url('./images/icon_mobile.svg')]",
    title: "Mobile Applications",
  },
];
export const CustomDev = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <div className=" flex flex-col gap-7">
          <p className={`${s.p0bold} ${s.title} text-center`}>
            What Is Custom Web App Development?
          </p>
          <h6 className={`${s.h6titleM} text-grey text-center`}>
            Zhorben&apos;s custom web app development services includes uniquely
            designed web apps custom-made to meet both your current and
            projected future needs. Through the power of custom web development,
            our team of experts will plan, create, test, and launch new apps
            made just for you.
          </h6>
          <h6 className={`${s.h6titleM} text-grey text-center mb-20`}>
            Pulling this off will take everyone working together: a team of
            front-end, back-end, and full-stack developers, business analysts,
            and quality assurance testers.
          </h6>
        </div>
        <ul className={`lg:min-w-[26.875rem] box1 flex flex-col gap-1`}>
          {table.map((item) => {
            return (
              <li
                key={item}
                className="flex flex-row justify-between px-7 py-7 sm:px-12 sm:py-7 gap-3 border-[#E0E0E0] border-b-2"
              >
                <div className="flex flex-row gap-7">
                  <div
                    className={`${item.icon} ${s.bgImage} h-10 w-10 flex-none`}
                  />
                  <p className={`${s.p1heavy}`}>{item.title}</p>
                </div>
                <div
                  className={`${s.bgImage} h-8 w-8 flex-none bg-[url('./images/icon_plus.svg')]`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
