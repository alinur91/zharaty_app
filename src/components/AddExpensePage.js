import React, { Component } from 'react'
import ExpenseDashboardPage from './ExpenseDashboardPage'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'
import {connect} from 'react-redux'


export class AddExpensePage extends Component {
  constructor(){
    super()
    this.onSubmit= this.onSubmit.bind(this)
  }
  onSubmit = (expense)=>{
     const {expenseKosu, dispatch,history:{push}} = this.props
     expenseKosu(expense)
     push('/')
  }

  render(){
    return (
  <div>
   <h1>Add Expense</h1>
   <ExpenseForm onSubmit={this.onSubmit} />
  </div>
)
  }
}

const mapDispatchToProps = (dispatch)=>({expenseKosu: expense => dispatch(addExpense(expense)) })

export default connect(undefined,mapDispatchToProps)(AddExpensePage)