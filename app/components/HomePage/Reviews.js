"use client";
import { s } from "@/app/styles";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard";

const employeesData = [
  {
    name: "Arthur Zherka",
    position: "Lead Developer, SEO",
    about:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
    photo: 'bg-[url("./images/employee_photo_1.jpg")]',
    logo: 'bg-[url("./images/logo_instreamatic.png")]',
    logoText: "Mi3 Security",
  },
  {
    name: "Volodymyr Boychyshyn",
    position: "Front-End Developer",
    about:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
    photo: 'bg-[url("./images/employee_photo_2.jpg")]',
    logo: 'bg-[url("./images/logo_clutch.png")]',
    logoText: "L.E. Solutions",
  },
  {
    name: "Maria Derjavina",
    position: "Front-End Developer",
    about:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
    photo: 'bg-[url("./images/employee_photo_3.jpg")]',
    logo: 'bg-[url("./images/logo_clutch.png")]',
    logoText: "L.E. Solutions",
  },
];

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    rtl: true,
    mode: "snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 5,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className={`${s.container}`}>
      <div className="navigation-wrapper w-full">
        <div ref={sliderRef} className="keen-slider w-full flex items-center">
          {employeesData.map((employee, i) => {
            return (
              <div className="keen-slider__slide px-5" key={employee.name}>
                <ReviewCard
                  employee={employee}
                  index={i}
                  currentSlide={currentSlide}
                />
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <button
              type="button"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className="box1 rounded-full bg-[#EFEFEF] p-3 absolute -left-16 top-1/2 -translate-y-1/2"
            >
              <div className="h-[1.25rem] w-[1.25rem] bg-center bg-no-repeat bg-contain bg-[url('./images/icon_arrow_left.svg')]" />
            </button>

            <button
              type="button"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className="box1 rounded-full bg-[#EFEFEF] p-3 absolute -right-16 top-1/2 -translate-y-1/2"
            >
              <div className="h-[1.25rem] w-[1.25rem] bg-center bg-no-repeat bg-contain bg-[url('./images/icon_arrow_right.svg')]" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};
