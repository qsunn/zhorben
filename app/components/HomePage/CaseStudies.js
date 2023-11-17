import { s } from "@/app/styles";
import { CaseCards } from "./CaseCards";
import { Button } from "../Button";

export const CaseStudies = () => {
  return (
    <section className={`${s.container}`}>
      <div>
        <h3 className={`${s.h3title} ${s.title}`}>Our case studies</h3>
        <CaseCards />
        <Button style="w-full my-12" text="See more cases" />
      </div>
    </section>
  );
};
