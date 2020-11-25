import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({startDate,endDate}) =>{
    //  const {filters:{startDate,endDate,text,sortBy},dispatch} = this.props
     this.props.setStartDate(startDate)
     this.props.setEndDate(endDate)
  }
  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
  }

  onTextChange = e =>{
    this.props.setTextFilter(e.target.value)
  }

  onSortChange = e =>{
    const value= e.target.value
    value==='date'?this.props.sortByDate(): this.props.sortByAmount()
      
  }
  render(){
    const {filters:{startDate,endDate,text,sortBy},dispatch} = this.props
    const {calendarFocused} = this.state
    return (
  <div>
   <input onChange={this.onTextChange} value={text} />
   <select value={sortBy} onChange={this.onSortChange}>
     <option  value="date">sortByDate</option>
     <option  value="amount">sortByAmount</option>
   </select> 
   <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={calendarFocused}
      onFocusChange={this.onFocusChange}
      focusedInput={calendarFocused}
      onFocusChange={this.onFocusChange}
      numberOfMonths={1}
      isOutsideRange={()=>false}
      showClearDates={true }
   />
   </div>
)
  }
}


const mapStateToProps = ({filters})=>({filters})

const mapDispatchToPros = (dispatch)=> ({
  setTextFilter: text=> dispatch(setTextFilter(text)),
  sortByDate: value=> dispatch(sortByDate()),
  sortByAmount: value=> dispatch(sortByAmount()),
  setStartDate: startDate=> dispatch(setStartDate(startDate)),
  setEndDate: endDate=> dispatch(setEndDate(endDate)),
})

export default connect (mapStateToProps,mapDispatchToPros)(ExpenseListFilters)

 