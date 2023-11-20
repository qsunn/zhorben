import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header
      className={`${s.container} py-8 md:py-16 !absolute top-0 left-0 z-50`}
    >
      <ul
        className={`w-full flex items-center justify-between gap-16 ${s.p4medium}`}
      >
        <li className="bg-no-repeat bg-center bg-contain h-[1.625rem] w-[12.5rem] bg-[url('./images/zhorben_logo.svg')]">
          <Link href="" className="w-full h-full">
            {" "}
          </Link>
        </li>
        <li className="hidden 2xl:block whitespace-nowrap">
          <Link href="about">About us</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="cases">Cases</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="services">Services</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="clients">Clients</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="career">Career</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="blog">Blog</Link>
        </li>
        <li className="hidden 2xl:block">
          <Link href="contacts">Contacts</Link>
        </li>
        <li className="hidden 2xl:block">
          <Button text="Let's chat" />
        </li>
        <li className="flex flex-col gap-1 items-center justify-center 2xl:hidden">
          <div className="h-1 w-8 bg-blue" />
          <div className="h-1 w-8 bg-blue" />
          <div className="h-1 w-8 bg-blue" />
        </li>
      </ul>
    </header>
  );
};
