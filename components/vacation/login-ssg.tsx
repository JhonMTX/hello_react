import { useState } from "react";
import SSGModals from "@/components/vacation/login-ssg/ssg-modals";
import Icons from "@/components/global/icons";
import Input from "@/components/global/input";
import { CheckboxProps, InputProps } from "./vacation.type";

type Popup = {
  label: string;
  text: string;
  image: string;
  inputs: Inputs[];
  class?: string;
  endpoint?: string;
};

type Inputs = {
  type: string;
  name: string;
  require: boolean;
  placeholder: string;
  value?: string;
  activeRequire?: boolean;
  icon?: string;
  iconColor?: string;
};

const defaultInput: Inputs = {
  type: "text",
  name: "",
  require: false,
  placeholder: "",
  value: "",
};

type Users = {
  FirstName: string;
  LastName: string;
  MemberID: Number;
  AvailablePoints: Number;
  Discount: Number;
  Email: string;
  Address: string;
  State: string;
  City: string;
  ZipCode: string;
  PhoneNumber: string;
};

type Props = {
  brand: string;
  inputs: Inputs[];
  endpoint: string;
  objectReturn: Users;
  forgotUsernamePopup?: Popup;
  forgotPasswordPopup?: Popup;
  onChange?: (key: string, value: string) => void;
  onLogin?: (value: boolean) => void;
  checkboxProps?: CheckboxProps;
  usernameProps?: InputProps;
  passwordProps?: InputProps;
};

