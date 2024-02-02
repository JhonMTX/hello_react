import { useState } from "react";
import Modal from "../../global/modal";
import Input from "../../global/input";
import Icons from "@/components/global/icons";

type Inputs = {
  type: string;
  name: string;
  require: boolean;
  placeholder: string;
  value?: string;
  activeRequire?: boolean;
};

type Props = {
  isOpen: (value: boolean) => void;
  image: string;
  instructions: string;
  inputs: Inputs[];
  index: number;
};

export default function SSGModals({ isOpen, image, instructions, inputs, index }: Props) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [showLoading, setShowLoading] = useState(true);
  const [statusForgot, setStatusForgot] = useState(0);
  const [textResponse, setTextResponse] = useState("");

  const handleChange = (value: string, inputName: string) => {
    setFormData({ ...formData, [inputName]: value });
  };

  function handleClickBtn() {
    setTextResponse("");
    setStatusForgot(0);

    const requiredFields = inputs.filter((input) => input.require);

    for (const field of requiredFields) {
      if (!formData[field.name]) {
        setTextResponse("Input is required or invalid.");
        setStatusForgot(1);
        field.activeRequire = true;
        return;
      }
    }

    if (statusForgot == 0) {
      setShowLoading(true);

      const randomNumber = Math.round(Math.random());
      if (randomNumber) {
        setTextResponse("Username  not valid. Please try again..");
        setStatusForgot(1);
      } else {
        setTextResponse(
          "Thank you! If the email address is linked to an SSG Account, you will receive an email with further instructions.",
        );
        setStatusForgot(2);
      }

      setShowLoading(false);
    }
  }

  return (
    <Modal
      isOpen={true}
      onChange={(value) => isOpen(value)}
      className="bg-white flex flex-col z-10 w-full max-w-[42rem] top-80 relative mx-auto rounded-lg py-8 md:px-16 px-8"
    >
      <div className="information">
        <div className="flex justify-center flex-wrap">
          <div className="basis-full mx-auto mt-[3.5rem] md:mt-[3rem] mb-0 text-center">
            <Icons name={image} className="w-[12.89rem] h-[5.04rem] mx-auto" />
          </div>
          <p className="text-[1.6rem] sm:text-[1.6rem] md:text-[1.6rem] mt-4 mb-3 md:mt-6 basis-full pr-2 font-semibold md:font-semibold leading-[2.6rem] text-onyx">
            {instructions}
          </p>
          {inputs.map((input) => (
            <div className="basis-[90%] py-[0.5rem] md:py-[1.2rem] " key={`${input.name}-${index}`}>
              <Input
                name={`${input.name}${index}`}
                value={formData[input.name] || ""}
                placeholder={input.placeholder}
                onChangeInput={(value) => handleChange(value, input.name)}
              />
            </div>
          ))}
          {statusForgot == 1 && (
            <p className="px-6 text-red10 mb-4 text-center text-[1.4rem] leading-[1.8rem] w-full">
              {textResponse}
            </p>
          )}
          {statusForgot == 2 && (
            <p className="px-6 text-blue mb-4 text-center text-[1.5rem] leading-[1.3rem] w-full">
              {textResponse}
            </p>
          )}
          <div className="flex px-6 md:px-0 basis-full my-2 text-center">
            <button
              className="hover:bg-spiro-disco rounded-lg px-0 py-[1.3rem] md:py-4 md:basis-3/12 sm:basis-3/12 basis-4/12 text-[1.8rem] md:text-[1.6rem] font-[600] text-white bg-blue justify-center items-center mx-auto h-max-[4.76rem]"
              onClick={handleClickBtn}
              type="button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
