import { ClientsCards } from "../components/ClientsPage/ClientsCards";
import { ClientsLanding } from "../components/ClientsPage/ClientsLanding";
import { OurClients } from "../components/HomePage/OurClients";

export default function Clients() {
  return (
    <main className="w-full mx-auto pt-44">
      <ClientsLanding />
      <ClientsCards />
      <OurClients />
    </main>
  );
}
