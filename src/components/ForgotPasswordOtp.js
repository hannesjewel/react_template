import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import Form from './forms/PasswordForgotOtpForm'
import {forgotPasswordOtp} from '../actions/password-forgot'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

class ForgotPasswordOtp extends React.Component {

  onSubmit = formValues => {
    this.props.forgotPasswordOtp(formValues)
  }

  render(){

    if(this.props.send.success)
    return <Navigate to="/forgot-password/reset" />

    return (
      <>
        <Helmet>
          <title>Forgot Password OTP | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Forgot Password OTP</h1>
                <p>We've emailed you an OTP. Please verify it's you</p>
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
    send: state.forgotPasswordOtpState
  }
}

export default connect(mapStateToProps, {
  forgotPasswordOtp
})(ForgotPasswordOtp)