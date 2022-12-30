import { Dayjs } from 'dayjs'
import { SelectedMonth } from './types'

export const getSelectedMonth = (
  date: Dayjs
): SelectedMonth => {
  return {
    monthLabel: date.format('MMMM YYYY'),
    startOfMonth: date.startOf('month'),
  }
}
