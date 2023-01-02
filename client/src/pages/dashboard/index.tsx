import dayjs, { Dayjs } from 'dayjs'
import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import './Dashboard.scss'
import {
  getSelectedMonth,
  getSelectedYear,
  viewsList,
} from './helpers'
import {
  SelectedDate,
  SelectedMonth,
  SelectedYear,
} from './types'
import { Header } from '../../components'
import { MonthCalendar } from './MonthCalendar'
import { YearCalendar } from './YearCalendar'
import { Ledger } from './Ledger'
import { GraphView } from './GraphView'

export const Dashboard = () => {
  const now = dayjs()
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    date: now,
  })
  const [selectedMonth, setSelectedMonth] = useState<SelectedMonth>(getSelectedMonth(now))
  const [selectedYear, setSelectedYear] = useState<SelectedYear>(getSelectedYear(selectedDate.date))
  const [selectedView, setSelectedView] = useState<string>(viewsList.year)

  const syncViews = useCallback(
    (date: Dayjs) => {
      if (!date.isSame(selectedMonth.startOfMonth, 'month')) {
        setSelectedMonth(getSelectedMonth(date))
      }
      if (!date.isSame(selectedYear.startOfYear, 'year')) {
        setSelectedYear(getSelectedYear(date))
      }
    },
    [
      selectedMonth.startOfMonth,
      selectedYear.startOfYear
    ]
  )

  const getSelectedDate = useCallback(
    (day: Dayjs) => {
      setSelectedDate({
        date: day,
      })
      syncViews(day)
    },
    [
      setSelectedDate,
      syncViews
    ]
  )

  const goToToday = useCallback(
    () => {
      getSelectedDate(dayjs())
      syncViews(dayjs())
    },
    [
      getSelectedDate,
      syncViews,
    ]
  )

  const goBackMonth = useCallback(
    () => setSelectedMonth(getSelectedMonth(selectedMonth.startOfMonth.subtract(1, 'month'))),
    [selectedMonth.startOfMonth]
  )

  const goForwardMonth = useCallback(
    () => setSelectedMonth(getSelectedMonth(selectedMonth.startOfMonth.add(1, 'month'))),
    [selectedMonth.startOfMonth]
  )

  const goBackYear = useCallback(
    () => setSelectedYear(getSelectedYear(selectedYear.startOfYear.subtract(1, 'year'))),
    [selectedYear.startOfYear]
  )

  const goForwardYear = useCallback(
    () => setSelectedYear(getSelectedYear(selectedYear.startOfYear.add(1, 'year'))),
    [selectedYear.startOfYear]
  )

  useEffect(() => {
    if (!selectedDate?.date) {
      setSelectedYear(
        getSelectedYear(
          dayjs().startOf('year')
        )
      )
      setSelectedMonth(
        getSelectedMonth(
          dayjs().startOf('month')
        )
      )
    }
  }, [selectedDate?.date])

  return (
    <div className="dashboard">

      <Header
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        selectedDate={selectedDate.date}
        selectedMonth={selectedMonth.startOfMonth}
        selectedYear={selectedYear.startOfYear}
        goToToday={goToToday}
      />

      <Ledger
        selectedDate={selectedDate}
      />

      {selectedView === viewsList.month && (
        <MonthCalendar
          selectedMonth={selectedMonth}
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDate}
          goBackMonth={goBackMonth}
          goForwardMonth={goForwardMonth}
        />
      )}

      {selectedView === viewsList.year && (
        <YearCalendar
          selectedDate={selectedDate}
          getSelectedDate={getSelectedDate}
          selectedYear={selectedYear}
          goBackYear={goBackYear}
          goForwardYear={goForwardYear}
        />
      )}

      {selectedView === viewsList.graph && (
        <GraphView/>
      )}

    </div>
  )
}
