import { Experts } from "./components/HomePage/Experts";
import { Landing } from "./components/HomePage/Landing";
import { OurServices } from "./components/HomePage/OurServices";
import { WaysOfWork } from "./components/HomePage/WaysOfWork";
import { Discovery } from "./components/HomePage/Discovery";
import { Offer } from "./components/HomePage/Offer";
import { Based } from "./components/HomePage/Based";
import { OurClients } from "./components/HomePage/OurClients";
import { Reviews } from "./components/HomePage/Reviews";
import { CaseStudies } from "./components/HomePage/CaseStudies";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Landing />
      <WaysOfWork />
      <OurServices />
      <Experts />
      <Discovery />
      <Offer />
      <Based /> {/* issues with bg image on small screen*/}
      <OurClients />
      {/* <Reviews /> */}
      <CaseStudies /> {/* issues with the whole card on small screen*/}
    </main>
  );
}
