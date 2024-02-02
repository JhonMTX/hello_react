import { Room } from "@/utils/fetch";
import { capitalizeString } from "@/utils/utils";

export function getDisabledValues(filterOptions?: string[], matchRoomsOptions?: string[]) {
  const disabledValues: string[] = [];

  filterOptions?.forEach((option: string) => {
    if (!matchRoomsOptions?.find((roomOption: string) => roomOption === option)) {
      disabledValues.push(option);
    }
  });

  return disabledValues;
}

export function hasTheseAmenities(room: Room, selectedAmenities: string[]) {
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

export function hasRoomViews(room: Room, selectedRoomViews: string[]) {
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

export function searchLevel(room: Room, level: string) {
  switch (level) {
    case "Butler Level":
      return room.roomClass === "BUTLER";

    case "Concierge Level":
      return room.roomClass === "CONCIERGE";

    case "Love Nest":
      return room.loveNest;

    case "Luxury Level":
      return room.roomClass === "LUXURY";

    default:
      return false;
  }
}

export function hasRoomLevel(room: Room, selectedLevel: string | string[]) {
  if (Array.isArray(selectedLevel)) {
    const levelFound = selectedLevel.some((level) => {
      return searchLevel(room, level);
    });
    return levelFound;
  }

  return searchLevel(room, selectedLevel);
}

export function Getdisable(rooms: Room[]) {
  var contentfeatures: string[] = [];
  var contentroomTypes: string[] = [];
  var contentlevels: string[] = [];
  var contentroomViews: string[] = [];

  rooms.forEach((value) => {
    if (value.amenities) {
      value.amenities.forEach((value1) => {
        if (value1.amenityType == "Features") {
          if (!contentfeatures.includes(value1.amenityName))
            contentfeatures.push(value1.amenityName);
        }
        if (value1.amenityType == "Room Types") {
          if (!contentroomTypes.includes(value1.amenityName))
            contentroomTypes.push(value1.amenityName);
        }
      });
    }
    if (value.categoryView) {
      value.categoryView.forEach((value1) => {
        if (!contentroomViews.includes(value1)) contentroomViews.push(value1);
      });
    }

    if (value.roomClass) {
      const  namelevel = capitalizeString(value.roomClass) + " Level";
        if (!contentlevels.includes(namelevel)) contentlevels.push(namelevel);
    }
    
  });

  const DatamatchFilterOptions = {
    features: {
      type: "features",
      content: contentfeatures,
    },
    roomTypes: {
      type: "Room Types",
      content: contentroomTypes,
    },
    roomViews: {
      type: "categoryView",
      content: contentroomViews,
    },
    levels: {
      type: "type",
      content: contentlevels,
    },
  };

  return DatamatchFilterOptions;
}

export function filterRoomByOptions(
  level: string | string[],
  features: string[],
  roomTypes: string[],
  roomViews: string[],
  rooms: Room[],
) {
  const filteredRooms: Room[] = [];
  rooms.forEach((room) => {
    let hasFeature = true;
    let hasTypes = true;
    let hasViews = true;
    let hasLevel = true;

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

export function getNotMatchedRooms(rooms: Room[], matchRooms: Room[]) {
  const notMatchedRooms: Room[] = [];

  rooms.forEach((room) => {
    if (!matchRooms.find((matchRoom) => matchRoom === room)) {
      notMatchedRooms.push(room);
    }
  });

  return notMatchedRooms;
}
