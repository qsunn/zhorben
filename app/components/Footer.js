import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";
import { Form } from "./Form";

export const Footer = () => {
  const footerData = [
    {
      title: "OUR SERVICES",
      links: [
        { name: "Computer vision development", href: "#" },
        { name: "Mobile development", href: "#" },
        { name: "Back-end development", href: "#" },
        { name: "AI development", href: "#" },
        { name: "Front-end development", href: "#" },
      ],
    },
    {
      title: "CASES",
      links: [
        { name: "Mobile application with AI", href: "#" },
        { name: "Mobile application with CV", href: "#" },
        { name: "E-commerce platform", href: "#" },
        { name: "ERP platform", href: "#" },
        { name: "Mobile security SaaS service ", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Career ", href: "#" },
        { name: "Contacts", href: "#" },
      ],
    },
    {
      title: "SOCIAL",
      links: [
        { bg: "bg-[url('./images/social_twitter.svg')]", href: "#" },
        { bg: "bg-[url('./images/social_facebook.svg')]", href: "#" },
        { bg: "bg-[url('./images/social_linkedin.svg')]", href: "#" },
        { bg: "bg-[url('./images/social_instagram.svg')]", href: "#" },
      ],
    },
  ];
  return (
    <>
      <section className={s.container}>
        <div className="w-full">
          <h2 className="text-4xl text-center underline mb-8">
            Let&apos;s get started
          </h2>
          <Form />
        </div>
      </section>
      <footer className={`${s.container} py-16`}>
        <div className="w-full">
          <ul
            className={`w-full flex flex-col justify-between gap-20 lg:flex-row md:gap-40 ${s.p4medium}`}
          >
            {footerData.map((item) => {
              return (
                <li key={item.title} className="">
                  <h6 className={`${s.h7titleUpper} mb-7`}>{item.title}</h6>
                  <ul className="flex flex-col gap-6 items-start">
                    {item.links.map((link, i, arr) => {
                      if (item.title === "SOCIAL")
                        return (
                          <li
                            key={link.bg}
                            className="box1 !rounded-full !p-1 grid place-items-center"
                          >
                            <Link
                              href={link.href}
                              className={`h-8 w-8 ${s.image} ${link.bg}`}
                            />
                          </li>
                        );
                      return (
                        <>
                          <li
                            key={link.name}
                            className="text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark"
                          >
                            <div className="flex flex-row items-center gap-1">
                              <div className="w-5 h-5 bg-center bg-no-repeat bg-auto bg-[url('./images/icon_on.svg')]" />
                              <Link href={link.href}>{link.name}</Link>
                            </div>
                          </li>
                          {item.title === "CASES" && arr.length - 1 === i && (
                            <Button text="See more cases" style="mt-2" />
                          )}
                        </>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
};
