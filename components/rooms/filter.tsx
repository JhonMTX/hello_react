import { Room } from '@/utils/fetch';
import {
  Accordion,
  CheckboxGroup,
  CheckboxItem,
  RadioGroup,
  RadioItem,
} from '@sanservices/brands-ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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

function getDisabledValues(
  filterOptions?: string[],
  matchRoomsOptions?: string[]
) {
  const disabledValues: string[] = [];

  filterOptions?.forEach((option: string) => {
    if (
      !matchRoomsOptions?.find((roomOption: string) => roomOption === option)
    ) {
      disabledValues.push(option);
    }
  });

  return disabledValues;
}

function createRadioGroupJSX(
  label: string,
  key: string,
  setRadioState: Dispatch<SetStateAction<string>>,
  options?: Options
) {
  return (
    <Accordion
      key={key}
      trigger={label}
      className="w-full border-b-[0.1rem] py-4 border-solid border-sandals-gray"
      isExpanded
    >
      <RadioGroup
        brand="sandals"
        validationState="valid"
        aria-label="room-levels"
        onChange={(selected) => setRadioState(selected)}
      >
        {options &&
          options.content.map((option, i) => (
            <RadioItem
              key={`${i}-level`}
              value={option}
              aria-label={option}
              label={option}
            />
          ))}
      </RadioGroup>
    </Accordion>
  );
}

function createCheckBoxGroupJSX(
  label: string,
  key: string,
  setCheckBoxState: Dispatch<SetStateAction<string[]>>,
  options?: string[],
  matchRoomsOptions?: string[]
) {
  const disabledValues = getDisabledValues(options, matchRoomsOptions);

  return (
    <Accordion
      key={key}
      trigger={label}
      className="w-full border-b-[0.1rem] py-4 border-solid border-sandals-gray"
      isExpanded
    >
      <CheckboxGroup
        brand="sandals"
        validationState="valid"
        aria-label="room-levels"
        onChange={(checked) => setCheckBoxState(checked)}
      >
        {options &&
          options.map((option, i) => (
            <CheckboxItem
              key={`${i}-level`}
              value={option}
              isDisabled={disabledValues.includes(option)}
              aria-label={option}
              label={option}
            />
          ))}
      </CheckboxGroup>
    </Accordion>
  );
}

// this method is exclusive for the room levels options (old OBE business rules for the filter)
function createCheckBoxGroupForLevels(
  label: string,
  key: string,
  selectedOptions: string[],
  setCheckBoxState: Dispatch<SetStateAction<string[]>>,
  useDisabledLevels: boolean,
  options?: string[],
  matchRoomsOptions?: string[]
) {
  const disabledValues = useDisabledLevels
    ? getDisabledValues(options, matchRoomsOptions)
    : [];
  const selectedValues: string[] = [];

  selectedOptions.forEach((option: string) => {
    if (disabledValues.length > 0) {
      if (!disabledValues.find((disabled: string) => option === disabled)) {
        selectedValues.push(option);
      }
    } else {
      selectedValues.push(option);
    }
  });

  return (
    <Accordion
      key={key}
      trigger={label}
      className="w-full border-b-[0.1rem] py-4 border-solid border-sandals-gray"
      isExpanded
    >
      <CheckboxGroup
        brand="sandals"
        validationState="valid"
        aria-label="room-levels"
        onChange={(checked) => setCheckBoxState(checked)}
        value={selectedValues}
      >
        {options &&
          options.map((option, i) => (
            <CheckboxItem
              key={`${i}-level`}
              value={option}
              isDisabled={disabledValues.includes(option)}
              aria-label={option}
              label={option}
            />
          ))}
      </CheckboxGroup>
    </Accordion>
  );
}

function hasTheseAmenities(room: Room, selectedAmenities: string[]) {
  let count = 0;

  room.amenities.forEach((amenity) => {
    selectedAmenities.forEach((amenityName) => {
      if (amenity.amenityName === amenityName) {
        count++;
      }
    });
  });

  return count === selectedAmenities.length;
}

function hasRoomViews(room: Room, selectedRoomViews: string[]) {
  let count = 0;

  room.categoryView.forEach((categoryView) => {
    selectedRoomViews.forEach((viewName) => {
      if (categoryView === viewName) {
        count++;
      }
    });
  });

  return count === selectedRoomViews.length;
}

