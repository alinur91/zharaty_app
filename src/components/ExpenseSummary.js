import React, { Component } from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount,expensesTotal})=> {
 const expenseWord= expenseCount ===1?'expense':'expenses'
 const formattedExpensesTotal=numeral(expensesTotal/100).format('$0,0.00')
 return (
 <div>
    <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
 </div>
)
}

const mapStateToProps = ({expenses,filters})=>{
 const visibleExpenses=selectExpenses(expenses,filters)
  return {
   expenseCount: visibleExpenses.length,
   expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)