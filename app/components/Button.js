import { s } from "@/app/styles";
export const Button = ({ text, style }) => {
  return (
    <button
      type="button"
      className={`${s.p3heavy} box1 py-2 px-4 !rounded-full whitespace-nowrap ${style}`}
    >
      {text}
    </button>
  );
};
