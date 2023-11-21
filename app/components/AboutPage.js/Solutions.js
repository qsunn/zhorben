import { s } from "@/app/styles";

export const Solutions = () => {
  const solutions = [
    {
      title: "Cloud software",
      desc: "We lead projects based on the latest and most robust technologies for software delivery like Docker, Kubernetes, AWS, Azure and Google Cloud.",
    },
    {
      title: "API’s",
      desc: "We design and build module architectures using RESTful API and WebSocket, so that our projects are flexible, scalable and upgradeable. We have our own best practices, components and modules for API and back-end development.",
    },
    {
      title: "AI technologies",
      desc: "We use our own technologies in image recognition and computer vision, and have experience with OpenCV, Dlib, Caffe, TensorFlow and CUDA.",
    },
    {
      title: "Testing",
      desc: "We use manual and automatic testing methodologies and software, like Unit,Codeception and Selenium.",
    },
    {
      title: "Code review",
      desc: "We make a regular code review and prefer test-driven development.",
    },
    {
      title: "Data base",
      desc: "We optimize project data handling: MongoDB, Redis, ElasticSearch, Sphynx, Amazon SQS/RabbitMQ.",
    },
    {
      title: "Documentation",
      desc: "We document projects and use special software like Swagger to automate the process.",
    },
    {
      title: "Support",
      desc: "We do not reinvent the wheel but use the best existing solutions and libraries as much as possible to make future support easy and efficient.",
    },
    {
      title: "UI/UX design",
      desc: "We design in Sketch, prototype in Axure, InVision and Principle, and have extensive experience with Adobe Creative Cloud stack and Figma.",
    },
  ];
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>
          Technical solutions we use
        </h3>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
          {solutions.map((t) => {
            return (
              <li className="flex flex-row">
                <div className="box2 p-8">
                  <h5 className={`${s.h5title} mb-4`}>{t.title}</h5>
                  <p className={`${s.p4book} text-grey`}>{t.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
