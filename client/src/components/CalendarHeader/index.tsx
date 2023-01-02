import './CalendarHeader.scss'
import ArrowIcon from '../../assets/svg/002-right.svg'

interface CalendarHeaderProps {
  goBack: () => void;
  goForward: () => void;
  label: string;
}

export const CalendarHeader = ({
  goBack,
  goForward,
  label,
}: CalendarHeaderProps) => {
  return (
    <header className="calendar-header">
      <button
        className="calendar-nav"
        onClick={goBack}
      >
        <img
          className="back-arrow"
          alt="arrow pointing left"
          title="go to previous month"
          src={ArrowIcon}
        />
      </button>

      <h2>{label}</h2>

      <button
        className="calendar-nav"
        onClick={goForward}
      >
        <img
          alt="arrow pointing right"
          title="go to next month"
          src={ArrowIcon}
        />
      </button>
    </header>
  )
}