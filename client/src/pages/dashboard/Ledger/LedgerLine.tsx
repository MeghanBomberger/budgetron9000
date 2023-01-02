import { formatToCurrency } from "../helpers";
import { Transaction } from "../types";
import EditIcon from '../../../assets/svg/pen.svg'

interface LedgerProps {
  transaction: Transaction;
  balance: number;
}

export const LedgerLine = ({
  transaction,
  balance,
}: LedgerProps) => {

  return (
    <tr
      className="ledger-line"
    >
      {(transaction.amount > 0 && transaction.amount !== 0)
        ? (
          <>
            <td
              className="credit-desc"
              colSpan={3}
            >
              {transaction.description}
            </td>
            <td className="credit-value">
              {formatToCurrency(transaction.amount)}
            </td>
          </>
        )
        : (
          <td
            className="credit-blank"
            colSpan={4}
          />
        )
      }

      {(transaction.amount < 0 && transaction.amount !== 0)
        ? (
          <>
            <td
              className="debit-desc"
              colSpan={3}
            >
              {transaction.description}
            </td>
            <td className="debit-value">
              {formatToCurrency(transaction.amount)}
            </td>
          </>
        )
        : (
          <td
            className="debit-blank"
            colSpan={4}
          />
        )
      }

      <td className="balance">{!!balance ? formatToCurrency(balance) : ''}</td>

      <td className="edit-cell">
        <button>
          <img
            alt="pencil"
            title="edit transaction"
            src={EditIcon}
          />
        </button>
      </td>
    </tr>
  )
}