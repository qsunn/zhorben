import { s } from "@/app/styles";
import { Button } from "../Button";

export const Learn4Landing = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col items-center px-6 2xl:px-44 pt-36 2xl:pt-44 gap-5">
        <h1 className={`${s.h1title} text-center`}>
          Custom Web App Development Services
        </h1>
        <h6 className={`${s.h6titleM} text-grey text-center mb-10`}>
          Our flexible, out-of-the-box developers can create solutions that are
          not only tailored to your needs but can also integrate seamlessly with
          your existing internal systems.
        </h6>
        <Button text="Let’s chat" />
      </div>
    </section>
  );
};
