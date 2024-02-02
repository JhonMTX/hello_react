import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";

type Props = {
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  onChange: (value: boolean) => void;
};

const GuestsModal = ({
    children,
    className,
    isOpen,
    onChange,
  }: Props) => {

  return (
    <div className="">
      <div className={`content ${className}`}>
        <button className="self-end" onClick={() => onChange(false)}>
          <Icon
            className="bg-header-black w-7 h-7 mr-2 font-bold"
            src={CDN_ICONS_URL + "close.svg"}
          />
        </button>
        {children}
      </div>
    </div>
  )
}

export default GuestsModal