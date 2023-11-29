import { s } from "@/app/styles";

export const WhyWork = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Why working at Zhorben?</h3>
        <div className="grid md:grid-cols-2 gap-10 lg:px-32">
          <div className="flex flex-row gap-2">
            <div
              className={`${s.image} shrink-0 w-5 h-6 bg-[url('./images/icon_checkbox.svg')]`}
            />
            <div className="flex flex-col gap-2">
              <h6 className={s.h6title}>Great experience and opportunity</h6>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                You will work on fast-forward projects in Silicon Valley
                utilizing latest technologies, methodologies, frameworks and
                approaches with the ability and time to learn and develop
                professionally.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div
              className={`${s.image} shrink-0 w-5 h-6 bg-[url('./images/icon_checkbox.svg')]`}
            />
            <div className="flex flex-col gap-2">
              <h6 className={s.h6title}>Great company culture</h6>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                We care about you and take an interest in your personal and
                professional goals and motivation, so that we can help build a
                perfect work/life balance.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div
              className={`${s.image} shrink-0 w-5 h-6 bg-[url('./images/icon_checkbox.svg')]`}
            />
            <div className="flex flex-col gap-2">
              <h6 className={s.h6title}>
                Professional and harmonious team of friends
              </h6>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                Our team is a second family, where you can enjoy spending the
                day working on satisfying projects with great people with broad
                interests.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div
              className={`${s.image} shrink-0 w-5 h-6 bg-[url('./images/icon_checkbox.svg')]`}
            />
            <div className="flex flex-col gap-2">
              <h6 className={s.h6title}>A vast field for growth</h6>
              <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>
                Learn continuously, expand your skills and demonstrate your
                professional level and ability to take more responsibility to
                grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
