import React, { Component } from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'


test('should corr render ExpensesSummary with 1 expense',()=>{
 const wrapper = shallow(<ExpensesSummary expensesTotal={235} expenseCount={1}/>)
 expect(wrapper).toMatchSnapshot()
})


test('should corr render ExpensesSummary with multiple expenses',()=>{
 const wrapper = shallow(<ExpensesSummary expensesTotal={23512} expenseCount={23}/>)
 expect(wrapper).toMatchSnapshot()
})