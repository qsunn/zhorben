import { s } from "@/app/styles";
export const Button = ({ text }) => {
  return (
    <button type="button" className={`${s.p3heavy} buttonBox`}>
      {text}
    </button>
  );
};
