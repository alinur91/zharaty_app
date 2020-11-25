import React, { Component } from 'react'
import {BrowserRouter,Route, Switch,NavLink,Link} from 'react-router-dom'


const Header = () => (
  <header>
   <h1>Expensify</h1>
   <NavLink exact activeClassName='is-active' to='/'>Dashboard</NavLink>
   <NavLink activeClassName='is-active' to='/create'>create expense page</NavLink>
  </header>
)

export default Header