import React, { Component } from 'react'
import {BrowserRouter,Route, Switch,NavLink,Link} from 'react-router-dom'


const NotFoundPage = () => (
  <div>
     NotFoundPage 404!
     <NavLink to='/'>HOME</NavLink>
  </div>
)

export default NotFoundPage