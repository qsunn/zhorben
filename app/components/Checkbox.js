import { s } from "../styles";

export const Checkbox = ({ title }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 rounded-full cursor-pointer">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#E0E0E0] dark:border-[#282B42] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
            id="customCheckbox"
          />
          <span className="box1 absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <div className='bg-center bg-no-repeat bg-cover h-4 w-4 place-self-center !bg-[url("./images/icon_tick.svg")]' />
          </span>
        </label>
      </div>
      <p
        className={`${s.p3book} text-secondary-light dark:text-secondary-dark`}
      >
        {title}
      </p>
    </div>
  );
};
