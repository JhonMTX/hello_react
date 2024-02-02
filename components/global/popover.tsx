import OutsideClick from "../wrapper";

type Props = {
  className: string;
  children: React.ReactNode;
  onChange: (value: boolean) => void;
};

export default function Popover({
  className,
  children,
  onChange,
}: Props) {
  const ref = OutsideClick(() => {
    onChange(false);
  });

  return (
    <div className={`popover z-10 absolute shadow-lg ${className}`} ref={ref}>
      {children}
    </div>
  );
}
