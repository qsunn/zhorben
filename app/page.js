import { Experts } from "./components/HomePage/Experts";
import { Landing } from "./components/HomePage/Landing";
import { OurServices } from "./components/HomePage/OurServices";
import { WaysOfWork } from "./components/HomePage/WaysOfWork";
import { Discovery } from "./components/HomePage/Discovery";
import { Offer } from "./components/HomePage/Offer";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Landing />
      <WaysOfWork />
      <OurServices />
      <Experts />
      <Discovery />
      <Offer />
    </main>
  );
}
