import { Dayjs } from "dayjs";
import { useCallback } from "react";

import { monthLabelFormat } from "./helpers";
import { SelectedDate } from "./types";

interface AdditionalDayStyles {
  gridColumn: number;
  gridRow: number;
  backgroundColor: string;
  border?: string;
  margin?: string;
}

interface CalendarDayProps {
  day: Dayjs;
  weekIndex: number;
  currentMonth: string;
  dayIndex: number;
  selectedDate: SelectedDate | null;
  setSelectedDate: (date: SelectedDate) => void;
}

export const CalendarDay = ({
  day,
  weekIndex,
  currentMonth,
  dayIndex,
  selectedDate,
  setSelectedDate,
}: CalendarDayProps) => {

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

  const getSelectedDate = useCallback(
    () => {
      setSelectedDate({
        date: day,
      })
    },
    [day, setSelectedDate]
  )

  return (
    <button
      key={`week:${weekIndex}-day:${dayIndex}`}
      className={`calendar-day ${!isCurrentMonth() && 'out-of-scope'} ${!!isSelectedDate() ? 'selected-date' : !isCurrentMonth() ? 'out-of-scope' : 'in-scope'}`}
      style={calendarPosition()}
      onClick={getSelectedDate}
    >
      <div>
        <p>{day.format('D')}</p>
      </div>
    </button>
  )
}
