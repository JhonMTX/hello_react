import { ContentBlock } from "./confirmation-container";
import SummaryBlock from "./summary-block";

type Props = {
    vacationData: ContentBlock[];
    roomData: ContentBlock[];
    flightData?: ContentBlock[]; // this implementation is missing
    guestData: ContentBlock[];
}

export default function SummaryContainer({vacationData, roomData, flightData, guestData}:Props) {
  return (
    <section className="summary-container mx-auto my-0 max-w-[102.4rem] p-6 sm:p-12">
        <SummaryBlock
          id="vacation"
          label="Travel Information"
          content={vacationData}
        />
        <SummaryBlock id="room" label="Room Selection" content={roomData}>
          <div className="room-slider basis-6/12"></div>
        </SummaryBlock>
        <SummaryBlock
          id="guests"
          label="Guest Information"
          content={guestData}
        >
          <div className="voucher-delivery bg-cultured text-2xl px-8 py-12 flex flex-col items-center text-center">
            <p className="font-semibold uppercase">Voucher Delivery</p>
            <p className="my-[1.6rem]">
              You will receive a email with your resort voucher once your
              booking is paid in full.
            </p>
          </div>
        </SummaryBlock>
      </section>
  )
}
