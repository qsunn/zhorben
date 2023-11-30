import { s } from "@/app/styles";
import { ArrowButton } from "./components/ArrowButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center p-2 my-52">
      <div>
        <div
          className={`box1 border-[#B60B0B] border-[1px] px-9 py-6 sm:px-12 sm:py-8 gap-3`}
        >
          <div className="flex flex-row gap-5 items-end">
            <h1 className={s.h1title}>404</h1>
            <p className={`${s.p1medium} text-[#B60B0B]`}>Page not found</p>
          </div>
          <p className={s.p1medium}>
            We couldn't find the page you are looking for…
          </p>
        </div>
        <div className="flex flex-row gap-5 mt-10">
          <ArrowButton />
          <p className={s.p1medium}>Back to home page</p>
        </div>
      </div>
    </div>
  );
}
