import { Dayjs } from 'dayjs'
import { CalendarDay } from './CalendarDay';
import { monthLabelFormat } from './helpers'

interface CalendarWeekProps {
  week: Dayjs[];
  weekIndex: number;
  currentMonth: string;
}

export const CalendarWeek = ({
  week,
  weekIndex,
  currentMonth,
}: CalendarWeekProps) => {
  return (
    <>
      {week.map((day, i) => (
        <CalendarDay
          day={day}
          dayIndex={i}
          weekIndex={weekIndex}
          currentMonth={currentMonth}
        />
      ))}
    </>
  )
}
