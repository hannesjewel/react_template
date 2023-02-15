import React from 'react'
import {Link} from 'react-router-dom'

class DashboardHome extends React.Component {
  render(){
    return(
      <section className="">
        <div className='_grid'>
          <div className='_column'>
            <div className="_breadcrumbs">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <h1 className='_heading'>Dashboard</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default DashboardHome