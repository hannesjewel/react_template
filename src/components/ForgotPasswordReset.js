import React from 'react'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import Form from './forms/PasswordForgotResetForm'
import {forgotPasswordReset} from '../actions/password-forgot'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'

class ForgotPasswordReset extends React.Component {

  onSubmit = formValues => {
    this.props.forgotPasswordReset(formValues)
  }

  render(){

    if(!this.props.code)
    return <Navigate to="/forgot-password" />

    if(this.props.send.success)
    return <Navigate to="/signin" />

    return (
      <>
        <Helmet>
          <title>Forgot Password Reset  | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Forgot Password Reset </h1>
                <p>Reset Password</p>
                <Form
                    onSubmit={this.onSubmit} 
                    errors={this.props.send.errors ? this.props.send.errors : null}
                    code={this.props.code}
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
    send: state.forgotPasswordResetState,
    code: state.forgotPasswordOtpState.success ? state.forgotPasswordOtpState.success.code : null
  }
}

export default connect(mapStateToProps, {
  forgotPasswordReset
})(ForgotPasswordReset)