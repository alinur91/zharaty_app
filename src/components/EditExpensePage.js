import React, { Component } from 'react'
import {connect} from 'react-redux'
import ExpenseForm  from './ExpenseForm'
import {editExpense,removeExpense} from '../actions/expenses'


export class EditExpensePage extends Component{
  constructor(){
    super()
    this.onSubmit= this.onSubmit.bind(this)
    this.onRemove= this.onRemove.bind(this)
  }

  onSubmit = expense1=>{
      const {expense,editExpense,history:{push}}=this.props
            editExpense(expense.id,expense1)
            push('/')
  }

  onRemove = ()=>{
      const {removeExpense,history:{push},expense}=this.props
            removeExpense({id: expense.id})
          push('/')
  }

  render(){
      const {expense}=this.props
    return (
  <div>
   <ExpenseForm expense={expense}  onSubmit={this.onSubmit}/>
   <button onClick={this.onRemove}>Remove</button>
  </div>
)
  }
}

const mapStateToProps = ({expenses},{match:{params:{id:aidi}}})=>({expense: expenses.find(({id})=>id=== aidi)})

const mapDispatchToProps = dispatch =>({
  editExpense: (id,expense)=> dispatch(editExpense(id,expense)),
  removeExpense: id=> dispatch(removeExpense(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)