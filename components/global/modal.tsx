import { useEffect } from "react";
import OutsideClick from "../wrapper";
import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

type Props = {
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  onChange: (value: boolean) => void;
  classNameClose?:string;
};

export default function Modal({
  children,
  className,
  isOpen,
  onChange,
  classNameClose
}: Props) {
  
  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    onChange(false);
  }

  const ref = OutsideClick(() => {
    closeModal();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="modal-bg bg-onyx bg-opacity-50 fixed top-0 left-0 w-full h-full overflow-x-hidden z-50 overflow-y-auto">
      <div className={`content ${className}`} ref={ref}>
        <button className={`self-end ${classNameClose}`} onClick={() => closeModal()}>
          <Icon
            className="bg-header-black w-7 h-7 mr-2 font-bold"
            src={CDN_ICONS_URL + "close.svg"}
          />
        </button>
        {children}
      </div>
    </div>
  );
}
