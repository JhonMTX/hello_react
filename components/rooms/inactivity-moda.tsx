import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Modal from "@/components/global/modal";

type Props = {
  title: string;
  description: string;
  inactivityLimit: number;
  counter: number;
  setSessionEnd: Dispatch<SetStateAction<boolean>>;
};

export default function InactivityModa({ title, description, inactivityLimit, counter, setSessionEnd }: Props) {
  const [isOpen, setisOpen] = useState(true);
  const [textButton, settextButton] = useState("OK");
  const initialCountdownValue = counter * 60;
  const [countdown, setCountdown] = useState(initialCountdownValue);
  const minutes = Math.floor(countdown / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (countdown % 60).toString().padStart(2, "0");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(intervalId);
          console.log(prevCountdown);
          setSessionEnd(true);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (inactivityLimit > 0) {
      settextButton("I'm still here");
    }else{
      settextButton("OK");
    }
  }, [inactivityLimit]);

  const haddleSesion = ()=>{
    setisOpen(false)
    setSessionEnd(true);
  }

  return (
    <>
    {isOpen && (
    <Modal
      isOpen={isOpen}
      onChange={(value) => setisOpen(value)}
      classNameClose="absolute top-6 right-6 p-0"
      className="bg-white flex flex-col z-10 w-[95%] sm:w-full max-w-[68.8rem] align-middle top-80 relative mx-auto rounded-[0.4rem] "
    >
      <div className="relative px-[5rem] pt-8 pb-16">
        <div className="pt-20">
          <p className="mx-auto mb-8 mt-0 text-center text-[2.3rem] uppercase text-blue h-[2rem]">{title}</p>
          <hr className="w-full m-0 border-t border-solid border-opacity-[0.6] border-modal-hr"></hr>
          <p className="text-[1.4rem] text-onyx my-[1.4rem] leading-8">{description}</p>
          {inactivityLimit > 0  && (
            <span className="mx-auto my-12 text-center text-[5.6rem] text-counter block min-w-[5.6rem] leading-[2rem]">
              {minutes}:{seconds}
            </span>
          )}
          <div className="flex flex-row flex-wrap -mx-6">
            <button onClick={haddleSesion} className="h-[3.6rem] mt-4 text-[2rem] leading-[1] p-0 bg-blue hover:bg-spiro-disco text-white basis-10/12 ml-[8.33333%] md:basis-6/12 md:ml-[25%] sm:basis-10/12 sm:ml-[8.33333%] flex-grow-0 flex-shrink-0 cursor-pointer rounded-[0.5rem]">
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </Modal>
    )}
    </>
  );
}
