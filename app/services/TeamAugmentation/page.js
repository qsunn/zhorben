import { AnotherDiscovery } from "@/app/components/LearnMorePage/AnotherDiscovery";
import { Application } from "@/app/components/LearnMorePage/Application";
import { Approaches } from "@/app/components/LearnMorePage/Approaches";
import { DevCards } from "@/app/components/LearnMorePage/DevCards";
import { DevFormat } from "@/app/components/LearnMorePage/DevFormat";
import { Launch } from "@/app/components/LearnMorePage/Launch";
import { LearnLanding } from "@/app/components/LearnMorePage/LearnLanding";
import { Stack } from "@/app/components/LearnMorePage/Stack";
import { Stages } from "@/app/components/LearnMorePage/Stages";
import { WholeSolution } from "@/app/components/LearnMorePage/WholeSolution";

export default function Blog() {
  return (
    <main className="w-full mx-auto">
      <LearnLanding />
      <Approaches />
      <Stages />
      <AnotherDiscovery />
      <DevFormat />
      <DevCards />
      <WholeSolution />
      <Stack />
      <Application />
      <Launch />
    </main>
  );
}
