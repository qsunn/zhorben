import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";
import { ArrowButton } from "./ArrowButton";

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
        { name: "Blog", href: "#" },
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
    <footer className={`${s.container} py-16 md:py-16`}>
      <div>
        <ul
          className={`w-full flex flex-col justify-between gap-20 md:flex-row dm:gap-40 ${s.p4medium}`}
        >
          {footerData.map((item) => {
            return (
              <li key={item.title} className="">
                <h6 className={`${s.h7titleUpper} mb-7`}>{item.title}</h6>
                <ul className="flex flex-col gap-6">
                  {item.links.map((link, i, arr) => {
                    if (item.title === "SOCIAL")
                      return (
                        <li key={link.bg}>
                          <Link
                            href={link.href}
                            className={`block ellipse border-[1px] border-[#e0e0e0] bg-origin-padding !bg-auto h-8 w-8 p-6 ${s.bgImage} ${link.bg}`}
                          />
                        </li>
                      );
                    return (
                      <>
                        <li
                          key={link.name}
                          className="text-grey hover:text-blue"
                        >
                          <div className="flex flex-row gap-1">
                            <div className=" w-5 h-5 bg-center bg-no-repeat bg-auto bg-[url('./images/icon_on.svg')]" />
                            <Link href={link.href}>{link.name}</Link>
                          </div>
                        </li>
                        {item.title === "CASES" && arr.length - 1 === i && (
                          <Button text="See more cases" />
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
  );
};
