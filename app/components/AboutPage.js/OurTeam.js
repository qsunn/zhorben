import { s } from "@/app/styles";

export const OurTeam = () => {
  const employeesData = [
    {
      name: "Volodymyr Boychyshyn",
      position: "Front-End Developer",
      about:
        "Some quick example text to build on the card title and make up the bulk of the card`s content.",
      photo: 'bg-[url("./images/employee_photo_2.jpg")]',
    },
    {
      name: "Arthur Zherka",
      position: "Lead Developer, SEO",
      about:
        "Some quick example text to build on the card title and make up the bulk of the card`s content.",
      photo: 'bg-[url("./images/employee_photo_1.jpg")]',
    },
    {
      name: "Maria Derjavina",
      position: "Front-End Developer",
      about:
        "Some quick example text to build on the card title and make up the bulk of the card`s content.",
      photo: 'bg-[url("./images/employee_photo_3.jpg")]',
    },
  ];
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col items-center">
        <h3 className={`${s.h3title} ${s.title} mb-20`}>Our executive team</h3>
        <ul className="w-full flex flex-col lg:flex-row gap-16">
          {employeesData.map((t) => {
            return (
              <li className="box1 relative p-8 pt-20" key={t.name}>
                <div
                  className={`w-24 h-24 rounded-full absolute top-[-2rem] left-[2rem] z-10 ${s.image} ${t.photo}`}
                />
                <p className={`${s.p2heavy}`}>{t.name}</p>
                <p className={`${s.p2book} text-grey mb-4`}>{t.position}</p>
                <div className="flex flex-row gap-2 mb-4">
                  <div className="h-8 w-8 bg-[url('./images/social_twitter.svg')]" />
                  <div className="h-8 w-8 bg-[url('./images/social_facebook.svg')]" />
                  <div className="h-8 w-8 bg-[url('./images/social_linkedin.svg')]" />
                  <div className="h-8 w-8 bg-[url('./images/social_instagram.svg')]" />
                </div>
                <p className={`${s.p3medium} text-grey`}>
                  {t.about}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
