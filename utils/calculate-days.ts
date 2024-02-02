export function getArrayOfDays(numberOfDays: number) {
  const days = [];

  for (let index = 0; index < numberOfDays; index++) {
    days.push(index + 1);
  }

  return days;
}

export function getArrayOfMonths(from?: number, to?:number) {
  let index = from ? from : 1;
  const last = to ? to : 12;

  const months = [];
  for (;index <= last; index++) {
    months.push(index);
  }

  return months;
}

export function getArrayOfYears(from: number, to: number) {
  const years = [];

  for (let index = from; index <= to; index++) {
    years.push(index);
  }

  return years;
}

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function getRemainingMonths() {
  const month = [1,2,3,4,5,6,7,8,9,10,11,12];
  const currentDate = new Date();

  return month.slice(currentDate.getMonth());
}

export const diffDays = (from: Date, to: Date) => {
  const diffTime = Math.abs(Number(to) - Number(from));
  const difference = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return difference;
};

export const getTotalMonths = (to: number) => {
  const current = new Date();
  const totalYears = to - current.getFullYear();
  const remaining = 12 - current.getMonth();
  const totalMonths = totalYears * 12 + remaining;

  return totalMonths;
};
