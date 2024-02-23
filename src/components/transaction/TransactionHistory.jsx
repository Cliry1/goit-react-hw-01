import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {


  return (
    <table className={css.table}>
  <thead className={css.tableHead}>
    <tr >
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody >
  {
  items.map(trx =>{
    return (
    <tr  key={trx.id}>
      <td >{trx.type}</td>
      <td >{trx.amount}</td>
      <td >{trx.currency}</td>
    </tr>
    )})
  }
  </tbody>
</table>
  )
}

