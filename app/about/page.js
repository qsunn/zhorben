// import { History } from "../components/AboutPage.js/History";
import { Investments } from "../components/AboutPage.js/Investments";
import { Keynote } from "../components/AboutPage.js/Keynote";
import { Landing } from "../components/AboutPage.js/Landing";
import { OurTeam } from "../components/AboutPage.js/OurTeam";
import { Solutions } from "../components/AboutPage.js/Solutions";
import { Achievements } from "../components/HomePage/Achievements";
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
