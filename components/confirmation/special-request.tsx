import { useState } from "react";
import { Icon } from "@sanservices/brands-ui";
import { CDN_ICONS_URL } from "@/utils/constants";
import CollapsibleCheckBox from "./collapsible-checkbox";
import Dropdown from "../global/dropdown";
import Input from "../global/input";
import SpecialMessage from "./special-message";
import SubmitDetails from "./submit-details";
import DateMMDDYYYY, { MMDDYYYY } from "../global/dates/date-mmddyyyy";
import DateMMDD, { MMDD } from "../global/dates/date-mmdd";

export default function SpecialRequest() {
  /* *********************BEGIN - TEMPORAL DATA************************** */
  const primaryGuest = "Mr. Test Prueba (21)";
  const secondaryGuest = "Mrs. Testa Prueba (21)";
  const bookingNumber = 253121;
  /* *********************END - TEMPORAL DATA************************** */
  const [anniversaryDate, setAnniversary] = useState<MMDDYYYY>({
    month: "MM",
    day: "DD",
    year: "YYYY",
  });
  const [birthday, setBirthday] = useState<MMDD>({ month: "MM", day: "DD" });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [specialRequest, setSpecialRequest] = useState(false);
  const [roomCloser, setRoomCloser] = useState("");
  const [guest, setGuest] = useState("");
  const [message, setMessage] = useState("");
  const arrowType = "arrow-right.svg";
  const guests = [primaryGuest, secondaryGuest];

  /** NOTE: after submit functionality is missing please implement this feature in the story book implementation */

  return (
    <section className="special-request max-w-[61rem] mx-auto mt-36 px-6 sm:px-0 pb-12 flex items-center flex-col">
      <div className="header max-w-[38rem] text-center">
        <h3 className="text-5xl mb-2">Special Requests?</h3>
        <p className="text-[1.4rem] sm:text-[1.6rem] sm:leading-10 mb-2">
          Click below to let us know your requests so we can accommodate you accordingly during your
          stay.
        </p>
      </div>
      <div className="request-form w-full flex flex-col transition-all transform delay-75">
        <button
          className="open-form text-2xl sm:text-[2rem] flex items-center justify-center text-blue font-[500] mb-[3.4rem]"
          onClick={() => setSpecialRequest(!specialRequest)}
        >
          <Icon
            src={CDN_ICONS_URL + arrowType}
            className={`bg-blue w-5 h-5 sm:w-8 sm:h-8 mr-2 ${specialRequest ? "rotate-90" : ""}`}
          />
          Add Comments/Questions/Requests
        </button>
        {specialRequest && (
          <div className="collapsible-form">
            <CollapsibleCheckBox
              name="anniversary"
              label="Wedding Anniversary"
              options={selectedOptions}
              onChange={setSelectedOptions}
            >
              <div className="container pt-6">
                <DateMMDDYYYY
                  date={anniversaryDate}
                  start={1970}
                  end={new Date().getFullYear() + 2}
                  required={false}
                  onChange={setAnniversary}
                />
              </div>
            </CollapsibleCheckBox>
            <CollapsibleCheckBox
              name="food-restriction"
              label="Food Allergies/Dietary Restrictions"
              options={selectedOptions}
              onChange={setSelectedOptions}
            />
            <CollapsibleCheckBox
              name="early-checkin"
              label="Early Check-in Request"
              options={selectedOptions}
              onChange={setSelectedOptions}
            />
            <CollapsibleCheckBox
              name="celebrating"
              label="Celebrating Birthday"
              options={selectedOptions}
              onChange={setSelectedOptions}
            >
              <div className="guest-dropdown pt-4 px-6">
                <Dropdown
                  name="guests"
                  options={guests}
                  value={guest}
                  placeholder="Select a Guest"
                  onChangeDropdown={setGuest}
                />
                <p className="description text-[1.6rem] mt-4 mb-2">Please Provide a Date:</p>
              </div>
              <DateMMDD date={birthday} required={false} onChange={setBirthday} />
            </CollapsibleCheckBox>
            <CollapsibleCheckBox
              name="roll-away"
              label="Request Roll Away"
              options={selectedOptions}
              onChange={setSelectedOptions}
            />
            <CollapsibleCheckBox
              name="disabled-guest"
              label="Disabled Guest"
              options={selectedOptions}
              onChange={setSelectedOptions}
            />
            <CollapsibleCheckBox
              name="honeymoon"
              label="Honeymoon Vacation"
              options={selectedOptions}
              onChange={setSelectedOptions}
            />
            <CollapsibleCheckBox
              name="closer-room"
              label="Request Room Closer To"
              options={selectedOptions}
              onChange={setSelectedOptions}
            >
              <div className="container px-6">
                <p className="description text-[1.6rem] mb-2">Enter Booking Number</p>
                <Input name="room-closer" value={roomCloser} onChangeInput={setRoomCloser} />
              </div>
            </CollapsibleCheckBox>
            <div className="message-or-request border-t border-light-siver pt-12 flex items-center flex-col">
              <SpecialMessage onChange={setMessage} />
            </div>
            <SubmitDetails
              selectedOptions={selectedOptions}
              anniversaryDate={anniversaryDate}
              roomCloser={roomCloser}
              message={message}
              bookingNumber={bookingNumber}
            />
          </div>
        )}
      </div>
    </section>
  );
}
