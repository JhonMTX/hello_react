import { CDN_ICONS_URL } from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";

interface RoomDescriptionProps {
  roomDescription: string;
  showRoomDescription: boolean;
  toggleRoomDescription: () => void;
  roomDescriptionTitle?: string;
}

export const RoomsDescription = ({
  roomDescription,
  showRoomDescription,
  toggleRoomDescription,
  roomDescriptionTitle,
}: RoomDescriptionProps) => {
  return (
    <div className="flex flex-row py-8 border-t-2 border-anti-flash-white">
      <div className="grid grid-cols-1">
        <div className="flex flex-row">
          <div className="pr-4">
            <div className="mt-2">
              <button onClick={toggleRoomDescription}>
                <Icon
                  className="w-5 h-5 bg-black cursor-pointer"
                  src={CDN_ICONS_URL + "user.svg"}
                />
              </button>
            </div>
          </div>
          <div className="uppercase text-[1.6rem] font-semibold">
            <h3>{roomDescriptionTitle}</h3>
          </div>
        </div>
        {showRoomDescription && roomDescription && (
          <div className="flex flex-row">
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-6 sm:px-6 lg:grid lg:grid-cols-8 lg:min-w-[106rem] md:min-w-[95rem] sm:min-w-[72rem]">
              <div className="sm:col-span-4 lg:col-span-2">
                <li className="text-[1.3rem] leading-10 font-semibold list-none ">
                  <div className="flex pr-6 pl-6">
                    <span className="mr-1.5 text-[2.5rem] ">•</span>
                    <div className="text-onyx">{roomDescription}</div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
