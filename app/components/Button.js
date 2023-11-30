"use client"
import { s } from "@/app/styles";
export const Button = ({ text, style, onClick = () => { } }) => {
  return (
    <button
      type="button"
      className={`${s.p3heavy} box1 py-2 px-4 !rounded-full w-full md:w-auto whitespace-nowrap ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
