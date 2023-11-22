// import { History } from "../components/AboutPage.js/History";
import { Investments } from "../components/AboutPage/Investments";
import { Keynote } from "../components/AboutPage/Keynote";
import { Landing } from "../components/AboutPage/Landing";
import { OurTeam } from "../components/AboutPage/OurTeam";
import { Solutions } from "../components/AboutPage/Solutions";
import { Achievements } from "../components/Achievements";
import { Based } from "../components/HomePage/Based";
import { OurServices } from "../components/HomePage/OurServices";

export default function About() {
  return (
    <main className="w-full mx-auto">
      <Landing />
      <OurServices />
      <Based />
      <OurTeam />
      <Solutions />
      <Investments />
      {/* <History /> */}
      <Keynote />
      <Achievements />
    </main>
  );
}
