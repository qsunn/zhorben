import { s } from "@/app/styles";
import { Button } from "../Button";

export const ServicesLanding = () => {
  return (
    <section className={s.container}>
      <div className="w-full pt-20 lg:pt-48 flex flex-col">
        <h2 className={`${s.h1title} text-center mb-8`}>Our services</h2>
        <h6
          className={`${s.h6titleM} ${s.title} place-self-center text-grey max-w-[43rem]`}
        >
          In Zhorben we turn your business needs and product ideas into digital
          solutions, starting from mobile applications to sophisticated
          AI-driven solutions. All of our services are accompanied by
          well-organized management and product consulting expertise.
        </h6>
        <div className="flex flex-col sm:flex-row gap-12 w-full">
          <div className="box1 w-full p-8 flex flex-col justify-between">
            <div>
              <h4 className={`${s.h4title} max-w-[12.375rem] mb-4`}>
                Team augmentation
              </h4>
              <p className={`${s.p4medium} text-grey mb-10`}>
                Hire an individual or a custom group of professionals that will
                be formed by us and will become a dedicated part of your team.
              </p>
            </div>
            <Button style="max-w-[9rem]" text="Learn more" />
          </div>
          <div className="box1 w-full p-8 flex flex-col justify-between">
            <div>
              <h4 className={`${s.h4title}  max-w-[12.375rem] mb-4`}>
                Full-project development
              </h4>
              <p className={`${s.p4medium} text-grey mb-10`}>
                Hire a team of dedicated professionals necessary to design,
                develop and launch your project.
              </p>
            </div>
            <Button style="max-w-[9rem]" text="Learn more" />
          </div>
        </div>
      </div>
    </section>
  );
};
