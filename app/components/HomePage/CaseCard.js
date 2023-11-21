import { s } from "@/app/styles";
import { Button } from "@/app/components/Button";

export const CaseCard = ({ item }) => {
  return (
    <li className="box1 p-8 flex flex-col md:flex-row md:p-16 gap-8">
      <div className="flex flex-col items-start gap-4 flex-1">
        <h4 className={s.h4title}>{"We have developed " + item.title}</h4>
        <ul className="w-full flex flex-wrap gap-2">
          {item.techs.map((t) => (
            <li key={t} className={`${s.p4medium} text-grey p-2 border-[0.125rem] border-blue !rounded-full`}>
              {t}
            </li>
          ))}
        </ul>
        <div className={item.logo} />
        <p className={`${s.p4medium} text-grey mb-2`}>{item.desc}</p>
        <Button text="See case study" />
      </div>
      <div
        className={`${item.img} flex-1 place-self-center w-48 h-48 sm:pt-40`}
      />
    </li>
  );
};
