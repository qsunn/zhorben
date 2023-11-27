import { s } from "@/app/styles";
import { Button } from "../Button";

export const LearnLanding = () => {
  return (
    <section className={s.container}>
      <div className="w-full flex flex-col items-center gap-8 pt-20 2xl:pt-36">
        <Button text="Mobile Development" />{" "}
        {/*Is it a button or just rounded box?*/}
        <p className={`${s.p0bold} text-center`}>
          Zhorben specializes in native and cross-platform mobile application
          development for iOS and Android
        </p>
        <h6 className={`${s.h6titleM} text-center text-grey`}>
          Our mobile development team is fluent in the mobile guidelines, UI
          standards, and best practices of Apple and Google. With our extensive
          experience, we see to every detail to make your apps powerful,
          user-friendly, and successful.
        </h6>
        <Button text="Let`s chat" />
        <div className="flex flex-col sm:flex-row sm:items-center content-center gap-2">
          <div className="flex sm:flex-row flex-row-reverse">
            <div
              className={`${s.image} ml-4 h-12 w-12 bg-[url('./images/logo_apple.svg')]`}
            />
            <h6 className={`${s.h6titleM} px-4 pt-3 border-r-2`}>Native iOS</h6>
          </div>
          <div className="flex sm:flex-row flex-row-reverse">
            <div
              className={`${s.image} ml-4 h-12 w-12 bg-[url('./images/logo_android.svg')]`}
            />
            <h6 className={`${s.h6titleM} px-4 pt-3 border-r-2`}>
              Native Android
            </h6>
          </div>
          <div className="flex sm:flex-row flex-row-reverse">
            <div
              className={`${s.image} ml-4 h-12 w-12 bg-[url('./images/logo_react.svg')]`}
            />
            <h6 className={`${s.h6titleM} px-4 pt-3 border-r-2 sm:border-r-0`}>
              React Native
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};