export default function LoginSSG({
  brand,
  inputs,
  endpoint,
  objectReturn,
  forgotUsernamePopup,
  forgotPasswordPopup,
  checkboxProps,
  usernameProps,
  passwordProps,
  onLogin,
}: Props) {
  const [nFailedAttempts, setNFailedAttempts] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedLogin, setIsCheckedLogin] = useState(false);

  const [isOpenforgotUsernamePopup, setIsOpenforgotUsernamePopup] = useState(false);
  const [isOpenforgotPasswordPopup, setIsOpenforgotPasswordPopup] = useState(false);

  const [textInvalid, setTextInvalid] = useState("");
  const [istInvalidLogin, setIstInvalidLogin] = useState(false);

  const isSandals = brand.toLowerCase() === "sandals";
  const checkboxBg = isSandals ? "bg-dark-blue" : "bg-blue";
  const checkedClass = isCheckedLogin ? checkboxBg : "bg-white";
  const inputPrimary = inputs[0] || defaultInput;
  const inputSecundary = inputs[1] || defaultInput;

  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (inputName: string, newValue: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: newValue,
    }));
  };

  function handleClickBtnLogin() {
    inputPrimary.activeRequire = false;
    inputSecundary.activeRequire = false;
    setTextInvalid("");
    setIstInvalidLogin(false);
    const inputPrimaryValue = formData[inputPrimary.name] || "";
    const inputSecundaryValue = formData[inputSecundary.name] || "";
    if (inputPrimary.require && inputPrimaryValue === "") {
      setIstInvalidLogin(true);
      inputPrimary.activeRequire = true;
      return;
    }
    if (inputSecundary.require && inputSecundaryValue === "") {
      setIstInvalidLogin(true);
      inputSecundary.activeRequire = true;
      return;
    }

    if (!istInvalidLogin) {
      setIsLoading(true);
      const randomNumber = Math.round(Math.random());
      if (randomNumber) {
        setTextInvalid("Username or Password not valid. Please try again..");
        setIstInvalidLogin(true);
        setNFailedAttempts(nFailedAttempts + 1);
        if (nFailedAttempts == 5) {
          setShowCaptcha(true);
        }
      } else {
        setNFailedAttempts(0);
        setIsLogin(true);
        objectReturn.FirstName = "Jean Carlos";
        objectReturn.LastName = "Serrano Torres";
        objectReturn.MemberID = 2174852512262625;
        objectReturn.Discount = 2357.75;
        objectReturn.AvailablePoints = 95102;
        onLogin && onLogin(true);
      }
      setIsLoading(false);
    }
  }

  function handleClickBtnSignout() {
    setIsLogin(false);
    setShowCaptcha(false);
    setNFailedAttempts(0);
    inputPrimary.activeRequire = false;
    inputSecundary.activeRequire = false;
    setTextInvalid("");
    formData[inputSecundary.name] = "";
    formData[inputPrimary.name] = "";
  }

  const handleCheckboxChange = () => {
    setIsCheckedLogin(!isCheckedLogin);
    checkboxProps?.onChangeCheck && checkboxProps?.onChangeCheck(!isCheckedLogin);
  };

  return (
    <div className="sm:basis-full w-full  relative  text-[1.6rem] w-max-[94.8rem]">
      <div className="py-6 px-8 bg-white rounded-lg">
        <div className="content flex items-center" onClick={handleCheckboxChange}>
          <input
            className={`relative p-3 sm:p-0 w-9 h-9 appearance-none border border-platinum rounded-md ${checkedClass}`}
            type="checkbox"
            name={checkboxProps?.name}
            ref={checkboxProps?.elementRef}
            defaultChecked={isCheckedLogin}
          />
          <label className="text-[1.4rem] sm:text-[1.6rem] font-[400] pl-[1.8rem] md:pl-[1.6rem] inline-block cursor-pointer ">
            I&apos;m a <span className="capitalize">{brand}</span> Select Rewards Member. (Account
            Access){" "}
          </label>
          {isCheckedLogin && (
            <svg
              className="w-[1.2rem] h-[1.2rem] my-3 mx-2 absolute fill-white"
              version="1.1"
              viewBox="0 0 1169 1024"
            >
              <g id="icomoon-ignore" />
              <path d="M0 468.71s125.651 441.481 296.755 545.221 396.453-624.001 862.398-856.654c0 0 82.964-294.415-222.584-78-237.932 169.58-447.008 348.573-639.108 544.287l-0.706 0.721c-43.042 54.104-173.089-245.346-296.755-155.575z" />
            </svg>
          )}
        </div>
      </div>
      {isCheckedLogin && !isLogin && (
        <div className="w-full py-[4.2rem] px-6 bg-light-blue flex justify-center">
          <div className="relative flex-wrap flex flex-row -mx-6">
            <div className="px-6 basis-full sm:basis-full md:basis-10/12 md:ml-[8.33%] text-[1.4rem] md:text-[1.4rem] sm:text-[1.4rem] font-semibold md:font-[500] mb-8 md:mt-6 text-center md:text-left leading-[1.8rem]">
              Login to your <span className="capitalize">{brand}</span> Select Rewards account to be
              able to use your <br className="hidden md:block" />
              reward points for a discount at the payment section.
            </div>
            {istInvalidLogin && (
              <p className="px-6 text-red mb-4 text-left text-[1.4rem] leading-[1.8rem] w-full basis-full sm:basis-full md:basis-10/12 md:ml-[8.33%]">
                {textInvalid}
              </p>
            )}
            <div className="mb-4 md:px-6 px-6 basis-full w-full sm:basis-6/12 md:basis-4/12 md:ml-[8.33%]">
              <div className="relative">
                <Input
                  name={usernameProps?.name}
                  // value={formData[inputPrimary.name]}
                  type={inputPrimary.type}
                  placeholder={inputPrimary.placeholder}
                  onChangeInput={(value) => handleChange(inputPrimary.name, value)}
                  icon={inputPrimary.name}
                  error={usernameProps?.error}
                  onChange={usernameProps?.onChange}
                  elementRef={usernameProps?.elementRef}
                />
              </div>
              {forgotUsernamePopup && (
                <button
                  className="text-lightGray font-semibold flex items-center text-[1.4rem] mt-6 mb-10"
                  onClick={() => setIsOpenforgotUsernamePopup(!isOpenforgotUsernamePopup)}
                  type="button"
                >
                  <Icons
                    name="nextArrow"
                    className={`w-[0.712rem] h-[1.25rem]   fill-blue mr-2 `}
                  />
                  {forgotUsernamePopup.label}
                </button>
              )}
            </div>
            <div className="md:px-6 px-6 basis-full w-full sm:basis-6/12 md:basis-4/12">
              <div className="relative">
                <Input
                  name={passwordProps?.name}
                  type={inputSecundary.type}
                  placeholder={inputSecundary.placeholder}
                  onChangeInput={(value) => handleChange(inputSecundary.name, value)}
                  icon={inputSecundary.name}
                  error={passwordProps?.error}
                  onChange={passwordProps?.onChange}
                  elementRef={passwordProps?.elementRef}
                />
              </div>
              {forgotPasswordPopup && (
                <button
                  className="text-lightGray font-semibold flex items-center text-[1.4rem] mt-6 mb-10"
                  onClick={() => setIsOpenforgotPasswordPopup(!isOpenforgotPasswordPopup)}
                  type="button"
                >
                  <Icons name="nextArrow" className={`w-[0.712rem] h-[1.25rem]  fill-blue mr-2 `} />
                  {forgotPasswordPopup.label}
                </button>
              )}
            </div>
            <div className="px-6 basis-full md:basis-2/12 sm:basis-full text-center">
              <button
                className="w-[16.5rem] font-[600] rounded-lg py-4 px-12 md:px-0 sm:w-[14rem] mx-auto  md:basis-full text-[2rem] md:w-full text-white bg-blue justify-center items-center"
                onClick={handleClickBtnLogin}
              >
                LOGIN
              </button>
            </div>
            {showCaptcha && (
              <p className="m-auto w-full">
                <div className="mx-auto captcha w-[24rem] h-[6rem] bg-white">CAPTCHA</div>
              </p>
            )}
          </div>
        </div>
      )}
      {isCheckedLogin && isLogin && (
        <div className="w-full py-[4.2rem] px-6 bg-light-blue flex justify-center">
          <div className="relative w-full sm:w-10/12 flex-wrap flex text-center text-onyx">
            <div className="px-6 basis-full sm:basis-full text-[1.55rem] sm:text-[1.55rem] font-[400] mb-8 text-center leading-[2.8rem] md:leading-[1.8rem]">
              Welcome back, {objectReturn.FirstName} {objectReturn.LastName}{" "}
              <br className="block md:hidden" />| Member ID: {objectReturn.MemberID.toString()}
            </div>
            <div className="md:mt-4 px-6 basis-full sm:basis-full text-[2.4rem] sm:text-[2.4rem] font-light mb-8 text-center leading-[2.8rem]  md:leading-[1.8rem]">
              Available Points: {objectReturn.AvailablePoints.toLocaleString()}.{" "}
              <br className="block md:hidden" /> Valid for a discount of $
              {objectReturn.Discount.toLocaleString()}
            </div>
            <div className="px-6 basis-full sm:basis-full text-[1.2rem] sm:text-[1.4rem] mb-8 text-center leading-[1.8rem]">
              <button
                className="w-full md:w-[31.599rem] px-24 rounded-lg py-4 basis-full text-[1.7rem] border-[0.2rem] hover:text-white hover:bg-blue hover:border-white text-blue bg-none border-solid border-blue justify-center items-center"
                onClick={handleClickBtnSignout}
              >
                SIGN OUT
              </button>
            </div>
            <div className="text-lightGray px-6 basis-full sm:basis-full text-[1.1rem] sm:text-[1.1rem] mb-8 text-center leading-[1.8rem]">
              Discount will be applied at the payment section. <br /> Money amount shown in US
              Dollars.
            </div>
          </div>
        </div>
      )}
      {isOpenforgotUsernamePopup && forgotUsernamePopup && (
        <SSGModals
          isOpen={setIsOpenforgotUsernamePopup}
          instructions={forgotUsernamePopup.text}
          image={forgotUsernamePopup.image}
          inputs={forgotUsernamePopup.inputs}
          index={1}
        ></SSGModals>
      )}
      {isOpenforgotPasswordPopup && forgotPasswordPopup && (
        <SSGModals
          isOpen={setIsOpenforgotPasswordPopup}
          instructions={forgotPasswordPopup.text}
          image={forgotPasswordPopup.image}
          inputs={forgotPasswordPopup.inputs}
          index={2}
        ></SSGModals>
      )}
    </div>
  );
}
