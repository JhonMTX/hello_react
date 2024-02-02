export function getDevice(): string {
  const width = window.innerWidth;
  if (width >= 1024) {
    return "Desktop";
  } else if (width >= 768) {
    return "Tablet";
  }
  return "Mobile";
}

export function capitalizeString(value: any): string {
  if (typeof value === "string") {
    return value
      .toLocaleLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return value;
}

export function toFixedCurrency(value: any, dec: number): string {
  if (typeof value === "number") {
    const parts = value.toFixed(dec).toString().split(".");

    const integerPartWithCommas = parts[0] ? parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "0";
    const formattedValue =
      parts.length === 1 ? integerPartWithCommas : `${integerPartWithCommas}.${parts[1]}`;

    return formattedValue;
  }
  return value;
}
