import { Approaches4 } from "../components/LearnMore4/Approaches4";
import { CustomDev } from "../components/LearnMore4/CustomDev";
import { CustomDevApproach } from "../components/LearnMore4/CustomDevApproach";
import { Learn4Landing } from "../components/LearnMore4/Learn4Landing";
import { DevFormat } from "../components/LearnMorePage/DevFormat";
import { Launch } from "../components/LearnMorePage/Launch";
import { Stages } from "../components/LearnMorePage/Stages";

export default function Blog() {
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
