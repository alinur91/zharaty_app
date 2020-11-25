import {EditExpensePage} from '../../components/EditExpensePage'
import React, { Component } from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'


let editExpense,history,wrapper,removeExpense

beforeEach(()=>{
     editExpense = jest.fn()
     removeExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} history={history} editExpense={editExpense}/>)
})


test('should render EditExpensePage',()=>{
 expect(wrapper).toMatchSnapshot()
})

test('should handle EditExpensePage',()=>{
 wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
 expect(history.push).toHaveBeenLastCalledWith('/')
 expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})

test('should handle removeExpense',()=>{
wrapper.find('button').simulate('click') 
 expect(history.push).toHaveBeenLastCalledWith('/')
 expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
})