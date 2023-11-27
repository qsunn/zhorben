import { s } from "@/app/styles";
import { Button } from "../Button";

const approachList = [
  {
    title: "Mobile-only",
    desc: "Our team can fully develop and maintain your iOS and Android mobile applications, or we can collaborate with your project team in a joint development effort.",
  },
  {
    title: "Mobile + backend",
    desc: "When you need to develop a backend solution to support your mobile app, our backend engineering team is ready to help.    ",
  },
  {
    title: "Web version",
    desc: "If you need a web application along with your mobile app, our front-end team will help you achieve your goals.",
  },
  {
    title: "Admin panel",
    desc: "We design and develop easy-to-use admin panels for mobile and web apps, using popular UI solutions that are reliable and easy to support and extend.",
  },
];
export const Approaches = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Project approaches</h3>
        <ul className="w-full grid sm:grid-cols-2 gap-8">
          {approachList.map((item) => {
            return (
              <li
                key={item}
                className={`${s.serviceBox} flex flex-col lg:flex-row p-5 gap-4`}
              >
                <div
                  className={`${s.bgImage} place-self-center lg:place-self-start shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')]`}
                />
                <div classNAme="flex flex-col justify-between gap-5">
                  <h5 className={`${s.h5title}`}>{item.title}</h5>
                  <p className={`${s.p4book} text-grey`}>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex place-content-center mt-10">
          <Button text="Let`s chat" />
        </div>
      </div>
    </section>
  );
};
