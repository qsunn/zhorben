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
        <ul className="flex flex-col lg:flex-row gap-8">
          {employeesData.map((t) => {
            return (
              <li className="">
                <div className="box relative p-9 pt-28">
                  <div
                    className={`w-28 h-28 rounded-full absolute top-[-1rem] left-[1.5rem] z-50 ${s.image} ${t.photo}`}
                  />
                  <p className={`${s.p2heavy}`}>{t.name}</p>
                  <p className={`${s.p2book} text-grey mb-5`}>{t.position}</p>
                  <div className="flex flex-row gap-2 mb-5">
                    <div className="h-8 w-8 bg-[url('./images/social_twitter.svg')]" />
                    <div className="h-8 w-8 bg-[url('./images/social_facebook.svg')]" />
                    <div className="h-8 w-8 bg-[url('./images/social_linkedin.svg')]" />
                    <div className="h-8 w-8 bg-[url('./images/social_instagram.svg')]" />
                  </div>
                  <p className={`${s.p3medium} text-grey max-w-[rem]`}>
                    {t.about}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
