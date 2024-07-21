import css from "./TransactionHistory.module.css";

import TransactionItem from "../TransactionItem/TransactionItem";

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tr}>
              <TransactionItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
