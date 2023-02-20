import PropTypes from 'prop-types';
import css from '../Transaction/transactions.module.css';
export const Transaction = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={css.table__head}>Type</th>
          <th className={css.table__head}>Amount</th>
          <th className={css.table__head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr className={css.table__line} key={transaction.id}>
              <td className={css.table__item}>{transaction.type}</td>
              <td className={css.table__item}>{transaction.amount}</td>
              <td className={css.table__item}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
