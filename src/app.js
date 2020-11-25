import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense,removeExpense,editExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

store.dispatch(addExpense({description:'water bill',amount: 4500}))
store.dispatch(addExpense({description: 'gas bill',createdAt: 1000}))
store.dispatch(addExpense({description: 'internet bill',amount: 14500,createdAt: 10000}))
// store.dispatch(setTextFilter('water'))
const state = store.getState()
console.log(getVisibleExpenses(state.expenses,state.filters))

// setTimeout(()=> store.dispatch(setTextFilter('bill')),2000)


const jsx = (
 <Provider store={store}>
   <AppRouter />
 </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))


