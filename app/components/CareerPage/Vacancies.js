import { s } from "@/app/styles";

const Vacancy = [
  { position: "Senior Project Manager", location: "Remote" },
  { position: "Senior front-end developer", location: "Remote" },
  {
    position: "Senior Operations Manager",
    location: "Sunnyvale, CA, USA or remote",
  },
  { position: "Marketing Manager", location: "Remote" },
  { position: "Business Development Manager", location: "USA remote" },
  { position: "Senior Node.js developer", location: "Remote" },
  { position: "Senior Recruiter", location: "Remote" },
  { position: "Sales Development Representative", location: "USA/Canada" },
  { position: "Senior React Native developer", location: "Remote" },
  { position: "Senior PHP back-end developer (Symfony)", location: "Remote" },
];

export const Vacancies = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h2 className={`${s.h2title} ${s.title}`}>
          We need more team members. <br /> Join us to make the world a better
          place together.
        </h2>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Vacancy.map((t) => {
            return (
              <li
                key={t}
                className="box1 px-10 py-8 flex flex-col place-content-between gap-2"
              >
                <h6 className={s.h6title}>{t.position}</h6>
                <p className={`${s.p3book} text-secondary-light dark:text-secondary-dark`}>{t.location}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
