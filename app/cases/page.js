import { s } from "@/app/styles";
import { CaseStudies } from "../components/CaseStudies";
import { LetsChat } from "../components/LetsChat";
import { Consultation } from "../components/Consultation";

export default function Cases() {
  return (
    <main className={`w-full mx-auto ${s.landing}`}>
      <CaseStudies />
      <LetsChat />
      <Consultation />
    </main>
  );
}
