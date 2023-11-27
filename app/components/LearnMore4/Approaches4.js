import { s } from "@/app/styles";

const approachList = [
  {
    title: "Front-end",
    desc: "Our team can develop the front end user interface of your website or web app and integrate it with your existing backend and API.",
  },
  {
    title: "Front-end + Backend",
    desc: "When you need to develop a backend solution to support your mobile app, our backend engineering team is ready to help.",
  },
  {
    title: "Admin Panel",
    desc: "We design and develop easy-to-use admin panels for mobile and web apps, using popular UI solutions that are reliable and easy to support and extend.",
  },
];

export const Approaches4 = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Project approaches</h3>
        <ul className="w-full flex flex-col md:flex-row gap-8">
          {approachList.map((item) => {
            return (
              <li
                key={item}
                className={`${s.serviceBox} flex flex-col lg:flex-row p-7 gap-4`}
              >
                <div
                  className={`${s.bgImage} place-self-center lg:place-self-start shrink-0 h-24 w-24 bg-[url('./images/icon_crossed_circles.svg')]`}
                />
                <div className="flex flex-col justify-around">
                  <h5 className={`${s.h5title}`}>{item.title}</h5>
                  <p className={`${s.p4book} text-grey`}>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
