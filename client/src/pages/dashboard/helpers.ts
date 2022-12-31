import { Dayjs } from 'dayjs'
import { 
  CalendarWeeks,
  SelectedMonth,
} from './types'

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

export const getCalendarWeeks = (date: Dayjs): CalendarWeeks => {
  const weeks: CalendarWeeks = {
    0: [],
    1: [],
    2: [],
    3: []
  }
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
