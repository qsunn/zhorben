import { s } from "@/app/styles";
const applications = [
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_wallet.svg')]",
    title: "Fintech and banking",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_shop.svg')]",
    title: "Marketplace",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_shopping.svg')]",
    title: "eCommerce",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_truck.svg')]",
    title: "Delivery and taxi",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_file-medical.svg')]",
    title: "Health and medical",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_business-center.svg')]",
    title: "Business",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_file-medical.svg')]",
    title: "Fitness and lifestyle",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_film.svg')]",
    title: "Entertainment",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_business-center.svg')]",
    title: "Social apps",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_people.svg')]",
    title: "Communications",
  },
  {
    icon: "w-5 h-6 bg-center bg-no-repeat bg-contain bg-[url('./images/icon_iot.svg')]",
    title: "IoT",
  },
];
export const Application = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Application types</h3>
        <ul className="w-full flex flex-row gap-4 flex-wrap place-items-center justify-center">
          {applications.map((item) => {
            return (
              <li
                key={item}
                className="box1 whitespace-nowrap flex-0 p-5 flex flex-row gap-4 items-center"
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
