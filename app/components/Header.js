import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header
      className={`${s.container} shadow1 bg-[#fff] !py-8 !fixed top-0 left-0 z-50`}
    >
      <ul
        className={`w-full flex items-center justify-between gap-8 ${s.p4medium}`}
      >
        <li className="bg-no-repeat bg-center bg-contain h-[1.625rem] w-[12.5rem] bg-[url('./images/zhorben_logo.svg')]">
          <Link href="" className="w-full h-full">
            {" "}
          </Link>
        </li>
        <li className="hidden lg:block whitespace-nowrap">
          <Link href="about">About us</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="cases">Cases</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="services">Services</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="clients">Clients</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="career">Career</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="blog">Blog</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="contacts">Contacts</Link>
        </li>
        <li className="hidden lg:block">
          <Button text="Let's chat" style="!px-8 !py-1 !text-base" />
        </li>
        <li className="flex flex-col gap-1 items-center justify-center lg:hidden">
          <div className={`h-[1.625rem] w-[1.625rem] ${s.image} bg-[url('./images/icon_custom_burger.svg')]`} />
        </li>
      </ul>
    </header>
  );
};
