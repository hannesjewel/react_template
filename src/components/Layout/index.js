import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import '../../assets/scss/app.scss'

class Layout extends React.Component{
  render(){
    return(
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ui">UI</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
        <Outlet />
      </>
    )
  }
}

export default Layout