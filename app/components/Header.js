import Link from "next/link";
import { s } from "../styles";
import { Button } from "./Button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <header
      className={`${s.container} shadow1 bg-[#fff] !py-8 !fixed top-0 left-0 z-50`}
    >
      <ul
        className={`w-full flex items-center justify-between gap-8 ${s.p4medium}`}
      >
        <li>
          <Link href="/" className="block bg-no-repeat bg-center bg-contain h-[1.625rem] w-[12.5rem] bg-[url('./images/zhorben_logo.svg')]" />
        </li>
        <li className="hidden lg:block whitespace-nowrap">
          <Link href="/about">About us</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/cases">Cases</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/services">Services</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/clients">Clients</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/career">Career</Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/contacts">Contacts</Link>
        </li>
        <li className="hidden box1 p-2 rounded-full lg:grid place-items-center">
          <button className={`${s.image} !fill-primary-light w-4 h-4 ${isDark ? "bg-[url('./images/icon_moon.svg')]" : "bg-[url('./images/icon_sun.svg')]"}`} onClick={() => setTheme(isDark ? 'light' : 'dark')} />
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
