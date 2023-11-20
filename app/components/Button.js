import { s } from "@/app/styles";
export const Button = ({ text, style }) => {
  return (
    <button type="button" className={`${s.p3heavy} buttonBox whitespace-nowrap ${style}`}>
      {text}
    </button>
  );
};
