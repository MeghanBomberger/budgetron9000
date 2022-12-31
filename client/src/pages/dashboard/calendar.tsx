import { Dayjs } from 'dayjs'
import { useCallback, useState } from 'react'

import './Calendar.scss'
import { CalendarHeader } from './CalendarHeader'
import { CalendarWeek } from './CalendarWeek'
import { getSelectedMonth } from './helpers'
import { SelectedDate, SelectedMonth } from './types'

interface CalendarProps {
  now: Dayjs;
  selectedDate: SelectedDate | null;
  setSelectedDate: (date: SelectedDate | null) => void;
}

export const Calendar = ({
  now,
  selectedDate,
  setSelectedDate,
}: CalendarProps) => {
  const [selectedMonth, setSelectedMonth] = useState<SelectedMonth>(getSelectedMonth(now))

  const goBackMonth = useCallback(
    () => setSelectedMonth(getSelectedMonth(selectedMonth.startOfMonth.subtract(1, 'month'))),
    [selectedMonth.startOfMonth]
  )

  const goForwardMonth = useCallback(
    () => setSelectedMonth(getSelectedMonth(selectedMonth.startOfMonth.add(1, 'month'))),
    [selectedMonth.startOfMonth]
  )

  return (
    <main className="calendar">
      <CalendarHeader
        goBackMonth={goBackMonth}
        goForwardMonth={goForwardMonth}
        selectedMonthLabel={selectedMonth.monthLabel}
      />
      {Object.keys(selectedMonth.calendar)?.map(weekKey => (
        <CalendarWeek
          week={selectedMonth.calendar[parseInt(weekKey)]}
          weekIndex={parseInt(weekKey)}
          currentMonth={selectedMonth.monthLabel}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </main>
  )
}
