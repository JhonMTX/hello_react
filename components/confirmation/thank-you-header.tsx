
type Details = {
  title: string;
  subtitle: string;
  description: string
}

export default function ThankYouHeader({details}:{details:Details}) {
  const {title, subtitle, description} = details;

  return (
    <section className="thank-you w-full flex justify-center">
      <div className="container flex justify-center flex-col items-center px-6 text-center">
        <h3 className="text-blue text-8xl sm:text-[6.6rem] leading-none uppercase px-6">
          {title}
        </h3>
        <h4 className="text-blue text-[2.4rem] sm:text-[2.6rem] leading-none uppercase font-semibold px-6">
          {subtitle}
        </h4>
        <p className="text-[1.6rem] sm:text-[2rem] text-sandals-gray my-8 px-6">
          {description}
        </p>
      </div>
    </section>
  );
}
