import React, { Component } from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'


test('render single expense',()=>{
 const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
 expect(wrapper).toMatchSnapshot()
})