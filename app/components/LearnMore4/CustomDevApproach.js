"use client";
import { s } from "@/app/styles";
import { useKeenSlider } from "keen-slider/react";

export const CustomDevApproach = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    initial: 2,
  });
  return (
    <section className={s.container}>
      <div className="w-full">
        <p className={`${s.p0bold} mb-14`}>
          Our Approach to Custom <br /> Web Application Development
        </p>
        <div ref={sliderRef} className="keen-slider">
          <div
            className={`${s.serviceBox} flex flex-col p-10 keen-slider__slide`}
          >
            <h5 className={s.h5title}>Transparent Process</h5>
            <p className={`${s.p4book} text-grey`}>
              Transparent web app development process with each step. Open
              communication will always ensure that you&apos;re kept in the loop
              and up-to-date on all the developments in your project.
            </p>
          </div>
          <div
            className={`${s.serviceBox} flex flex-col justify-between p-10 keen-slider__slide`}
          >
            <h5 className={s.h5title}>Expert team</h5>
            <p className={`${s.p4book} text-grey`}>
              Transparent web app development process with each step. Open
              communication will always ensure that you&apos;re kept in the loop
              and up-to-date on all the developments in your project.
            </p>
          </div>
          <div
            className={`${s.serviceBox} flex flex-col justify-between p-10 keen-slider__slide`}
          >
            <h5 className={s.h5title}>User-oriented approach</h5>
            <p className={`${s.p4book} text-grey`}>
              Transparent web app development process with each step. Open
              communication will always ensure that you&apos;re kept in the loop
              and up-to-date on all the developments in your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
