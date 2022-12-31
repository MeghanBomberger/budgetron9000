import { Dayjs } from 'dayjs'
import { useCallback, useState } from 'react'
import { CalendarHeader } from './calendar-header'

import './calendar.scss'
import { CalendarWeek } from './CalendarWeek'
import { getSelectedMonth } from './helpers'
import { SelectedMonth } from './types'

interface CalendarProps {
  now: Dayjs;
}

export const Calendar = ({
  now,
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
        />
      ))}
    </main>
  )
}
