import React, { Component } from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters,allFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate,wrapper

beforeEach(()=>{
  setTextFilter=jest.fn()
  sortByDate=jest.fn()
  sortByAmount=jest.fn()
  setStartDate=jest.fn()
  setEndDate=jest.fn()
  wrapper=shallow(<ExpenseListFilters setEndDate={setEndDate} setStartDate={setStartDate} sortByAmount={sortByAmount}  sortByDate={sortByDate} setTextFilter={setTextFilter} filters={filters}/>)
})

test('should render ExpenseListFilters correctly',()=>{
 expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly',()=>{
 wrapper.setProps({
  filters: allFilters
 })
 expect(wrapper).toMatchSnapshot()
})


test('should handle text change',()=>{
  const value = 'rent'
    wrapper.find('input').simulate('change', {
      target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sortBy Date',()=>{
  const value='date'
wrapper.setProps({
  filters: allFilters
 })
 wrapper.find('select').simulate('change',{target:{value}})
 expect(sortByDate).toHaveBeenCalled()
})

test('should sortBy amount',()=>{
const value='amount'

 wrapper.find('select').simulate('change',{target:{value}})
 expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes',()=>{
  const startDate = moment(0).add(4,'years')
  const endDate = moment(0).add(8,'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes',()=>{
  const calendarFocused='endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
}) 