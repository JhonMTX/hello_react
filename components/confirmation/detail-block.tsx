export default function DetailsBlock({
    id,
    labels,
    details,
  }: {
    id: string;
    labels: string[];
    details: string[];
  }) {
    return labels.map((label, index) => (
      <div key={id + index} className="flex">
        <p className="text-[1.2rem] sm:text-2xl font-semibold basis-7/12 sm:basis-5/12">{label}:</p>
        <p className="text-[1.2rem] sm:text-2xl basis-5/12 sm:basis-7/12">{details[index]}</p>
      </div>
    ));
  }