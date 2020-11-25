// A component(HOC) that renders another component - HOC

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
 <div>
  <h1>Ingfo</h1>
  <p>The info is: {props.info}</p>
 </div>
)

const withAdminWarning=(WrappedComponent)=>{
  return (props) =>
     <div>
      {props.isAdmin && <p>This is priveate info.Pls don't share!</p>}
      <WrappedComponent {...props}/>
     </div>
}

const requireAuthentication = (WrappedComponent)=>props=> <div>{props.isAuthenticated?<WrappedComponent {...props} />: <p>not authenticated</p>}</div>

const AdminInfo= withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='detail'/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='detail'/>,document.getElementById('app'))