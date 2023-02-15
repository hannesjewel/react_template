import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'

class Ui extends React.Component {
  render(){
    return(
      <>
        <Helmet>
          <title>Ui | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Heading 1<br />Heading 1</h1>
                <h2 className='_heading-2'>Heading 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur, <strong>adipisicing elit</strong>. Delectus, libero nisi! Corrupti labore dolores recusandae assumenda exercitationem nihil sed fugiat, tempora, sunt quis quibusdam dicta cupiditate facere itaque repellat dolor.</p>
                <button className='_button'>Submit</button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Ui