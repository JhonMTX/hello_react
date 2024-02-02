import Link from "next/link";

export function HeaderBlock({
  name,
  title,
  href,
  hrefLabel,
}: {
  name: string;
  title: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className={`${name}-information px-6 flex justify-between flex-wrap items-center`}>
      <p className="text-[1.4rem] font-semibold">{title}</p>
      {href && hrefLabel && (
        <Link href={href} className=" text-[1.2rem] text-blue uppercase border border-solid border-blue rounded-md px-2">
          {hrefLabel}
        </Link>
      )}
      <hr className="max-w-[75rem] my-3 basis-full border-t border-solid border-platinum"/>
    </div>
  );
}

export function DataBlock({
  name,
  label,
  information,
}: {
  name: string;
  label: string;
  information: string;
}) {
  return (
    <div className={`${name}-details px-6 flex justify-between`}>
      <p className="text-[1.3rem] font-semibold basis-6/12">{label}</p>
      <p className="text-[1.3rem] basis-6/12">{information}</p>
    </div>
  );
}
