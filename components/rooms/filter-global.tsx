import { Room } from "@/utils/fetch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Icons from "@/components/global/icons";
import {CheckBoxGroup} from "./room-complement/filter/check-box-group";
import {CheckBoxGroupLevels} from "./room-complement/filter/check-box-group-levels";
import {ItemSelect} from  "./room-complement/filter/items-select";
import {filterRoomByOptions, getNotMatchedRooms, Getdisable } from "./room-complement/filter/functions";

type Options = {
  type: string;
  content: string[];
};

type OptionsGroup = {
  features?: Options;
  roomTypes?: Options;
  roomViews?: Options;
  levels?: Options;
};

export default function FilterGlobal({
  brand,
  filterOptions,
  matchFilterOptions,
  rooms,
  setRoomMatch,
  setRoomNotMatch,
}: {
  brand: string;
  filterOptions: OptionsGroup;
  matchFilterOptions?: OptionsGroup;
  rooms: Room[];
  setRoomMatch: Dispatch<SetStateAction<Room[]>>;
  setRoomNotMatch: Dispatch<SetStateAction<Room[]>>;
}) {
  const [matchOptions, setMatchOptions] = useState<OptionsGroup>();
  const [level, setLevel] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [roomTypes, setTypes] = useState<string[]>([]);
  const [roomViews, setViews] = useState<string[]>([]);
  const useDisabledLevels =
    features.length > 0 || roomTypes.length > 0 || roomViews.length > 0;
  const filterActive =
    level.length > 0 ||
    features.length > 0 ||
    roomTypes.length > 0 ||
    roomViews.length > 0;
  const [textNotification, setTextNotification] = useState("");
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    const match = filterRoomByOptions(
      level,
      features,
      roomTypes,
      roomViews,
      rooms
    );
    const notMatch = getNotMatchedRooms(rooms, match);
    setRoomMatch(match);
    setRoomNotMatch(notMatch);
  }, [
    level,
    features,
    roomTypes,
    roomViews,
    rooms
  ]);

  useEffect(() => {
    setViews([]);
    setTypes([]);
    setFeatures([]);
  }, [
    level,
  ]);

  useEffect(() => {
    setMatchOptions(matchFilterOptions);
  }, [
    matchFilterOptions
  ]);

  const deleteFilter = (name: string) => {
    setLevel((prevLevel) => {
      const indexToRemove = prevLevel.indexOf(name);
      if (indexToRemove !== -1) {
        const updatedLevel = [...prevLevel];
        updatedLevel.splice(indexToRemove, 1);
        return updatedLevel;
      }
      return prevLevel;
    });

    setFeatures((prevFeatures) => {
      const indexToRemove = prevFeatures.indexOf(name);
      if (indexToRemove !== -1) {
        const updatedFeatures = [...prevFeatures];
        updatedFeatures.splice(indexToRemove, 1);
        return updatedFeatures;
      }
      return prevFeatures;
    });

    setTypes((prevRoomTypes) => {
      const indexToRemove = prevRoomTypes.indexOf(name);
      if (indexToRemove !== -1) {
        const updatedRoomTypes = [...prevRoomTypes];
        updatedRoomTypes.splice(indexToRemove, 1);
        return updatedRoomTypes;
      }
      return prevRoomTypes;
    });

    setViews((prevRoomViews) => {
      const indexToRemove = prevRoomViews.indexOf(name);
      if (indexToRemove !== -1) {
        const updatedRoomViews = [...prevRoomViews];
        updatedRoomViews.splice(indexToRemove, 1);
        return updatedRoomViews;
      }
      return prevRoomViews;
    });
  };

  const setresetGlobal = () => {
    setViews([]);
    setTypes([]);
    setFeatures([]);
    setLevel([]);
  };

  return (
    <div
      className={`basis-full w-full md:w-[116.4rem] max-w-[116.4rem] mx-auto md:px-6 md:block bg-anti-flash-white`}
    >
      <div className="md:flex flex-row flex-wrap md:justify-center mx-[-1.5rem] capitalize hidden">
        {filterActive && (
          <div className="basis-full md:basis-full  px-6 hidden md:flex w-[29] shrink-0 grow-0 box-border">
            <div
              className={`text-6 text-right mb-[0.5rem] h-full w-full flex items-center`}
            >
              <button
                className="cursor-pointer ml-auto"
                onClick={() => setresetGlobal()}
              >
                <Icons
                  name="reset"
                  className={` mb-[1.6]  w-[1.9rem] h-[1.8rem] fill-blue float-right `}
                />
              </button>
            </div>
          </div>
        )}
        <div className="basis-full md:basis-full pb-[2rem] flex px-6">
          <div
            className={`text-[2.4rem] leading-[1] text-right ${
              textNotification != "" ? "block" : "hidden"
            }`}
          >
            {textNotification}
            <button
              className="self-end"
              onClick={() => setTextNotification("")}
            >
              <Icons
                name="plusCicle"
                className={`inline ml-[0.2rem] relative top-[-0.25rem] w-7 h-7 ]mr-2 `}
              />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          {CheckBoxGroupLevels(
            brand,
            "Room Levels",
            "room-levels",
            level,
            setLevel,
            useDisabledLevels,
            filterOptions.levels?.content,
            matchOptions?.levels?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Views",
            "room-views",
            roomViews,
            setViews,
            filterOptions.roomViews?.content,
            matchOptions?.roomViews?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Types",
            "room-types",
            roomTypes,
            setTypes,
            filterOptions.roomTypes?.content,
            matchOptions?.roomTypes?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Features",
            "room-features",
            features,
            setFeatures,
            filterOptions.features?.content,
            matchOptions?.features?.content
          )}
        </div>
      </div>

      <div className="basis-full max-w-full grow-0 shrink-0 px-6 flex">
        <div
          onClick={() => setshowModal(true)}
          className="font-semibold text-[1.8rem] md:hidden  flex justify-center items-center bg-blue mx-auto my-0 text-white p-4 rounded-[0.5rem] max-w-full sm:basis-5/12 basis-full h-[4.6rem]"
        >
          <Icons
            name="filter"
            className={`inline  relative  w-[2.36rem] h-[2.6rem] mr-[1.2rem] fill-white `}
          />
          Filter Rooms By...
        </div>
      </div>

      <div className="flex justify-center md:hidden">
        <div className="mx-0 my-8 md:mb-16 flex overflow-x-scroll">
          {level.map((name, i) => (
           ItemSelect(
            i,
            name,
            deleteFilter
           )
          ))}
          {features.map((name, i) => (
            ItemSelect(
              i,
              name,
              deleteFilter
             )
          ))}
          {roomTypes.map((name, i) => (
            ItemSelect(
              i,
              name,
              deleteFilter
             )
          ))}
          {roomViews.map((name, i) => (
            ItemSelect(
              i,
              name,
              deleteFilter
             )
          ))}
        </div>
      </div>

      <div
        className={` ${
          showModal ? "block" : "hidden"
        } bg-anti-flash-white fixed top-0 right-0 bottom-0 left-4 p-6 z-[9999] mt-0 overflow-y-scroll mx-[-1.5rem] `}
      >
        <div className="flex pb-8 flex-row-reverse px-6 justify-between max-w-full w-full">
          <button
            className="self-end pt-[0.4rem] pb-[1.4rem]"
            onClick={() => setshowModal(false)}
          >
            <Icons
              name="lightCross"
              className={`inline  relative mb-[1.8]  w-[2.36rem] h-[1.8rem] fill-black `}
            />
          </button>

          <button
            className={` ${
              filterActive ? "visible" : "invisible"
            } self-start pt-[0.4rem] pb-[1.4rem]`}
            onClick={() => setresetGlobal()}
          >
            <Icons
              name="reset"
              className={`inline  relative mb-[1.6]  w-[1.9rem] h-[1.8rem] fill-blue `}
            />
          </button>
        </div>

        <div className="flex w-full justify-center flex-wrap">
          {CheckBoxGroupLevels(
            brand,
            "Room Levels",
            "room-levels2",
            level,
            setLevel,
            useDisabledLevels,
            filterOptions.levels?.content,
            matchOptions?.levels?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Views",
            "room-views2",
            roomViews,
            setViews,
            filterOptions.roomViews?.content,
            matchOptions?.roomViews?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Types",
            "room-types2",
            roomTypes,
            setTypes,
            filterOptions.roomTypes?.content,
            matchOptions?.roomTypes?.content
          )}

          {CheckBoxGroup(
            brand,
            "Room Features",
            "room-features2",
            features,
            setFeatures,
            filterOptions.features?.content,
            matchOptions?.features?.content
          )}
        </div>

        <div className="basis-full content-center text-center items-center max-w-full px-6 flex">
          <div
            onClick={() => setshowModal(false)}
            className="font-semibold text-[1.8rem] sm:text-8 mt-8 m-0 flex justify-center items-center bg-blue mx-auto sm:mx-auto my-0 text-white p-4 sm:py-4 sm:px-6 uppercase w-full rounded-[0.5rem] max-w-full sm:basis-6/12 basis-full leading-8"
          >
            Apply Filters
          </div>
        </div>
      </div>
    </div>
  );
}