import {BrowserRouter,Route, Switch,NavLink,Link} from 'react-router-dom'
import React, { Component } from 'react'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'


const AppRouter = ()=>(
<BrowserRouter>
 <div>
 <Header/>
   <Switch>
    <Route exact path='/' component={ExpenseDashboardPage}/>
    <Route path='/create' component={AddExpensePage}/>
    <Route path='/edit/:id' component={EditExpensePage}/>
    <Route path='/help' component={HelpPage}/>
    <Route component={NotFoundPage}/>
   </Switch>
 </div>
 </BrowserRouter>
)

export default AppRouter