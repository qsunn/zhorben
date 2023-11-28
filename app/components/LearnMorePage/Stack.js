import { s } from "@/app/styles";

export const Stack = () => {
  return (
    <section className={s.container}>
      <div className="w-full">
        <h3 className={`${s.h3title} ${s.title}`}>Our stack</h3>
        <div className="flex flex-row flex-wrap gap-4 md:gap-6 lg:gap-12 lg:px-16 xl:gap-16 xl:px-52 place-items-center justify-center">
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_apple.svg')]`}
            />
            <h6 className={s.h6titleM}>Objective C</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_apple.svg')]`}
            />
            <h6 className={s.h6titleM}>iOS SDK</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_react.svg')]`}
            />
            <h6 className={s.h6titleM}>React Native</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_android.svg')]`}
            />
            <h6 className={s.h6titleM}>Android SDK/NDK</h6>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_cplus.svg')]`}
            />
            <h6 className={s.h6titleM}>C++</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_js.svg')]`}
            />
            <h6 className={s.h6titleM}>JavaScript</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_php.svg')]`}
            />
            <h6 className={s.h6titleM}>PHP</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_python.svg')]`}
            />
            <h6 className={s.h6titleM}>Python</h6>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div
              className={`${s.image} h-12 w-12 bg-[url('./images/logo_sql.svg')]`}
            />
            <h6 className={s.h6titleM}>SQL</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
