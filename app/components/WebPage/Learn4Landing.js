import { s } from "@/app/styles";
import { Button } from "../Button";

export const Learn4Landing = () => {
  return (
    <section className={`${s.container} ${s.landing}`}>
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className={`${s.h1title} text-center`}>
          Custom Web App Development Services
        </h1>
        <h6 className={`${s.h6titleM} text-secondary-light dark:text-secondary-dark text-center mb-10`}>
          Our flexible, out-of-the-box developers can create solutions that are
          not only tailored to your needs but can also integrate seamlessly with
          your existing internal systems.
        </h6>
        <Button text="Let’s chat" />
      </div>
    </section>
  );
};
