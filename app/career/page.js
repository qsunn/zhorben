import { CareerForm } from "../components/CareerPage/CareerForm";
import { Vacancies } from "../components/CareerPage/Vacancies";
import { WhyWork } from "../components/CareerPage/WhyWork";

export default function Clients() {
  return (
    <main className="w-full mx-auto">
      <Vacancies />
      <WhyWork />
      <CareerForm />
    </main>
  );
}
