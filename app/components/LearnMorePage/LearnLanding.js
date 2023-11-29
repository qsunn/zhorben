import { s } from "@/app/styles";
import { Button } from "../Button";

export const LearnLanding = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col items-center gap-8 pt-20 2xl:pt-36">
        <Button style="mb-8" text="Mobile Development" />{" "}
        {/*Is it a button or just rounded box?*/}
        <p className={`${s.p0bold} text-center`}>
          Zhorben specializes in native and cross-platform mobile application
          development for iOS and Android
        </p>
        <h6 className={`${s.h6titleM} text-center text-secondary-light dark:text-secondary-dark`}>
          Our mobile development team is fluent in the mobile guidelines, UI
          standards, and best practices of Apple and Google. With our extensive
          experience, we see to every detail to make your apps powerful,
          user-friendly, and successful.
        </h6>
        <Button text="Let`s chat" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex sm:flex-row items-center gap-2">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_apple.svg')]`}
            />
            <h6 className={`${s.h6titleM} pl-3 border-l-2 sm:pl-0 sm:border-l-0 sm:pr-3 sm:border-r-2`}>Native iOS</h6>
          </div>
          <div className="flex sm:flex-row items-center gap-2">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_android.svg')]`}
            />
            <h6 className={`${s.h6titleM} pl-3 border-l-2 sm:pl-0 sm:border-l-0 sm:pr-3 sm:border-r-2`}>
              Native Android
            </h6>
          </div>
          <div className="flex sm:flex-row items-center gap-2">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_react.svg')]`}
            />
            <h6 className={`${s.h6titleM} pl-3 border-l-2 sm:p-0 sm:border-none`}>
              React Native
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};
