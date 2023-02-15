import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'

class PageNotFound extends React.Component {
  render(){
    return(
      <>
        <Helmet>
          <title>404 | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <h1 className='_heading-1'>404 Page Not Found</h1>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default PageNotFound