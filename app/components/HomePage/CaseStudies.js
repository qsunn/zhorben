import { s } from "@/app/styles";
import { CaseCard } from "./CaseCard";
import { Button } from "../Button";

export const CaseStudies = () => {
  return (
    <section className={`${s.container}`}>
      <div>
        <h3 className={`${s.h3title} text-center mb-[5rem]`}>
          Our case studies
        </h3>
        <CaseCard />
        <Button style="w-full my-12" text="See more cases" />
      </div>
    </section>
  );
};
