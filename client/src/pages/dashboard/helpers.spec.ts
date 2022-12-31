import dayjs from 'dayjs'

import { 
  getSelectedMonth,
  getCalendarDays,
  getCalendarWeeks,
} from './helpers'

const testDate = dayjs('Feb 1, 2023')
const fourWeekFeb = dayjs('Feb 1, 2026')

describe('getCalendarDays', () => {
  test("should have full month of dates", () => {
    expect(getCalendarDays(testDate).length).toBe(28)
  })
  test("first day should be 2-1-2023", () => {
    expect(getCalendarDays(testDate)[0].format("M-D-YYYY")).toBe("2-1-2023")
  })
  test("last day should be 2-28-2023", () => {
    expect(getCalendarDays(testDate)[27].format("M-D-YYYY")).toBe("2-28-2023")
  })
})

describe("getCalendarWeeks", () => {
  test("fills out start week", () => {
    expect(getCalendarWeeks(testDate)[0][0].format('M-D-YYYY')).toBe('1-29-2023')
    expect(getCalendarWeeks(testDate)[0][6].format('M-D-YYYY')).toBe('2-4-2023')
  })
  test("jan 2023 has 5th week", () => {
    expect(getCalendarWeeks(testDate)[4]).toBeTruthy()
  })
  test("fills out end week", () => {
    expect(getCalendarWeeks(testDate)[4][0]).toBeTruthy()
    expect(getCalendarWeeks(testDate)[4][0]?.format('M-D-YYYY')).toBe('2-26-2023')
    expect(getCalendarWeeks(testDate)[4][6].format('M-D-YYYY')).toBe('3-4-2023')
  })
  test("no sixth week", () => {
    expect(getCalendarWeeks(testDate)[5]).toBeFalsy()
  })
  test("feb 2026 does have 5th week", () => {
    expect(getCalendarWeeks(fourWeekFeb)[4]).toBeFalsy()
  })
})

describe('getSelectedMonth', () => {
  test("monthLabel", () => {
    expect(getSelectedMonth(testDate).monthLabel).toStrictEqual('February 2023')
  })
  test("startOfMonth", () => {
    expect(getSelectedMonth(testDate).startOfMonth.format('D')).toBe('1')
    expect(getSelectedMonth(testDate).startOfMonth.format('M')).toBe('2')
    expect(getSelectedMonth(testDate).startOfMonth.format('YYYY')).toBe('2023')
  })
  test("calendar", () => {
    expect(getSelectedMonth(testDate).calendar[0].length).toBe(7)
    expect(getSelectedMonth(testDate).calendar[1].length).toBe(7)
    expect(getSelectedMonth(testDate).calendar[2].length).toBe(7)
    expect(getSelectedMonth(testDate).calendar[3].length).toBe(7)
    expect(getSelectedMonth(testDate).calendar[4].length).toBe(7)
  })
})