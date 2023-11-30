"use client";
import { s } from "@/app/styles";
import { useKeenSlider } from "keen-slider/react";

const ourApproach = [
  {
    title: "Transparent Process",
    text: "Transparent web app development process with each step. Open communication will always ensure that you’re kept in the loop and up-to-date on all the developments in your project."
  }, {
    title: "Expert team",
    text: "Transparent web app development process with each step. Open communication will always ensure that you’re kept in the loop and up-to-date on all the developments in your project."
  }, {
    title: "User-oriented approach",
    text: "Transparent web app development process with each step. Open communication will always ensure that you’re kept in the loop and up-to-date on all the developments in your project."
  },
]

export const CustomDevApproach = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
  });
  return (
    <section className={`${s.container} overflow-hidden hidden sm:block`}>
      <div className="w-full">
        <p className={`${s.p0bold} mb-12`}>
          Our Approach to Custom <br /> Web Application Development
        </p>
        <div className="h-auto relative -mx-16 sm:-mx-28 2xl:-mx-32">
          <ul ref={sliderRef} className="keen-slider p-4 absolute top-0 -right-12 sm:-right-24 2xl:-right-28">
            {ourApproach.map(item => {
              return (
                <li key={item.title} className="box1 flex flex-col gap-2 p-8 keen-slider__slide !transition-none !transition-shadow">
                  <h5 className={s.h5title}>{item.title}</h5>
                  <p className={`${s.p4book} text-secondary-light dark:text-secondary-dark`}>{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
