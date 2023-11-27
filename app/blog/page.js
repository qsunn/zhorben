import { AnotherDiscovery } from "../components/LearnMorePage/AnotherDiscovery";
import { Application } from "../components/LearnMorePage/Application";
import { Approaches } from "../components/LearnMorePage/Approaches";
import { DevFormat } from "../components/LearnMorePage/DevFormat";
import { Launch } from "../components/LearnMorePage/Launch";
import { LearnLanding } from "../components/LearnMorePage/LearnLanding";
import { Stack } from "../components/LearnMorePage/Stack";
import { Stages } from "../components/LearnMorePage/Stages";
import { WholeSolution } from "../components/LearnMorePage/WholeSolution";

export default function Blog() {
  return (
    <main className="w-full mx-auto">
      <LearnLanding />
      <Approaches />
      <Stages />
      <AnotherDiscovery />
      <DevFormat />
      <WholeSolution />
      <Stack />
      <Application />
      <Launch />
    </main>
  );
}
