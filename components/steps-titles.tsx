"use client";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

function StepsTitles(props: Props) {
  return (
    <section className="step-title mt-[3.2rem] flex flex-col items-center justify-center">
      <h1 className="title text-[2.8rem] leading-normal sm:text-[3.2rem]">
        {props.title}
      </h1>
      <div className="sub-title text-center text-[1.4rem] text-davys-gray">
        {props.children}
      </div>
    </section>
  );
}

export default StepsTitles;
