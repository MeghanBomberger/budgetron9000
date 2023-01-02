import { Dayjs } from 'dayjs'

import { SelectedDate } from '../types';
import { MonthCalendarDay } from './MonthCalendarDay';

interface MonthCalendarWeekProps {
  week: Dayjs[];
  weekIndex: number;
  currentMonth: string;
  selectedDate: SelectedDate | null;
  getSelectedDate: (day: Dayjs) => void;
}

export const MonthCalendarWeek = ({
  currentMonth,
  selectedDate,
  getSelectedDate,
  week,
  weekIndex,
}: MonthCalendarWeekProps) => {
  return (
    <>
      {week.map((day, i) => (
        <MonthCalendarDay
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDate}
          day={day}
          dayIndex={i}
          weekIndex={weekIndex}
        />
      ))}
    </>
  )
}
