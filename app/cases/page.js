import { s } from "@/app/styles";
import { CaseStudies } from "../components/CaseStudies";

export default function Cases() {
    return (
        <main className={`w-full mx-auto ${s.landing}`}>
            <CaseStudies />
        </main>
    );
}
