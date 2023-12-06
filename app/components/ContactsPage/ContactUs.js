import { s } from "@/app/styles";
import { Form } from "../Form";

export const ContactUs = () => {
  return (
    <section className={`${s.container} ${s.landing}`}>
      <div className="w-full">
        <h3 className={`${s.h3title} mb-16 md:mb-[5rem] text-center`}>
          Contact us
        </h3>
        <div className="flex md:flex-row flex-col gap-12 w-full">
          <div className="box1 flex flex-col max-w-[23.75rem] w-full">
            <div className="flex flex-col p-8 gap-5">
              <p
                className={`${s.p3medium}text-primary-light dark:text-primary-dark`}
              >
                http://localhost:3000
              </p>
              <p
                className={`${s.p3heavy} text-primary-light dark:text-primary-dark `}
              >
                +1 (415) 655-1002
              </p>
              <p
                className={`${s.p2book} text-secondary-light dark:text-secondary-dark`}
              >
                mail@zhorben.ru
              </p>
            </div>
            <div
              className={`bg-center bg-no-repeat bg-cover h-72 md:h-[71%] rounded-b-2xl bg-[url('./images/map.png')] dark:bg-[url('./images/map_dark.png')]`}
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
