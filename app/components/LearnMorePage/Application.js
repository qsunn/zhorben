import { s } from "@/app/styles";
const applications = [
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Fintech and banking",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Marketplace",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "eCommerce",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Delivery and taxi",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Health and medical",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Business",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Entertainment",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Fitness and lifestyle",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Social apps",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Communications",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "IoT",
  },
];
export const Application = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Application types</h3>
        <ul className="flex flex-row gap-4 flex-wrap lg:px-16 place-items-center justify-center">
          {applications.map((item) => {
            return (
              <li
                key={item}
                className="box1 lg:min-w-[17rem] min-w-[17rem] p-5 flex flex-row gap-4 items-center"
              >
                <div className={`${item.icon}`} />
                <p className={s.p3heavy}>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
