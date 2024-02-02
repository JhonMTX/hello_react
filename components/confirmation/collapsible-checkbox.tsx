import { Dispatch, SetStateAction, useState } from "react";

const changeStates = (
  label: string,
  showForm: boolean,
  options: string[],
  setShowForm: Dispatch<SetStateAction<boolean>>,
  setSelectedOptions: Dispatch<SetStateAction<string[]>>
) => {
  setShowForm(!showForm);
  const selectedOptions = options.filter(
    (option) => option !== label
  );

  if (options.some((option) => option === label)) {
    setSelectedOptions(selectedOptions);
  } else {
    selectedOptions.push(label);
    setSelectedOptions(selectedOptions);
  }
};

export default function CollapsibleCheckBox({
  name,
  label,
  options,
  onChange,
  children,
}: {
  name: string;
  label: string;
  options: string[]
  onChange: Dispatch<SetStateAction<string[]>>;
  children?: React.ReactNode;
}) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const checkedClass = showForm ? "bg-blue" : "bg-white";

  return (
    <div className={`collapsible-${name} border-t py-6 border-light-siver`}>
      <div
        className="content flex items-center"
        onClick={() => changeStates(label, showForm, options, setShowForm, onChange)}
      >
        <input
          className={`relative w-8 h-8 appearance-none border border-platinum rounded-md ${checkedClass}`}
          type="checkbox"
          name=""
          id="anniversary"
          defaultChecked={showForm}
        />
        <label className="text-[1.8rem] font-[500] ml-4">{label}</label>
        {showForm && (
          <svg
            className="w-4 h-4 my-3 mx-2 absolute fill-white"
            version="1.1"
            viewBox="0 0 1169 1024"
          >
            <g id="icomoon-ignore" />
            <path d="M0 468.71s125.651 441.481 296.755 545.221 396.453-624.001 862.398-856.654c0 0 82.964-294.415-222.584-78-237.932 169.58-447.008 348.573-639.108 544.287l-0.706 0.721c-43.042 54.104-173.089-245.346-296.755-155.575z" />
          </svg>
        )}
      </div>
      {showForm && children && <div className="mt-4 pl-2">{children}</div>}
    </div>
  );
}
