import { s } from "@/app/styles";
import { ClientsCard } from "./ClientsCard";

export const ClientsCards = () => {
  return (
    <section className={s.container}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <ClientsCard
          img="bg-[url('./images/Poland.png')] dark:bg-[url('./images/Poland_dark.png')]"
          title="Flashgrid is Recognized as a Fastest Growing Company in 2022"
          logo="bg-[url('./images/logo_forbes.svg')]"
          desc="Out of the millions of companies in North and South America, Financial Times has recently recognized Flashgrid as number 82 out of 500 of the 'America's Fastest Growing Companies 2022'."
        />
        <ClientsCard
          img="bg-[url('./images/Poland.png')] dark:bg-[url('./images/Poland_dark.png')]"
          title="Quire introduces QuireSight Analytics!"
          logo="bg-[url('./images/logo_forbes.svg')]"
          desc="Quire, the first truly collaborative, most flexible online
            report-writing platform, has announced the launch of QuireSight
            Analytics. Housed within the Quire platform, QuireSight Analytics is
            the unique tool that transforms the way businesses analyze data
            related to their report writing and empowers them to optimize this
            fundamental function for increased profitability."
        />
        <ClientsCard
          img="bg-[url('./images/Poland.png')] dark:bg-[url('./images/Poland_dark.png')]"
          title="Quire introduces QuireSight Analytics!"
          logo="bg-[url('./images/logo_forbes.svg')]"
          desc="Quire, the first truly collaborative, most flexible online
            report-writing platform, has announced the launch of QuireSight
            Analytics. Housed within the Quire platform, QuireSight Analytics is
            the unique tool that transforms the way businesses analyze data
            related to their report writing and empowers them to optimize this
            fundamental function for increased profitability."
        />
        <ClientsCard
          img="bg-[url('./images/Poland.png')] dark:bg-[url('./images/Poland_dark.png')]"
          title="Flashgrid is Recognized as a Fastest Growing Company in 2022"
          logo="bg-[url('./images/logo_forbes.svg')]"
          desc="Out of the millions of companies in North and South America, Financial Times has recently recognized Flashgrid as number 82 out of 500 of the 'America's Fastest Growing Companies 2022'."
        />
      </div>
    </section>
  );
};
