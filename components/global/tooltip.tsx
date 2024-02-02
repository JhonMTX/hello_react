import { useEffect } from "react";
import OutsideClick from "../wrapper";


type Props = {
  children: React.ReactNode;
  className: string;
  onChange: (value: boolean) => void;
};

export default function Tooltip({
  children,
  className,
  onChange
}: Props) {

  const handleMouseLeave = () => {
   onChange(false);
   };

  return (
      <div
         onMouseLeave={handleMouseLeave}
         className={`absolute  top-[100%] left-[50%] z-1000 translate-x-[-50%] ${className}` }>
        {children}
      </div>
  );
}
