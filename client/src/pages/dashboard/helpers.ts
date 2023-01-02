import { Dayjs } from 'dayjs'
import { 
  CalendarWeeks,
  SelectedMonth,
  SelectedYear,
  ViewsList,
} from './types'

export const viewsList: ViewsList = {
  graph: 'graph',
  month: 'month',
  year: 'year',
}

export const monthLabelFormat = 'MMMM YYYY'

export const getCalendarDays = (date: Dayjs): Dayjs[] => {
  const days: Dayjs[] = []
  const lengthOfMonth = date.daysInMonth()
  const startOfMonth = date.startOf('M')
  for (let i = 0; i < lengthOfMonth; i++) {
    if (i === 0) {
      days.push(startOfMonth)
    } else {
      days.push(days[days.length - 1].add(1, 'd'))
    }
  }
  return days
}

const defaultCalendarWeeks: CalendarWeeks = {
    0: [],
    1: [],
    2: [],
    3: []
  }

export const getCalendarWeeks = (date: Dayjs): CalendarWeeks => {
  const weeks = {...defaultCalendarWeeks}
  const days = getCalendarDays(date)
  const startOfMonth = days[0]
  const startOfMonthDayOfWeek = parseInt(startOfMonth.format('d'))
  const startOfMonthFillIn = 0 - startOfMonthDayOfWeek
  const lengthOfMonth = date.daysInMonth()
  const endOfMonth = days[lengthOfMonth - 1]
  const endOfMonthDayOfWeek = parseInt(endOfMonth.format('d'))
  const endOfMonthFillIn = 6 - endOfMonthDayOfWeek
  for (let i = -1; i >= startOfMonthFillIn; i--) {
    days.unshift(startOfMonth.add(i, 'day'))
  }
  for (let i = 1; i <= endOfMonthFillIn; i++) {
    days.push(endOfMonth.add(i, 'day'))
  }
  for (let i = 0; i <= 4; i++ ) {
    if (
      i === 4 && 
      lengthOfMonth === 28 && 
      startOfMonthDayOfWeek === 0 &&
      days?.length === 0
    ) {
      break
    }
    const week = days.splice(0, 7)
    weeks[i] = week
  }
  return weeks
}

export const getSelectedMonth = (date: Dayjs): SelectedMonth => {
  return {
    monthLabel: date.format(monthLabelFormat),
    startOfMonth: date.startOf('month'),
    calendar: getCalendarWeeks(date)
  }
}

export const getSelectedYear = (date: Dayjs): SelectedYear => {
  return {
    yearLabel: date.format('YYYY'),
    startOfYear: date.startOf('year'),
    calendar: {
      january: getSelectedMonth(date.month(0)).calendar,
      february: getSelectedMonth(date.month(1)).calendar,
      march: getSelectedMonth(date.month(2)).calendar,
      april: getSelectedMonth(date.month(3)).calendar,
      may: getSelectedMonth(date.month(4)).calendar,
      june: getSelectedMonth(date.month(5)).calendar,
      july: getSelectedMonth(date.month(6)).calendar,
      august: getSelectedMonth(date.month(7)).calendar,
      september: getSelectedMonth(date.month(8)).calendar,
      october: getSelectedMonth(date.month(9)).calendar,
      november: getSelectedMonth(date.month(10)).calendar,
      december: getSelectedMonth(date.month(11)).calendar,
    }
  }
}
