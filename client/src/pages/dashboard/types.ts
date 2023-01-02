import { Dayjs } from 'dayjs'

export interface CalendarWeeks {
  [key: number]: Dayjs[];
}

export interface SelectedMonth {
  monthLabel: string;
  startOfMonth: Dayjs;
  calendar: CalendarWeeks;
}

export interface SelectedDate {
  date: Dayjs;
}

export interface ViewsList {
  [key: string]: string;
}

export interface SelectedYear {
  yearLabel: string;
  startOfYear: Dayjs;
}
