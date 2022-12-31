interface CalendarHeaderProps {
  goBackMonth: () => void;
  goForwardMonth: () => void;
  selectedMonthLabel: string;
}

export const CalendarHeader = ({
  goBackMonth,
  goForwardMonth,
  selectedMonthLabel,
}: CalendarHeaderProps) => {
  return (
    <header className="calendar-header">
      <button
        className="calendar-nav"
        onClick={goBackMonth}
      >
        {'<'}
      </button>

      <h2>{selectedMonthLabel}</h2>

      <button
        className="calendar-nav"
        onClick={goForwardMonth}
      >
        {'>'}
      </button>
    </header>
  )
}