function searchLevel(room: Room, level: string) {
  switch (level) {
    case 'Butler Elite':
      return room.roomClass === 'BUTLER';

    case 'Club Sandals':
      return room.roomClass === 'CONCIERGE';

    case 'Love Nest':
      return room.loveNest;

    case 'Sandals Luxury':
      return room.roomClass === 'LUXURY';

    default:
      return false;
  }
}

function hasRoomLevel(room: Room, selectedLevel: string | string[]) {
  if (Array.isArray(selectedLevel)) {
    const levelFound = selectedLevel.some((level) => {
      return searchLevel(room, level);
    });
    return levelFound;
  }

  return searchLevel(room, selectedLevel);
}

function sortByAvailability(rooms: Room[]) {} // pending for BE changes.

function filterRoomByOptions(
  level: string | string[],
  features: string[],
  roomTypes: string[],
  roomViews: string[],
  rooms: Room[]
) {
  const filteredRooms: Room[] = [];
  rooms.forEach((room) => {
    let hasFeature = true;
    let hasTypes = true;
    let hasViews = true;
    let hasLevel = true;
    // const hasLevel = hasRoomLevel(room, level); // uncomment this line if they accept the new designs

    if (level.length > 0) {
      hasLevel = hasRoomLevel(room, level);
    }

    if (features.length > 0) {
      hasFeature = hasTheseAmenities(room, features);
    }

    if (roomTypes.length > 0) {
      hasTypes = hasTheseAmenities(room, roomTypes);
    }

    if (roomViews.length > 0) {
      hasViews = hasRoomViews(room, roomViews);
    }

    if (hasLevel && hasFeature && hasTypes && hasViews) {
      filteredRooms.push(room);
    }
  });

  return filteredRooms;
}

function getNotMatchedRooms(rooms: Room[], matchRooms: Room[]) {
  const notMatchedRooms: Room[] = [];

  rooms.forEach((room) => {
    if (!matchRooms.find((matchRoom) => matchRoom === room)) {
      notMatchedRooms.push(room);
    }
  });

  return notMatchedRooms;
}

export function Filter({
  filterOptions,
  matchFilterOptions,
  rooms,
  setRoomMatch,
  setRoomNotMatch,
}: {
  filterOptions: OptionsGroup;
  matchFilterOptions: OptionsGroup;
  rooms: Room[];
  setRoomMatch: Dispatch<SetStateAction<Room[]>>;
  setRoomNotMatch: Dispatch<SetStateAction<Room[]>>;
}) {
  // const [level, setLevel] = useState<string>(""); // uncomment this line if they accept the new designs
  const [level, setLevel] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [roomTypes, setTypes] = useState<string[]>([]);
  const [roomViews, setViews] = useState<string[]>([]);

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
    rooms,
    setRoomMatch,
    setRoomNotMatch,
  ]);

  const useDisabledLevels =
    features.length > 0 || roomTypes.length > 0 || roomViews.length > 0;

  return (
    <>
      {/**
       * new designs filter levels
       * uncomment this if they accept the new designs.
       */}
      {/* {createRadioGroupJSX(
        filterOptions.levels?.content,
        "Room Levels",
        "room-levels",
        setLevel
      )} */}

      {createCheckBoxGroupForLevels(
        'Room Levels',
        'room-levels',
        level,
        setLevel,
        useDisabledLevels,
        filterOptions.levels?.content,
        matchFilterOptions.levels?.content
      )}

      {createCheckBoxGroupJSX(
        'Room Views',
        'room-views',
        setViews,
        filterOptions.roomViews?.content,
        matchFilterOptions.roomViews?.content
      )}

      {createCheckBoxGroupJSX(
        'Room Types',
        'room-types',
        setTypes,
        filterOptions.roomTypes?.content,
        matchFilterOptions.roomTypes?.content
      )}

      {createCheckBoxGroupJSX(
        'Room Features',
        'room-features',
        setFeatures,
        filterOptions.features?.content,
        matchFilterOptions.features?.content
      )}
    </>
  );
}
