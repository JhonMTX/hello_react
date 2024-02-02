"use client";

import { Gateway, Resort, ResortGateways, fetchResortGateways } from "@/utils/fetch";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectResort from "../select-resort";
import SelectVacationDates from "../select-vacation-dates";
import { differenceInDays, format } from "date-fns";
import FlightsSelection from "../flights-selection";
import LoginSSG from "../login-ssg";
import SubscribeTo from "../subscribe-to";
import {
  subscribeToPopup,
  vacationFormInitialValues,
  vacationFormSchema,
} from "./vacation-form.constants";
import { VacationFormValues, OpeningDays } from "../vacation.type";

type SelectedGateways = {
  arrivalGateway: string;
  departureGateway: string;
  flightType: "economy" | "business";
};

export function VacationForm({ resorts, gateways }: { resorts: Resort[]; gateways: Gateway[] }) {
  const router = useRouter();
  const [resortGateways, setResortGateways] = useState<ResortGateways[]>([]);

  // TODO: Will be reading from Strapi CMS
  const openingDays: OpeningDays = { SSV: "2024-03-27" };
  const warningMessage = {
    minNights: "Minimum 3-night stay is required to book online. For shorter stays call ",
    maxNights: "Maximum 21-night stay when you book online. For longer stays call ",
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, submitCount },
    watch,
    setValue,
    register,
    clearErrors,
  } = useForm<VacationFormValues>({
    resolver: zodResolver(vacationFormSchema),
    criteriaMode: "all",
    defaultValues: vacationFormInitialValues,
  });

  const resort = watch("resort");
  const selectedDays = watch("selectedDays");
  const selectedGateways = {
    departureGateway: watch("departureGateway") || "",
    flightType: watch("flightType") || "economy",
    arrivalGateway: watch("arrivalGateway") || "",
  };
  const subscribeTo = watch("subscribeTo");
  const login = watch("login");
  const setSelectedGateways = ({
    arrivalGateway,
    departureGateway,
    flightType,
  }: SelectedGateways) => {
    setValue("departureGateway", departureGateway);
    setValue("flightType", flightType);
    setValue("arrivalGateway", arrivalGateway);
  };

  const inputUsername = {
    type: "text",
    name: "username",
    require: true,
    placeholder: "Username",
    value: login.username,
  };

  const inputEmail = {
    type: "text",
    name: "email",
    require: true,
    placeholder: "Email Address",
    value: "",
  };

  const popupFU = {
    label: "Forgot username",
    text: "Enter the email address registered in your account. We will send you an email with instructions.",
    image: "ssg",
    inputs: [inputEmail],
  };

  const popupFP = {
    label: "Forgot password",
    text: "Enter the email address registered in your account. We will send you an email with instructions.",
    image: "ssg",
    inputs: [inputUsername, inputEmail],
  };

  const onSubmit = async (data: VacationFormValues) => {
    // const response = await saveVacationDetails({
    //   rstCode: data.resort,
    //   checkIn: formatDate(data.selectedDays?.from),
    //   checkOut: formatDate(data.selectedDays?.to),
    //   airIncluded: data.includeFlights === "yes" ? true : false,
    //   departureGateway: data.departureGateway,
    //   seatType: data.flightType,
    //   adults: 2,
    //   children: 0,
    //   length: 8,
    // });
    // fetch("/api/", {
    //   method: "POST",
    //   body: JSON.stringify({ key: response.key }),
    // });
    router.push(`rooms/${data.resort}/`);
  };

  const handleOnClickSubmit = () => {
    if (!isValid) {
      window.scrollTo(0, 0);
    }
  };

  const onChangeResort = async (resort: string) => {
    if (!resort) return;
    const opening = resort && Object.keys(openingDays).length > 0 ? openingDays[resort] : "";
    if (opening) {
      const openingDate = new Date(opening);
      const validOpening = differenceInDays(selectedDays.from, openingDate) > 0;
      if (!validOpening) {
        setValue("selectedDays", { from: "", to: "" });
      }
    }
    const responseResortGateways = await fetchResortGateways(resort);
    setResortGateways(responseResortGateways);
  };

  const onChangeDates = (value: { from: Date; to: Date }) => {
    const { from, to } = value;
    const formatFrom = format(from, "MM-dd-yyy");
    const formatTo = format(to, "MM-dd-yyyy");
    setValue("selectedDays.from", formatFrom);
    setValue("selectedDays.to", formatTo);
  };

  const handleOnLogin = (value: boolean) => setValue("login.isLogged", value);

  return (
    <>
      {!isValid && Object.keys(errors).length && submitCount ? (
        <div className="pt-4 w-full">
          <p className="p-0 text-center py-4 px-6 max-w-[50rem] rounded-lg bg-[#d9534f] m-auto text-white text-2xl">
            Please check the highlighted fields for errors.
          </p>
        </div>
      ) : null}
      <form
        className="vacation-form flex flex-col w-full max-w-[102.4rem] mx-auto pb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col divide-y-2 divide-[#f8f8f8]">
          <Controller
            name="resort"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <div className="py-12 sm:pt-32 px-6 sm:max-w-[55%]">
                <SelectResort
                  brand="sandals"
                  resorts={resorts}
                  placeholder="Select Sandals Resort"
                  error={errors.resort?.message}
                  onChange={(value) => {
                    onChangeResort(value);
                    onChange(value);
                  }}
                  name={name}
                  value={value}
                />
              </div>
            )}
          />
          <Controller
            name="selectedDays"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="pt-8 pb-14 px-6">
                <SelectVacationDates
                  brand="sandals"
                  label="Select Vacation Dates:"
                  rstCode={resort}
                  selectedDays={value}
                  error={
                    errors.selectedDays?.from?.message ||
                    errors.selectedDays?.to?.message ||
                    errors.selectedDays?.message
                  }
                  onSelect={(value) => {
                    onChangeDates(value);
                    onChange({ from: value.from.toDateString(), to: value.to.toDateString() });
                  }}
                  // TODO: Will be reading from Strapi CMS
                  minNights={3}
                  maxNights={21}
                  yearLimit={2026}
                  openingDays={openingDays}
                  warningMessage={warningMessage}
                />
                {errors.selectedDays && (
                  <p className="text-2xl text-red10">
                    {errors.selectedDays?.from?.message || errors.selectedDays?.to?.message}
                  </p>
                )}
              </div>
            )}
          />
          <div className="pt-8 pb-14">
            <FlightsSelection
              brand="sandals"
              gateways={gateways}
              resortGateways={resortGateways}
              selected={selectedGateways}
              onChange={setSelectedGateways}
              radioProps={{
                name: register("includeFlights").name,
                onChange: (val) => {
                  if (val.target.value === "no") {
                    clearErrors("departureGateway");
                  }
                  return register("includeFlights").onChange(val);
                },
                inputRef: register("includeFlights").ref,
                onBlur: register("includeFlights").onBlur,
              }}
              itineraryInput={{
                name: register("departureGateway").name,
                onChange: register("departureGateway").onChange,
                error: errors.departureGateway?.message,
                refInput: register("departureGateway").ref,
              }}
            />
          </div>
        </div>
        <div className="w-full bg-sandals-light-gray px-8 pt-0 pb-16 md:px-16 md:pb-24 text-onyx max-w-[109.4rem]">
          <div className="flex flex-row flex-wrap mx-[-1.5rem] px-8 gap-2">
            <div className="leading-[1.951rem] text-center md:text-left md:pl-[0.45rem]  font-light mt-12 md:mt-20 mb-4 text-[1.5rem] md:text-[1.8rem] sm:text-[1.6rem] text-black">
              Select what applies to you (optional)
            </div>
            <LoginSSG
              brand="sandals"
              inputs={[
                inputUsername,
                {
                  type: "password",
                  name: "password",
                  require: true,
                  placeholder: "Password",
                  value: login.password,
                },
              ]}
              objectReturn={{
                FirstName: "",
                LastName: "",
                MemberID: 0,
                AvailablePoints: 0,
                Discount: 0,
                Email: "",
                Address: "",
                State: "",
                City: "",
                ZipCode: "",
                PhoneNumber: "",
              }}
              checkboxProps={{
                ...register("login.isChecked"),
                elementRef: register("login.isChecked").ref,
                onChangeCheck: (isChecked: boolean) => {
                  setValue("login.isChecked", isChecked);

                  if (!isChecked) {
                    setValue("login.username", "");
                    setValue("login.password", "");
                    clearErrors("login");
                  }
                },
              }}
              usernameProps={{
                ...register("login.username"),
                elementRef: register("login.username").ref,
                error: errors.login?.username?.message,
              }}
              passwordProps={{
                ...register("login.password"),
                elementRef: register("login.password").ref,
                error: errors.login?.password?.message,
              }}
              endpoint=""
              forgotUsernamePopup={popupFU}
              forgotPasswordPopup={popupFP}
              onLogin={handleOnLogin}
            />
            <SubscribeTo
              brand="sandals"
              popup={subscribeToPopup}
              placeholders={{
                name: "First Name",
                email: "Email Address",
                country: "Select a country...",
              }}
              countries={["USA", "Canada", "UK", "Other"]}
              values={subscribeTo}
              firstNameProps={{
                ...register("subscribeTo.firstName"),
                elementRef: register("subscribeTo.firstName").ref,
                error: errors.subscribeTo?.firstName?.message,
              }}
              emailProps={{
                ...register("subscribeTo.email"),
                elementRef: register("subscribeTo.email").ref,
                error: errors.subscribeTo?.email?.message,
              }}
              checkboxProps={{
                ...register("subscribeTo.isChecked"),
                onChangeCheck: (isChecked: boolean) => {
                  setValue("subscribeTo.isChecked", isChecked);

                  if (!isChecked) {
                    setValue("subscribeTo.firstName", "");
                    setValue("subscribeTo.email", "");
                    setValue("subscribeTo.country", "");
                    clearErrors("subscribeTo");
                  }
                },
              }}
              countryProps={{
                ...register("subscribeTo.country"),
                elementRef: register("subscribeTo.country").ref,
                error: errors.subscribeTo?.country?.message,
              }}
            />
          </div>
        </div>
        <input
          type="submit"
          value="CONTINUE"
          className="text-5xl mt-10 py-6 bg-blue text-white rounded-lg max-w-[90%] w-[inherit] mx-auto sm:max-w-[40%] mb-4 hover:bg-spiro-disco cursor-pointer"
          onClick={handleOnClickSubmit}
        />
      </form>
    </>
  );
}
