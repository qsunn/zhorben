import { s } from "@/app/styles";
import { Button } from "../Button";

export const AugDev = () => {
  const tech = [
    {
      name: "Front-end developers",
      techs: ["React", "Angular", "Electron", "Typescript"],
    },
    {
      name: "Back-end developers",
      techs: [
        "Node.js",
        "Express",
        "Next.js",
        "Nest.js",
        "PHP",
        "Symfony",
        "Laravel",
        "Lumen",
        "Yii",
        "Go",
        "Python",
      ],
    },
    {
      name: "Mobile app development",
      techs: ["Swift", "ObjectiveC", "Java", "Kotlin", "React Native"],
    },
    {
      name: "AI Developers",
      techs: [
        "Python",
        "Tensorflow",
        "Numpy",
        "Pytorch",
        "openCV",
        "dLib",
        "CUDAed",
      ],
    },
    {
      name: "Databases",
      techs: ["MySQL", "Mariadb", "Mongo", "Redis", "DynamoDB"],
    },
    {
      name: "DevOps",
      techs: ["Docker", "Kubernetes", "AWS", "Microsoft Azure", "Google Cloud"],
    },
  ];
  return (
    <section className={s.container}>
      <div className="w-full">
        <h2 className={`${s.h2title} text-center mb-8`}>Team augmentation</h2>
        <p className={`${s.h6titleM} ${s.title} text-secondary-light dark:text-secondary-dark`}>
          Hire an individual or a custom group of professionals that will be
          formed by us and will become a dedicated part of your team.
        </p>
        <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tech.map((t) => {
            return (
              <li
                key={t}
                className="box1 p-8 flex flex-col place-content-between gap-8"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${s.bgImage} shrink-0 bg-[url("./images/icon_portrait.svg")] h-12 w-12 rounded-full justify-center`}
                    />
                    <h5 className={s.h5title}>{t.name}</h5>
                  </div>
                  <ul className="w-full flex flex-wrap gap-2">
                    {t.techs.map((tt) => (
                      <li key={tt} className={`${s.p4medium} badge`}>
                        {tt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button text="Hire" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
