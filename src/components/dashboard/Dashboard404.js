import React from 'react'
import {Link} from 'react-router-dom'

class Dashboard404 extends React.Component {

  render(){

    return(
      <section className="">
        <div className='_grid'>
          <div className='_column'>
            <div className="_breadcrumbs">
              <Link to="/dashboard">Dashboard</Link> / 404 Not Found
            </div>
            <h1 className='_heading'>My Not Found</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard404