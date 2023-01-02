import { Dayjs } from 'dayjs'

import './MonthCalendar.scss'
import { CalendarHeader } from '../../../components'
import { MonthCalendarWeek } from './MonthCalendarWeek'
import { SelectedDate, SelectedMonth } from '../types'

interface MonthCalendarProps {
  selectedMonth: SelectedMonth;
  selectedDate: SelectedDate | null;
  getSelectedDate: (day: Dayjs) => void;
  goBackMonth: () => void;
  goForwardMonth: () => void;
}

export const MonthCalendar = ({
  selectedMonth,
  selectedDate,
  getSelectedDate,
  goBackMonth,
  goForwardMonth,
}: MonthCalendarProps) => {
  
  return (
    <main className="month-calendar">
      <CalendarHeader
        goBack={goBackMonth}
        goForward={goForwardMonth}
        label={selectedMonth.monthLabel}
      />

      {Object.keys(selectedMonth.calendar)?.map(weekKey => (
        <MonthCalendarWeek
          week={selectedMonth.calendar[parseInt(weekKey)]}
          weekIndex={parseInt(weekKey)}
          currentMonth={selectedMonth.monthLabel}
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDate}
        />
      ))}
    </main>
  )
}
