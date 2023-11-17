import { s } from "@/app/styles";
import { Button } from "@/app/components/Button";

export const CaseCard = ({ item }) => {
  return (
    <li className="box p-20 flex flex-row gap-10">
      <div className="flex flex-col gap-5 flex-1">
        <h4 className={s.h4title}>{"We have developed " + item.title}</h4>
        <ul className="w-full flex gap-x-2 gap-y-1">
          {item.techs.map((t) => (
            <li key={t} className={`${s.p4medium} text-grey badge`}>
              {t}
            </li>
          ))}
        </ul>
        <div className={item.logo} />
        <p className={`${s.p4medium} text-grey`}>{item.desc}</p>
        <Button style="w-[50%]" text="See more cases" />
      </div>
      <div className={`${item.img} flex-1 place-self-center w-52 h-52`} />
    </li>
  );
};
