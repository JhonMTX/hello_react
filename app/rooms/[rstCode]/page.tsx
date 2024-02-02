// import RoomsContainer from "@/components/rooms/rooms-container";
import { fetchResorts, fetchRoomDetailsList } from "@/utils/fetch";

export default async function Rooms({ params }: { params: { rstCode: string } }) {
  const { rstCode } = params;
  // const rooms = await fetchRoomDetailsList(rstCode);

  return (
    <main className="flex min-h-screen justify-center py-24 px-0 mx-auto max-w-[124rem]">
      <h1 className="text-5xl">Coming soon!</h1>
      {/* {rooms.length && 
        <RoomsContainer rooms={rooms} />
      }* Add a 404 or oops message when the fetchRoomDetailsList doesn't return any data */}
    </main>
  );
}

export async function generateStaticParams() {
  const resorts = await fetchResorts();
  const filteredResorts = resorts.filter(
    (resort: { resortType: string }) => resort.resortType === "B" || resort.resortType === "S",
  );

  return filteredResorts.map((resort) => ({
    rstCode: resort.rstCode,
  }));
}
