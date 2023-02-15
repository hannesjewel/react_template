import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'

class Home extends React.Component {
  render(){
    return(
      <>
        <Helmet>
          <title>Home | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Home</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Home