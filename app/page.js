import { Experts } from "./components/HomePage/Experts";
import { Landing } from "./components/HomePage/Landing";
import { OurServices } from "./components/HomePage/OurServices";
import { WaysOfWork } from "./components/HomePage/WaysOfWork";
import { Discovery } from "./components/HomePage/Discovery";
import { Offer } from "./components/HomePage/Offer";
import { Based } from "./components/HomePage/Based";
import { OurClients } from "./components/HomePage/OurClients";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Landing />
      <WaysOfWork />
      <OurServices />
      <Experts />
      <Discovery />
      <Offer />
      <Based />
      <OurClients />
    </main>
  );
}
