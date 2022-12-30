import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

import './dashboard.scss'
import { Calendar } from './calendar'
import { Ledger } from './ledger'
import { Header } from '../../components/'

export const Dashboard = () => {
  const [now, setNow] = useState<Dayjs>(dayjs())

  return (
    <div className="dashboard">

      <Header />

      <Ledger />

      <Calendar
        now={now}
      />

    </div>
  )
}
