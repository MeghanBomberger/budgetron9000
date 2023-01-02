import dayjs, { Dayjs } from 'dayjs';

import './Header.scss'
import { getSelectedMonth, viewsList } from '../../pages/Dashboard/helpers';
import MonthViewIcon from '../../assets/svg/071-30-days.svg'
import YearViewIcon from '../../assets/svg/070-annual-calendar.svg'
import GraphViewIcon from '../../assets/svg/statistics.svg'
import { useCallback } from 'react';
import { SelectedMonth, SelectedYear } from '../../pages/Dashboard/types';

interface HeaderProps {
  selectedView: string;
  setSelectedView: (view: string) => void;
  selectedDate: Dayjs;
  selectedMonth: Dayjs;
  selectedYear: Dayjs;
  goToToday: () => void;
}

export const Header = ({
  selectedView,
  setSelectedView,
  goToToday,
  selectedDate,
  selectedMonth,
  selectedYear,
}: HeaderProps) => {

  return (
    <header className="header">
      <h1>Budgetron9000</h1>

      <div className="icon-container">

        {(
          !selectedDate.isSame(dayjs(), 'day') ||
          !selectedMonth.isSame(dayjs(), 'month') ||
          !selectedYear.isSame(dayjs(), 'year')
        ) && (
          <button
            className="today-button"
            onClick={goToToday}
          >
            Today
          </button>
        )}
        
        {selectedView !== viewsList.month && (
          <button 
            className="icon-button"
            onClick={() => setSelectedView(viewsList.month)}
          >
            <img
              alt="month calendar"
              title="month view"
              src={MonthViewIcon}
            />
          </button>
        )}

        {selectedView !== viewsList.year && (
          <button
            className="icon-button"
            onClick={() => setSelectedView(viewsList.year)}
          >
            <img
              alt="year calendar"
              title="year view"
              src={YearViewIcon}
            />
          </button>
        )}

        {selectedView !== viewsList.graph && (
          <button
            className="icon-button"
            onClick={() => setSelectedView(viewsList.graph)}
          >
            <img
              alt="line graph"
              title="graph view"
              src={GraphViewIcon}
            />
          </button>
        )}

      </div>
    </header>
  )
}
