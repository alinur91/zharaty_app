import {AddExpensePage} from '../../components/AddExpensePage'
import React, { Component } from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'


let expenseKosu,history,wrapper

beforeEach(()=>{
     expenseKosu = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<AddExpensePage history={history} expenseKosu={expenseKosu}/>)
})

test('ADD_EXPENSE_PAGE',()=>{
 expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', ()=>{
 wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
 expect(history.push).toHaveBeenLastCalledWith('/')
 expect(expenseKosu).toHaveBeenLastCalledWith(expenses[1])
})