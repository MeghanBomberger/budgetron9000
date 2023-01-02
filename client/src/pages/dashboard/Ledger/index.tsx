import './Ledger.scss'
import { SelectedDate } from '../types'
import { LedgerLine } from './LedgerLine'
import dayjs from 'dayjs';

interface LedgerProps {
  selectedDate: SelectedDate | null;
}

export const Ledger = ({
  selectedDate,
}: LedgerProps) => {
  return (
    <aside className="ledger">
      <header className="ledger-header">
        <h2>{selectedDate?.date.format('MMMM D, YYYY') || 'No date selected'}</h2>
      </header>

      <table>
        <thead>
          <tr>
            <th 
              className="credit-header"
              colSpan={4}
            >
              Credit
            </th>
            <th 
              className="debit-header"
              colSpan={4}
            >
              Debit
            </th>
            <th className="balance-header">Balance</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <LedgerLine
            transaction={{
              date: selectedDate?.date || dayjs(),
              description: 'test',
              amount: 0,
            }}
            balance={3}
          />
          <LedgerLine
            transaction={{
              date: selectedDate?.date || dayjs(),
              description: 'test',
              amount: 2,
            }}
            balance={5}
          />
          <LedgerLine
            transaction={{
              date: selectedDate?.date || dayjs(),
              description: 'test',
              amount: -8,
            }}
            balance={-3}
          />
        </tbody>
      </table>
    </aside>
  )
}
