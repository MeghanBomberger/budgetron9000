import { Dayjs } from 'dayjs'

export interface CalendarWeeks {
  [key: number]: Dayjs[];
}

export interface SelectedMonth {
  monthLabel: string;
  startOfMonth: Dayjs;
  calendar: CalendarWeeks;
}
