import { useState } from "react";
import Dropdown from "../global/dropdown";
import Input from "../global/input";
import Modal from "../global/modal";
import { CheckboxProps, DropdownProps, InputProps } from "./vacation.type";

type Popup = {
  title: string;
  content: {
    title: string;
    description: string;
  }[];
};

type Values = {
  name: string;
  email: string;
  country: string;
};

type Props = {
  brand: string;
  placeholders: Values;
  countries: string[];
  popup?: Popup;
  values: Partial<Values>;
  onChange?: (key: string, value: string) => void;
  checkboxProps?: CheckboxProps;
  firstNameProps?: InputProps;
  emailProps?: InputProps;
  countryProps?: DropdownProps;
};

export default function SubscribeTo({
  brand,
  countries,
  placeholders,
  popup,
  values,
  onChange,
  checkboxProps,
  countryProps,
  emailProps,
  firstNameProps,
}: Props) {
  const [showContent, setShowContent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const isSandals = brand.toLowerCase() === "sandals";
  const checkboxBg = isSandals ? "bg-dark-blue" : "bg-blue";
  const checkedClass = showContent ? checkboxBg : "bg-white";
  const title = popup ? popup.title : "";
  const content = popup ? popup.content : [];
  const mailto = isSandals ? "info@sandals.com" : "info@beaches.com";
  const validCountry = countries.find((country) => country === values.country);

  const Reset = () => {
    if (!showContent) {
      Object.keys(values).forEach((key) => {
        onChange && onChange(key, "");
      });
    }
  };

  return (
    <div className={`collapsible-subscribe-to w-full bg-white rounded-lg relative`}>
      <div
        className="content flex items-center px-8 py-6"
        onClick={() => {
          setShowContent(!showContent);
          checkboxProps?.onChangeCheck && checkboxProps?.onChangeCheck(!showContent);
          Reset();
        }}
      >
        <input
          className={`relative p-3 sm:p-0 w-9 h-9 appearance-none border border-platinum rounded-md ${checkedClass}`}
          type="checkbox"
          defaultChecked={showContent}
        />
        <label className="text-[1.4rem] sm:text-[1.6rem] font-[400] ml-4 text-onyx">
          I would like to subscribe to <span className="capitalize">{brand}</span> email list.{" "}
          <span
            className={`${
              isSandals ? "text-dark-blue" : "text-blue"
            } hover:text-spiro-disco text-[1.4rem] sm:text-[1.6rem] font-[500]`}
            onClick={() => setShowPopup(!showPopup)}
          >
            Privacy Policy
          </span>
        </label>
        {showContent && (
          <svg
            className="w-4 h-4 my-3 mx-2 absolute fill-white"
            version="1.1"
            viewBox="0 0 1169 1024"
          >
            <g id="icomoon-ignore" />
            <path d="M0 468.71s125.651 441.481 296.755 545.221 396.453-624.001 862.398-856.654c0 0 82.964-294.415-222.584-78-237.932 169.58-447.008 348.573-639.108 544.287l-0.706 0.721c-43.042 54.104-173.089-245.346-296.755-155.575z" />
          </svg>
        )}
      </div>

      {showContent && (
        <div className="subscribe-form py-[4.2rem] px-6 bg-light-blue flex justify-center">
          <div className="content w-full sm:w-10/12 flex-wrap flex">
            <div className="px-6 basis-full sm:basis-6/12">
              <Input
                type="text"
                placeholder={placeholders.name}
                name={firstNameProps?.name}
                onChange={firstNameProps?.onChange}
                elementRef={firstNameProps?.elementRef}
                error={firstNameProps?.error}
              />
            </div>
            <div className="px-6 basis-full sm:basis-6/12">
              <Input
                type="email"
                placeholder={placeholders.email}
                name={emailProps?.name}
                onChange={emailProps?.onChange}
                elementRef={emailProps?.elementRef}
                error={emailProps?.error}
              />
            </div>
            <div className="px-6 mt-4 basis-full sm:basis-6/12">
              <Dropdown
                options={countries}
                placeholder={placeholders.country}
                value={values.country}
                onChange={countryProps?.onChange}
                name={countryProps?.name}
                elementRef={countryProps?.elementRef}
                error={countryProps?.error}
              />
            </div>
            <div
              className={`${
                validCountry ? "" : "hidden"
              } text-[1.2rem] text-onyx px-6 pt-7 basis-full`}
            >
              <p>
                I want to receive promotional emails about{" "}
                <span className="capitalize">{brand}</span> Resorts from Unique Travel Corp., the
                Worldwide Representative of <span className="capitalize">{brand}</span> Resorts,
                P.O. Box SS-19020, Nassau, Bahamas. You can contact us at{" "}
                <a className="text-blue hover:text-spiro-disco" href={`mailto:${mailto}`}>
                  {mailto}
                </a>
                . You may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <Modal
          isOpen={showPopup}
          onChange={setShowPopup}
          className="bg-white flex flex-col z-10 w-full max-w-[68.8rem] top-80 relative mx-auto rounded-lg pt-8 pl-20 pr-6 pb-16"
        >
          <div className="information pr-14">
            <h3 className="text-[2.2rem] text-blue font-semibold">{title}</h3>
            <div className="statements">
              {content.map((statement, index) => {
                return (
                  <div key={`statement-${index}`} className="statement">
                    <h4 className="title text-[2rem] font-semibold pt-[1.2rem]">
                      {statement.title}
                    </h4>
                    <p className="description text-[1.6rem] pt-[1.6rem]">{statement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
