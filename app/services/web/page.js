import { Approaches4 } from "@/app/components/WebPage/Approaches4";
import { CustomDev } from "@/app/components/WebPage/CustomDev";
import { CustomDevApproach } from "@/app/components/WebPage/CustomDevApproach";
import { Learn4Landing } from "@/app/components/WebPage/Learn4Landing";
import { DevFormat } from "@/app/components/MobPage/DevFormat";
import { Launch } from "@/app/components/MobPage/Launch";
import { Stages } from "@/app/components/MobPage/Stages";

export default function Web() {
  return (
    <main className="w-full mx-auto">
      <Learn4Landing />
      <Approaches4 />
      <Stages />
      <DevFormat />
      <CustomDev />
      <CustomDevApproach />
      <Launch />
    </main>
  );
}
