import { s } from "@/app/styles";

export const Achievement = () => {
  return (
    <div className={`box1 p-4 sm:p-8 flex flex-row gap-8`}>
      <div
        className={`${s.image} place-self-center h-8 w-9 bg-[url("./images/logo_laurels.svg")]`}
      />
      <div className="flex flex-col gap-2">
        <div
          className={`${s.image} h-5 w-10 bg-[url("./images/logo_clutch.png")]`}
        />
        <p className={`${s.p4book} text-grey text-left`}>
          Top 5 <br />
          AI developers
        </p>
      </div>
    </div>
  );
};
