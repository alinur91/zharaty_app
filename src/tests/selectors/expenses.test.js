import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'


test('filter by text value',()=>{
  const result= selectExpenses(expenses,{text:'e',sortBy: 'date',startDate:undefined,endDate:undefined})
  expect(result).toEqual([expenses[2],expenses[1]])
})


test('filter by startDate',()=>{
  const result= selectExpenses(expenses,{text:'',sortBy: 'date',startDate:moment(0),endDate:undefined})
  expect(result).toEqual([expenses[2],expenses[0]])
})


test('filter by endDate',()=>{
  const result= selectExpenses(expenses,{text:'',sortBy: 'date',startDate:undefined,endDate:moment(0).add(15,'days')})
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('sortByDate',()=>{
  const result= selectExpenses(expenses,{text:'',sortBy: 'date',startDate:undefined,endDate:undefined})
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('sortByAmount',()=>{
  const result= selectExpenses(expenses,{text:'',sortBy: 'amount',startDate:undefined,endDate:undefined})
  expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})



