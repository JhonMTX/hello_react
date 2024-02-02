import { Room } from '@/utils/fetch';
import { Button, Image, ReadMore, Accordion } from '@sanservices/brands-ui';

const concatenateFeatures = (
  resortName: string,
  categoryCode: string,
  categoryView?: string[]
): string => {
  let featuresArr = [];
  if (resortName) featuresArr.push(`Resort: ${resortName}`);
  if (categoryCode) featuresArr.push(`Category Code: ${categoryCode}`);
  if (categoryView) featuresArr.push(`Room View: ${categoryView?.join(', ')}`);
  return featuresArr.join('\u00A0\u00A0I\u00A0\u00A0'); // add whitespaces
};

const RoomCard = ({ room }: { room: Room }) => {

  return (
    <div className="flex flex-col bg-[#fff] sm:max-w-[69rem] xxl:max-w-[84.1rem]">
      <div className="flex flex-col border border-[#707070]">
        <Image
          src={`https:${room?.fullImageURL}`}
          alt="placeholder"
          className="max-h-[20.34rem] sm:max-h-[34.1rem] w-full"
        />
        <div className="w-full flex-col items-center">
          <div className="flex flex-col justify-between gap-y-[3.24] m-[2rem] leading-normal">
            <h2 className="text-[1.6rem] font-semibold leading-[2.2rem]">
              {room.name}
            </h2>
            <h5 className="text-[1.2rem] leading-[1.8rem]  mt-[.6rem] mb-[2.2rem] text-sandals-gray">
              {concatenateFeatures(
                room?.resortName,
                room?.categoryCode,
                room?.categoryView
              )}
            </h5>
            {/* <ReadMore
              content={room.description}
              collapseTrigger="Read Less"
              maxChar={100}
              className="text-[1.2rem]! leading-8! font-semibold text-black ml-2 focus:outline-none"
            /> */}
            <span className="text-sandals-gray text-[1.2rem] leading-8">
              {room.description}
            </span>
            {/* Accordion should have an option to change "+" icon to an arrow */}
            <Accordion
              trigger="View current specials"
              className="my-[2rem] max-w-[29.5rem] sm:max-w-none"
            >
              <div className="flex gap-2 flex-col sm:grid sm:grid-cols-2 ">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity.amenityId}
                    className=" bg-sandals-light-gray pl-[1.73rem] text-[1.2rem] leading-[3.3rem]"
                  >
                    {amenity?.amenityName}
                  </span>
                ))}
              </div>
            </Accordion>
            {/* Room price, date and amenities icons logic goes here */}
            {/* <div className="grid grid-cols-2 gap-x-[9.71rem]">
              <div> {room?.amenities.length > 0  && room.amenities.map((amenity)=> (feed icon name here)) }</div>
              <div className="place-self-end">
                <span className="font-semibold text-[1.2rem] leading-[1.8rem]">
                {Put room.date?? here}
                  Feb 13/2021 - Feb 21/2021
                </span>
                {Put Price component here}
                <span className="font-semibold text-[1.8rem] leading-[2.9rem]">
                  PP/PN
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Button
        className="sm:mt-[1.5rem] sm:max-w-[31.9rem] sm:ml-auto sm:w-full"
        type="button"
        content="View room details"
      />
    </div>
  );
};

export default RoomCard;
