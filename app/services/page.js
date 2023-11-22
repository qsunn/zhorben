import { AugDev } from "../components/ServicesPage/AugDev";
import { FullDev } from "../components/ServicesPage/FullDev";
import { ServicesLanding } from "../components/ServicesPage/ServicesLanding";

export default function Services() {
  return (
    <main className="w-full mx-auto">
      <ServicesLanding />
      <FullDev />
      <AugDev />
    </main>
  );
}
