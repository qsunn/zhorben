import { s } from "@/app/styles";

export const ClientsCard = ({ img, title, logo, desc }) => {
  return (
    <div
      className={`${s.serviceBox} flex flex-col items-start p-4 sm:p-8 gap-2 sm:gap-0`}
    >
      <div className={`${s.image} h-48 w-full hidden sm:flex ${img}`} />
      <h5 className={s.h5title}>{title}</h5>
      <div
        className={`${s.image} ${logo} h-20 w-28 hidden sm:flex transition-all hover:scale-125`}
      />
      <p className={`${s.p4medium} text-secondary-light dark:text-secondary-dark`}>{desc}</p>
    </div>
  );
};
