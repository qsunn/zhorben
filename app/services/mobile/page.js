import { AnotherDiscovery } from "@/app/components/MobPage/AnotherDiscovery";
import { Application } from "@/app/components/MobPage/Application";
import { Approaches } from "@/app/components/MobPage/Approaches";
import { DevCards } from "@/app/components/MobPage/DevCards";
import { DevFormat } from "@/app/components/MobPage/DevFormat";
import { Launch } from "@/app/components/MobPage/Launch";
import { LearnLanding } from "@/app/components/MobPage/LearnLanding";
import { Stack } from "@/app/components/MobPage/Stack";
import { Stages } from "@/app/components/MobPage/Stages";
import { WholeSolution } from "@/app/components/MobPage/WholeSolution";

export default function Mobile() {
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
