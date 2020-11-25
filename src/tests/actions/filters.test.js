import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

test('setTextFilter',()=>{
  const text='random'
  expect(setTextFilter(text)).toEqual({
  type: 'SET_TEXT_FILTER',
  text
})
})

test('setTextFilter default',()=>{
  expect(setTextFilter()).toEqual({
  type: 'SET_TEXT_FILTER',
  text: ''
})
})

test('sortByAmount',()=>{
  expect(sortByAmount()).toEqual({
   type: 'SORT_BY_AMOUNT'
  
})
})

test('sortByDate',()=>{
  expect(sortByDate()).toEqual({
   type: 'SORT_BY_DATE'
})
})

test('setStartDate',()=>{
  expect(setStartDate(moment(0))).toEqual({
   type: 'SET_START_DATE',
   startDate: moment(0)
  
})
})

test('setEndDate',()=>{
  expect(setEndDate(moment(10))).toEqual({
   type: 'SET_END_DATE',
   endDate: moment(10)
})
})

