import { SVG, svgCodes } from "@/utils/svg-codes"

type Props = {
  name: string,
  className: string,
}

export default function Icons({name, className}:Props) {
  const svgData = svgCodes[name as keyof SVG];
  const data = svgData ? svgData : null;

  return (
    <>
    { data && 
      <svg
        className={className}
        viewBox={data.viewBox}
      >
        <path d={data.path} />
      </svg>
    }
    </>
  )
}
