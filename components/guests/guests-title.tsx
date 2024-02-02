interface GuestTitleProps {
  title: string;
  subtitle?: string;
  description: string;
  requiredTag?: string;
}

export const GuestTitle = (args: GuestTitleProps) => {
  const { title, subtitle, description, requiredTag } = args;
  return (
    <div className="row pt-12 sm:pt-16 text-center">
      <div className="mt-12 mx-16 sm:mt-28">
        <span className="uppercase text-[4rem] sm:text-[5rem] leading-[4rem] font-[200] text-onyx">
          {title}
        </span>
      </div>
      {subtitle && (
        <div className="text-center mb-8">
          <span className="text-lightGray text-[2.1rem] sm:leading-[3.4rem] font-[100] sm:text-[2rem] uppercase">
            {subtitle}
          </span>
        </div>
      )}
      <div
        className={`text-center sm:px-24 md:px-0 mb-8 max-w-6xl mx-auto ${
          !subtitle ? "mt-4" : ""
        }`}
      >
        <span className="text-[1.58rem] sm:text-2xl font-[300] sm:font-[200] leading-8 text-onyx">
          {description}
        </span>
      </div>

      {requiredTag && (
        <div className="text-center">
          <span className="uppercase text-[1.3rem] font-semi-bold">
            {requiredTag}
          </span>
        </div>
      )}
    </div>
  );
};
