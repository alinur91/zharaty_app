import React, { Component } from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = ({expenses})=>(
 <div>
   <div>
     {
       expenses.length===0? (<p>No expenses</p>) :(expenses.map(expense=> <ExpenseListItem key={expense.id} {...expense}/>))
     }
    
   </div>
  
 </div>
)

const mapStateToProps = ({expenses,filters})=>{
  return {
   expenses: selectExpenses(expenses,filters),
   filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
