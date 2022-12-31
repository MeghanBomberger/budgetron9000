import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import './Dashboard.scss'
import { SelectedDate } from './types'
import { Calendar } from './Calendar'
import { Ledger } from './Ledger'
import { Header } from '../../components'

export const Dashboard = () => {
  const [now, setNow] = useState<Dayjs>(dayjs())
  const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null)

  return (
    <div className="dashboard">

      <Header />

      <Ledger 
        selectedDate={selectedDate}
      />

      <Calendar
        now={now}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

    </div>
  )
}
