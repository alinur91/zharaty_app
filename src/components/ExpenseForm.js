import React, { Component } from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends Component {
  constructor(props){
    super(props)
     this.state={
  description: props.expense?props.expense.description:'',
  note: props.expense?props.expense.note:'',
  amount:  props.expense?(props.expense.amount/100).toString():'',
  createdAt: props.expense?moment(props.expense.createdAt): moment(),
  calendarFocused: false,
  error: ''
 }

  }

 onDescriptionChange = e =>{
   const description= e.target.value
   this.setState(()=> ({description}))
 }

  onNoteChange = e =>{
   const note= e.target.value
   this.setState(()=> ({note}))
 }

onAmountChange = e =>{
      const amount = e.target.value
      if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(()=>({amount}))
}

onDateChange = (createdAt)=>{
  if(createdAt)this.setState(()=>({createdAt}))
    
}

onSubmit = e =>{
  e.preventDefault()
  const {description,note,amount,createdAt,calendarFocused,error}= this.state

  if(!description || !amount){
    this.setState(()=>({error: 'Please provide description and amount'}))
  }else{
        this.setState(()=>({error: ''}))
        this.props.onSubmit({
          description,
          amount: parseFloat(amount,10)*100,
          createdAt: createdAt.valueOf(),
          note
        })
  }
}

 render(){
  const {description,note,amount,createdAt,calendarFocused,error}= this.state
  return (
   <div>
     {error && <p>{error} </p>}
      <form onSubmit={this.onSubmit}>
       <input name='description' onChange={this.onDescriptionChange} value={description} autoFocus placeholder="Description"/>
       <input value={amount} onChange={this.onAmountChange} name='amount'  placeholder="Amount"/>
       <SingleDatePicker date={createdAt} // momentPropTypes.momentObj or null
  onDateChange={this.onDateChange} // PropTypes.func.isRequired
  focused={calendarFocused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({calendarFocused: focused })}
  numberOfMonths={1} isOutsideRange={()=> false}
  />
       <textarea name='note' value={note} onChange={this.onNoteChange} placeholder="Add a note for your expense" id="" ></textarea>
       <button>Add Expense</button>
      </form>
   </div>
  )
 }
}


 