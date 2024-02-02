import { ReactNode } from "react";

type Props = {
  brand: string;
  name: string;
  ariaLabel?: string;
  children: ReactNode;
  value?: string | number;
  onChange: (value: string) => void;
};

export default function CustomDropdown({
  brand,
  name,
  children,
  value,
  ariaLabel,
  onChange,
}: Props) {
  const isSandals = brand === "sandals";
  const topArrow = `before:absolute before:z-10 before:block before:border-solid before:border-x-[0.8rem] before:border-b-[0.8rem] ${
    isSandals ? "before:border-b-dark-blue" : "before:border-b-blue"
  } before:border-x-transparent`;
  const bottomArrow = `after:absolute after:z-10 after:block after:border-solid after:border-x-[0.8rem] after:border-t-[0.8rem] ${
    isSandals ? "after:border-t-dark-blue" : "after:border-t-blue"
  } after:border-x-transparent`;
  const focus = `focus:${
    isSandals ? "ring-dark-blue" : "ring-blue"
  } focus:ring-2`;

  return (
    <div className="relative text-[2.3rem] border-t-dark-blue">
      <div
        className={`option ml-4 ${topArrow} ${bottomArrow} before:top-[1.4rem] after:top-[2.6rem] before:right-4 after:right-4`}
      >
        <select
          className={`w-full min-w-[9.6rem] bg-sandals-light-gray h-[4.8rem] pl-4 pr-2 appearance-none focus:outline-none rounded-md font-semibold border-solid border ${focus} border-platinum`}
          name={name}
          aria-label={ariaLabel}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {children}
        </select>
      </div>
    </div>
  );
}
