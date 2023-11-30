import { s } from "@/app/styles";
import Link from "next/link";

export const ServicesLanding = () => {
  return (
    <section className={`${s.container} ${s.landing}`}>
      <div className="w-full flex flex-col">
        <h2 className={`${s.h1title} text-center mb-8`}>Our services</h2>
        <p
          className={`${s.h6titleM} ${s.title} place-self-center text-secondary-light dark:text-secondary-dark max-w-[43rem]`}
        >
          In Zhorben we turn your business needs and product ideas into digital
          solutions, starting from mobile applications to sophisticated
          AI-driven solutions. All of our services are accompanied by
          well-organized management and product consulting expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="box1 w-full p-8 flex flex-col justify-between items-start">
            <div>
              <h4 className={`${s.h4title} mb-4`}>
                Team augmentation
              </h4>
              <p className={`${s.p4medium} text-secondary-light dark:text-secondary-dark mb-8`}>
                Hire an individual or a custom group of professionals that will
                be formed by us and will become a dedicated part of your team.
              </p>
            </div>
            <Link
              className={`${s.p3heavy} box1 py-2 px-4 !rounded-full w-full md:w-auto whitespace-nowrap`}
              href="/services/mobile"
            >
              Learn more
            </Link>
          </div>
          <div className="box1 w-full p-8 flex flex-col justify-between items-start">
            <div>
              <h4 className={`${s.h4title} mb-4`}>
                Full-project development
              </h4>
              <p className={`${s.p4medium} text-secondary-light dark:text-secondary-dark mb-8`}>
                Hire a team of dedicated professionals necessary to design,
                develop and launch your project.
              </p>
            </div>
            <Link
              className={`${s.p3heavy} box1 py-2 px-4 !rounded-full w-full md:w-auto whitespace-nowrap`}
              href="/services/web"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
