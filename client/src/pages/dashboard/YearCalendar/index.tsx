import  { Dayjs } from "dayjs";

import './YearCalendar.scss'
import { SelectedDate, SelectedYear } from "../types"
import { CalendarHeader } from "../../../components";
import { MonthCard } from "./MonthCard";

interface YearCalendarProps {
  selectedYear: SelectedYear;
  selectedDate: SelectedDate;
  getSelectedDate: (date: Dayjs) => void;
  goBackYear: () => void;
  goForwardYear: () => void;
}

export const YearCalendar = ({
  selectedYear,
  selectedDate,
  getSelectedDate,
  goBackYear,
  goForwardYear,
}: YearCalendarProps) => {

  return (
    <main className="year-calendar">
      <CalendarHeader
        goBack={goBackYear}
        goForward={goForwardYear}
        label={selectedYear.yearLabel}
      />

      {Object.keys(selectedYear.calendar).map(monthKey => (
        <MonthCard
          key={`month-card-${monthKey}`}
          month={selectedYear.calendar[monthKey]}
          monthLabel={monthKey}
          selectedDate={selectedDate.date}
          getSelectedDate={getSelectedDate}
        />
      ))}
    </main>
  )
}
