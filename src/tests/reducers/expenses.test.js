import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'


test('default state', ()=>{
 const state =expensesReducer(undefined,{type: '@@INIT'})
 expect(state).toEqual([])
})

test('add_expense',()=>{
 const expense ={id: '123',note:'',createdAt: 2000,amount: 123,description: 'yahoo!!',startDate: undefined,endDate: undefined}
 const action = {type: 'ADD_EXPENSE',expense}
 const state= expensesReducer(expenses,action)
 expect(state).toEqual([...expenses,expense])
})

test('remove_expense',()=>{
 const action = {type: 'REMOVE_EXPENSE',id: expenses[0].id}
 const state= expensesReducer(expenses,action)
 expect(state).toEqual([expenses[1],expenses[2]])
})

test('not remove_expense if id not found',()=>{
 const action = {type: 'REMOVE_EXPENSE',id: '-1'}
 const state= expensesReducer(expenses,action)
 expect(state).toEqual(expenses)
})

test('EDIT_EXPENSE',()=>{
 const description = 'alpha chad'
 const action = {type: 'EDIT_EXPENSE',id: expenses[0].id, updates: {description}}
 const state= expensesReducer(expenses,action)
 expect(state[0].description).toBe(description)
})

test('should not EDIT_EXPENSE',()=>{
 const description = 'alpha chad'
 const action = {type: 'EDIT_EXPENSE',id: '9999666', updates: {description}}
 const state= expensesReducer(expenses,action)
 expect(state).toEqual(expenses)
})