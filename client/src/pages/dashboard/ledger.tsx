import './Ledger.scss'
import { SelectedDate } from './types'

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
    </aside>
  )
}
