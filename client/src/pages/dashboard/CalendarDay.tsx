import { Dayjs } from "dayjs";
import { useCallback } from "react";
import { monthLabelFormat } from "./helpers";

interface CalendarDayProps {
  day: Dayjs;
  weekIndex: number;
  currentMonth: string;
  dayIndex: number;
}

export const CalendarDay = ({
  day,
  weekIndex,
  currentMonth,
  dayIndex,
}: CalendarDayProps) => {
  const isCurrentMonth = useCallback(
    () => day.format(monthLabelFormat) === currentMonth,
    [day, currentMonth]
  )

  const calendarPosition = useCallback(
    () => ({
      gridColumn: dayIndex + 1,
      gridRow: weekIndex + 2,
      backgroundColor: !isCurrentMonth() ? '#00E6FF12' : '#021213',
    }),
    [dayIndex, isCurrentMonth, weekIndex]
  )

  return (
    <article
      key={`week:${weekIndex}-day:${dayIndex}`}
      className="calendar-day"
      style={calendarPosition()}
    >
      <div>{day.format('D')}</div>
    </article>
  )
}
