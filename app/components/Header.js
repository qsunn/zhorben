import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header
      className={`${s.container} py-8 md:py-16 !absolute top-0 left-0 z-50`}
    >
      <ul
        className={`w-full flex items-center justify-between gap-16 text-base ${s.p4medium}`}
      >
        <li className="bg-no-repeat bg-center bg-contain h-[1.625rem] w-[12.5rem] bg-[url('./images/zhorben_logo.svg')]">
          <Link href="" className="w-full h-full">
            {" "}
          </Link>
        </li>
        <li>
          <Link href="about">About us</Link>
        </li>
        <li>
          <Link href="cases">Cases</Link>
        </li>
        <li>
          <Link href="services">Services</Link>
        </li>
        <li>
          <Link href="clients">Clients</Link>
        </li>
        <li>
          <Link href="career">Career</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
        <li>
          <Link href="contacts">Contacts</Link>
        </li>
        <li>
          <Button className="buttonBoxHeader" text="Let's chat" />
        </li>
      </ul>
    </header>
  );
};
