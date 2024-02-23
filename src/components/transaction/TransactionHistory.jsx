import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {


  return (
    <table className={css.table}>
  <thead className={css.thead}>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
  {
  items.map(trx =>{
    return (
    <tr  key={trx.id}>
      <td className={css.td}>{trx.type}</td>
      <td className={css.td}>{trx.amount}</td>
      <td className={css.td}>{trx.currency}</td>
    </tr>
    )})
  }
  </tbody>
</table>
  )
}

