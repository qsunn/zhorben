import { s } from "@/app/styles";

export const OurServices = () => {
  return (
    <section className={`${s.container} pt-[3.75rem] pb-20`}>
      <div className="w-full grid grid-flow-row place-items-center gap-0">
        <h2 className={s.h3title}>Our services</h2>
        <div className="grid grid-flow-col place-items-center gap-12">
          <div className="grid grid-flow-row gap-32 mt-[16rem]">
            <div className={s.serviceBox}>
              <h5 className={s.h5title}>
                Back-end
                <br />
                Development
              </h5>
            </div>
            <div className={s.serviceBox}>
              <h5 className={s.h5title}>
                AI
                <br />
                Development
              </h5>
            </div>
            <div className={s.serviceBox2}>
              <h5 className={`${s.h5title} mb-4`}>
                Team
                <br />
                Augmentation
              </h5>
              <p className={`${s.p4book} text-grey max-w-[14rem]`}>
                Hire an individual or let us put together a custom group of
                professionals who become a dedicated extension of your team.
              </p>
            </div>
          </div>
          <div className="w-[1.75rem] h-[41.75rem] bg-no-repeat bg-contain bg-center bg-[url('./images/our_services_tabs.png')]" />
          <div className="grid grid-flow-row gap-32 mt-[-8rem]">
            <div className={s.serviceBox2}>
              <h5 className={`${s.h5title} mb-4`}>
                Mobile
                <br />
                Development
              </h5>
              <p className={`${s.p4book} text-grey max-w-[14rem]`}>
                We are experts in iOS and Android native development, as well as
                React Native.
              </p>
            </div>
            <div className={`${s.serviceBox} mt-[-4rem]`}>
              <h5 className={s.h5title}>
                Front-end
                <br />
                Development
              </h5>
            </div>
            <div className={s.serviceBox}>
              <h5 className={s.h5title}>
                Computer Vision
                <br />
                Development
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
