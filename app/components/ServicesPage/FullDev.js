import { s } from "@/app/styles";
import { Button } from "../Button";

const tech = [
  {
    name: "Mobile Development",
    desc: "We specialize in mobile applications native iOS and Android development. Our mobile development team is fluent with the platforms guidelines, UI rules and standards, while an extensive experience allows us to keep attention on tiny peculiarities to deliver powerful, user-friendly and amazing apps.",
    techs: [
      "React",
      "Angular",
      "Electron",
      "Typescript",
      "Angular",
      "Electron",
      "Typescript",
    ],
  },
  {
    name: "Back-end developers",
    desc: "We are experienced in high-load and complex backend infrastructures development for mobile or web apps, enterprise services. We are using popular and validated frameworks, what allows us to make truly reliable and scalable solutions specifically-designed for cloud infrastructures.",
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
    name: "Front-end development",
    desc: "We are experienced in building modular, high-performance web applications for corporate clients and startups. Utilizing modern, robust technology stacks, we create modern-looking and responsive interfaces with advanced UI components, animations and data visualizations.",
    techs: ["Swift", "ObjectiveC", "Java", "Kotlin", "React Native"],
  },
  {
    name: "AI Development",
    desc: "Our team is experienced in data analysis and machine learning cutting edge techniques. We also incorporate our domain knowledge in finances, healthcare, aviation, entertainment, security, IoT and mobility into these solutions. Our data analysis and AI experts are experienced in the major industry standards, which allows us to build any recognitive, detective or predictive system.",
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
    name: "Computer vision development",
    desc: "We focus on server and mobile computer vision solutions such as document data recognition, face masking, object detection and more to empower any mobile or web app user experience. Our computer vision developers are experienced in the major industry techniques and provide outstanding advanced algorithm design.",
    techs: ["Docker", "Kubernetes", "AWS", "Microsoft Azure", "Google Cloud"],
  },
];
export const FullDev = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col content-center gap-8">
        <h2 className={`${s.h2title} text-center`}>Full-project development</h2>
        <h6 className={`${s.h6titleM} ${s.title} text-grey`}>
          Hire a team of dedicated professionals necessary to design, develop
          and launch your project.
        </h6>
      </div>
      <ul className="w-full flex flex-col gap-4">
        {tech.map((item) => {
          return (
            <li
              key={item}
              className="box1 p-8 w-full flex flex-col md:flex-row gap-8"
            >
              <div
                className={`${s.bgImage} place-self-start md:place-self-center shrink-0 h-32 w-32 bg-[url('./images/icon_crossed_circles.svg')]`}
              />
              <div className="flex flex-col gap-4">
                <h4 className={s.h4title}>{item.name}</h4>
                <p className={`${s.p4book} text-grey`}>{item.desc}</p>
                <ul className="w-full flex flex-wrap gap-4 mb-4">
                  {item.techs.map((tt) => (
                    <li key={tt} className={`${s.p4medium} badge`}>
                      {tt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row gap-4">
                  <Button style="w-[10rem]" text="Let`s chat" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
