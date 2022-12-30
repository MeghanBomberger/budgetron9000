import { Dayjs } from 'dayjs'
import { useCallback, useState } from 'react'

import './calendar.scss'
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

      <header className="calendar-header">
        <button
          className="calendar-nav"
          onClick={() => {
            goBackMonth()
            console.log("go back")
          }}
        >
          {'<'}
        </button>

        <h2>{selectedMonth.monthLabel}</h2>

        <button
          className="calendar-nav"
          onClick={() => {
            goForwardMonth()
            console.log("go back")
          }}
        >
          {'>'}
        </button>
      </header>

    </main>
  )
}
