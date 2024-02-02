"use client";

import { Filter } from "./filter";
import { useState } from "react";
import RoomCard from "./room-card";
import { Room } from "@/utils/fetch";
import createFilterOptions from "@/utils/create-filter-options";

export default function RoomsContainer({ rooms }: { rooms: Room[] }) {
  const [roomsMatch, setRoomMatch] = useState(rooms);
  const [roomsNotMatch, setRoomNotMatch] = useState(rooms);
  const baseFilterOptions = createFilterOptions(rooms);
  const matchFilterOptions = createFilterOptions(roomsMatch);

  return (
    <>
      <div className="rooms-filter mr-12 w-full max-w-[25.8rem]">
        <Filter
          filterOptions={baseFilterOptions}
          matchFilterOptions={matchFilterOptions}
          rooms={rooms}
          setRoomMatch={setRoomMatch}
          setRoomNotMatch={setRoomNotMatch}
        />
      </div>

      <div className="rooms-cards">
        <h3 className="matched-rooms">Matched Rooms: {roomsMatch.length}</h3>
        {roomsMatch.map((room) => (
          <RoomCard room={room} key={room.categoryId} />
        ))}

        {roomsNotMatch.length > 0 && (
          <h3 className="not-matched-rooms">
            Not Matched Rooms: {roomsNotMatch.length}
          </h3>
        )}
        {roomsNotMatch.map((room) => (
          <RoomCard room={room} key={room.categoryId} />
        ))}
      </div>
    </>
  );
}
