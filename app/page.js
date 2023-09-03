import { Landing } from "./components/HomePage/Landing";
import { OurServices } from "./components/HomePage/OurServices";
import { WaysOfWork } from "./components/HomePage/WaysOfWork";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Landing />
      <WaysOfWork />
      <OurServices />
    </main>
  )
}
