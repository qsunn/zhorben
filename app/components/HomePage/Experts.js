import { s } from "@/app/styles";

export const Experts = () => {
  const tech = [
    {
      name: "Front-end developers",
      desc: "We follow trends in UI/UX and industry standards while infusing artistic vision into each product.",
      techs: ["React", "Angular", "Electron", "Typescript"],
    },
    {
      name: "Back-end developers",
      desc: "We create scalable back-end infrastructure.",
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
      desc: "We create powerful native iOS and Android mobile apps.",
      techs: ["Swift", "ObjectiveC", "Java", "Kotlin", "React Native"],
    },
    {
      name: "AI Developers",
      desc: "Sophisticated machine learning solutions to power any mobile or web app user experience.",
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
      desc: "We use the best popular database to scale your infrastructure faster.",
      techs: ["MySQL", "Mariadb", "Mongo", "Redis", "DynamoDB"],
    },
    {
      name: "DevOps",
      desc: "We design products and turn your ideas into powerful mobile apps.",
      techs: ["Docker", "Kubernetes", "AWS", "Microsoft Azure", "Google Cloud"],
    },
  ];
  return (
    <section className={`${s.container}`}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Technology experts</h3>
        <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tech.map((t) => {
            return (
              <li key={t} className="box1 p-8 flex flex-col gap-8">
                <h5 className={s.h5title}>{t.name}</h5>
                <p className={`${s.p4book} text-grey`}>{t.desc}</p>
                <ul className="w-full flex flex-wrap gap-2">
                  {t.techs.map((tt) => (
                    <li key={tt} className={`${s.p4medium} badge`}>
                      {tt}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
