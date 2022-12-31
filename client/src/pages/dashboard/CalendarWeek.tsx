import { Dayjs } from 'dayjs'

import { monthLabelFormat } from './helpers'
import { SelectedDate } from './types';
import { CalendarDay } from './CalendarDay';

interface CalendarWeekProps {
  week: Dayjs[];
  weekIndex: number;
  currentMonth: string;
  selectedDate: SelectedDate | null;
  setSelectedDate: (date: SelectedDate | null) => void;
}

export const CalendarWeek = ({
  currentMonth,
  selectedDate,
  setSelectedDate,
  week,
  weekIndex,
}: CalendarWeekProps) => {
  return (
    <>
      {week.map((day, i) => (
        <CalendarDay
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          day={day}
          dayIndex={i}
          weekIndex={weekIndex}
        />
      ))}
    </>
  )
}
