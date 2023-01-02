import { Dayjs } from "dayjs";
import { useCallback } from "react";

import { monthLabelFormat } from "../helpers";
import { SelectedDate } from "../types";

interface MonthCalendarDayProps {
  day: Dayjs;
  weekIndex: number;
  currentMonth: string;
  dayIndex: number;
  selectedDate: SelectedDate | null;
  getSelectedDate: (day: Dayjs) => void;
}

export const MonthCalendarDay = ({
  day,
  weekIndex,
  currentMonth,
  dayIndex,
  selectedDate,
  getSelectedDate,
}: MonthCalendarDayProps) => {

  const isCurrentMonth = useCallback(
    () => day.format(monthLabelFormat) === currentMonth,
    [day, currentMonth]
  )

  const isSelectedDate = useCallback(
    () => selectedDate?.date.isSame(day, 'day') || false,
    [day, selectedDate]
  )

  const calendarPosition = useCallback(
    () => ({
      gridColumn: dayIndex + 1,
      gridRow: weekIndex + 2
    }),
    [dayIndex, weekIndex]
  )

  return (
    <button
      key={`week:${weekIndex}-day:${dayIndex}`}
      className={`month-calendar-day ${!isCurrentMonth() && 'out-of-scope'} ${!!isSelectedDate() ? 'selected-date' : !isCurrentMonth() ? 'out-of-scope' : 'in-scope'}`}
      style={calendarPosition()}
      onClick={() => getSelectedDate(day)}
    >
      <div>
        <p>{day.format('D')}</p>
      </div>
    </button>
  )
}
