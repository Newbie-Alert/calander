export type CurrentDateType = {
  year: number;
  month: number;
  day: number;
};

export type Schedule = {
  id: number;
  title: string;
  description: string;
  important: boolean;
};

export type Days = {
  year: number;
  month: number;
  day: number;
  currentMonth: boolean;
  isToday: boolean;
  schedule: Schedule[];
};
