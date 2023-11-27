import { s } from "@/app/styles";
import { Button } from "../Button";

export const DevCards = () => {
  return (
    <section className={s.container}>
      <div className="flex flex-col gap-16">
        <div className="box1 px-8 py-7 lg:px-20 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-16">
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            <div className="box2 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_filled_people.svg')]`}
              />
            </div>
            <div className="flex flex-col">
              <h6 className={s.h6title}>UI/UX design, prototyping</h6>
              <p className={`${s.p4book} text-grey`}>
                Your user interface (UI) and user experience (UX) are keys to
                your success. Our UI development process is dynamic and
                iterative, based on prototypes, user feedback, and analytics
                that let us see your UI through your customers&apos; eyes. Our
                progressive UI development also saves you time and money,
                because it eliminates late, unexpected scope changes.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            <div className="box2 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_computer.svg')]`}
              />
            </div>
            <div className="flex flex-col">
              <h6 className={s.h6title}>Automated QA and testing</h6>
              <p className={`${s.p4book} text-grey`}>
                Automated quality assurance and testing are best practices in
                software development. We implement QA automation solutions and
                testing tools because they yield significant advantages for our
                clients, including the highest product quality, lowest costs,
                and fastest releases.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            <div className="box2 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_mobile.svg')]`}
              />
            </div>
            <div className="flex flex-col">
              <h6 className={`${s.h6title}`}>
                Adherence to industry best practices and technology standards
              </h6>
              <p className={`${s.p4book} text-grey`}>
                Your user interface (UI) and user experience (UX) are keys to
                your success. Our UI development process is dynamic and
                iterative, based on prototypes, user feedback, and analytics
                that let us see your UI through your customers&apos; eyes. Our
                progressive UI development also saves you time and money,
                because it eliminates late, unexpected scope changes.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5">
            <div className="box2 !rounded-full flex-none p-8 mb-5">
              <div
                className={`${s.bgImage} h-10 w-10 place-self-center flex-none bg-[url('./images/icon_security.svg')]`}
              />
            </div>
            <div className="flex flex-col">
              <h6 className={`${s.h6title}`}>
                Compliance with security standards <br />
                and policies
              </h6>
              <p className={`${s.p4book} text-grey`}>
                We follow industry best practices to meet each client&apos;s
                security needs. We can help you comply with security standards
                and regulations such as SOC 2, PCI DSS, GDPR, and HIPAA. We also
                provide strict version control and automatic code and data
                backups to ensure product continuity and protect you against
                critical data loss.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`rounded-2xl border-[1px] border-[#5F6E90] px-8 py-8 lg:px-28 lg:py-12 flex flex-col gap-5 items-center`}
        >
          <h3 className={`${s.h3title} text-center`}>
            Analytics and product optimization
          </h3>
          <h6 className={`${s.h6titleM} text-grey text-center`}>
            To add greater value to your business, we use analytics to refine
            your product and maximize your return on investment. We make
            data-driven decisions on UI/UX impact, content, and process flow.
            And we could help your marketing team maximize conversions, revenue,
            and profits. Our engineers integrate your goals and metrics to build
            conversion funnels, going far beyond simple tracking pixels.
          </h6>
          <Button text="Let`s chat" />
        </div>
      </div>
    </section>
  );
};
