import React from "react";

type Props = {
  className: string;
  modalStyles: string;
  disclaimer: string;
  active: boolean;
};

const Spinner = ({ className, modalStyles, disclaimer, active }: Props) => {
  return active ? (
    <div
      className={`${className} fixed top-0 left-0 right-0 bottom-0 w-full h_screen z-50 overflow-hidden flex flex-col items-center justify-center`}
    >
      <div className={`${modalStyles} relative p-6`}>
        <div className="mx-auto h-[10.5rem] w-[10.5rem] animate-spin rounded-full border-[12px] border-l-blue border-r-onyx border-t-onyx border-b-onyx"></div>
        <div className="mx-auto mt-4 font-semibold text-[1.4rem] text-white">{disclaimer}</div>
      </div>
    </div>
  ) : null;
};

export default Spinner;
