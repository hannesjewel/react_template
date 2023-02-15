import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import Form from './forms/PasswordForgotForm'
import {forgotPassword} from '../actions/password-forgot'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

class ForgotPassword extends React.Component {

  onSubmit = formValues => {
    this.props.forgotPassword(formValues)
  }

  render(){

    if(this.props.send.success)
    return <Navigate to="/forgot-password/otp" />

    return (
      <>
        <Helmet>
          <title>Forgot Password | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Forgot Password</h1>
                <p>Send Password Reset Link</p>
                <Form
                    onSubmit={this.onSubmit} 
                    errors={this.props.send.errors ? this.props.send.errors : null}
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
  return{
    send: state.forgotPasswordState
  }
}

export default connect(mapStateToProps, {
  forgotPassword
})(ForgotPassword)