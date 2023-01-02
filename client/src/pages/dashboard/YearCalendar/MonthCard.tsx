import dayjs, { Dayjs } from "dayjs";
import { useCallback } from "react";
import { CalendarWeeks } from "../types";

interface YearLayout {
  [month: string]: {
    column: number;
    row: number;
  }
}

const yearLayout: YearLayout = {
  january: {
    column: 1,
    row: 2,
  },
  february: {
    column: 2,
    row: 2,
  },
  march: {
    column: 3,
    row: 2,
  },
  april: {
    column: 4,
    row: 2,
  },
  may: {
    column: 1,
    row: 3,
  },
  june: {
    column: 2,
    row: 3,
  },
  july: {
    column: 3,
    row: 3,
  },
  august: {
    column: 4,
    row: 3,
  },
  september: {
    column: 1,
    row: 4,
  },
  october: {
    column: 2,
    row: 4,
  },
  november: {
    column: 3,
    row: 4,
  },
  december: {
    column: 4,
    row: 4,
  }
}

interface MonthCardProps {
  month: CalendarWeeks;
  monthLabel: string;
  selectedDate: Dayjs;
  getSelectedDate: (day: Dayjs) => void;
}

export const MonthCard = ({
  month,
  monthLabel,
  selectedDate,
  getSelectedDate,
}: MonthCardProps) => {

  const isInMonth = useCallback(
    (day: Dayjs) => day.format("MMMM").toLowerCase() === monthLabel,
    [
      monthLabel
    ]
  )

  const hasPast = (day: Dayjs) => day.isBefore(dayjs(), 'day')

  return (
    <article 
      className="month-card"
      style={{
        gridColumn: yearLayout[monthLabel].column,
        gridRow: yearLayout[monthLabel].row,
      }}
    >
      <h3 className="month-card-header">
        {monthLabel}
      </h3>

      {Object.keys(month).map(
        weekKey => month[parseInt(weekKey)].map(
          day => (
            <button
              key={`${monthLabel}-week${weekKey}-${day.format('mmm')}`}
              title={day.format('MMMM D, YYYY')}
              className={
                `day-dot ${!isInMonth(day) && 'out-of-scope'} ${!!hasPast(day) && !!isInMonth(day) && 'past-day'}`
              }
              disabled={!isInMonth(day)}
              onClick={() => getSelectedDate(day)}
            />
          )
        )
      )}
    </article>
  )
}