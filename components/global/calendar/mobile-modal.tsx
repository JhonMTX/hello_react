import { useEffect } from "react";
import OutsideClick from "@/components/wrapper";

type Props = {
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  focusFrom: boolean;
  onChange: (value: boolean) => void;
};

export default function MobileModal({
  children,
  className,
  isOpen,
  focusFrom,
  onChange,
}: Props) {
  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    onChange(false);
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const ref = OutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="modal-bg bg-white fixed top-0 left-0 w-full h-full overflow-x-hidden z-50 overflow-y-auto">
      <div className={`content ${className}`} ref={ref}>
        <div className="bg-onyx w-full z-50 fixed top-0 left-0 px-6">
          <div className="btn-container text-[1.4rem] py-4 w-full text-right border-b border-solid border-b-outer-space-light">
            <button
              className="btn-close self-end text-white"
              onClick={() => closeModal()}
            >
              Done
            </button>
          </div>
          <div className="header-container py-3 font-light text-[1.8rem] text-white text-center">
            Select{" "}
            <span className="text-blue uppercase font-semibold">
              {focusFrom ? "check-in" : "check-out"}
            </span>{" "}
            Date:
          </div>
          <div className="days-cell bg-white border-b border-solid border-b-gainsboro-soft absolute bottom-[-3.5rem] left-0 w-full">
            <ul className="flex justify-center">
              {days.map((day, index) => {
                const shortName = day.substring(0, 3);
                return (
                  <li
                    key={day + index}
                    className="day-cell font-normal py-2 text-[1.6rem] px-2 text-sandals-gray"
                  >
                    {shortName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
