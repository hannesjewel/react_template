import React from 'react'
import ContactForm from './forms/ContactForm'
import {Navigate} from 'react-router-dom'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import {
  sendContactMessage
} from '../actions'
import {connect} from 'react-redux'

class Contact extends React.Component {

  onSubmit = formValues => {
    this.props.sendContactMessage(formValues)
  }

  render(){

    if(this.props.response.success)
    return <Navigate to="/contact/thankyou" />

    return(
      <>
        <Helmet>
          <title>Contact Us | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
              <h1 className='_heading-1'>Contact Us</h1>
                <ContactForm 
                  onSubmit={this.onSubmit}
                  errors={this.props.response.errors ? this.props.response.errors : null}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    response: state.contactState
  }
}

export default connect(mapStateToProps, {
  sendContactMessage
})(Contact)