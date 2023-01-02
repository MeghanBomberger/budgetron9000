import { Dayjs } from 'dayjs'

export interface CalendarWeeks {
  [key: number]: Dayjs[];
}

export interface SelectedDate {
  date: Dayjs;
}

export interface SelectedMonth {
  monthLabel: string;
  startOfMonth: Dayjs;
  calendar: CalendarWeeks;
}

export interface SelectedYear {
  yearLabel: string;
  startOfYear: Dayjs;
  calendar: {
    january: CalendarWeeks;
    february: CalendarWeeks;
    march: CalendarWeeks;
    april: CalendarWeeks;
    may: CalendarWeeks;
    june: CalendarWeeks;
    july: CalendarWeeks;
    august: CalendarWeeks;
    september: CalendarWeeks;
    october: CalendarWeeks;
    november: CalendarWeeks;
    december: CalendarWeeks;
  }
}

export interface ViewsList {
  [key: string]: string;
}
