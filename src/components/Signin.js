import React from 'react'
import SigninForm from './forms/SigninForm'
import {Navigate, Link} from 'react-router-dom'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import {
  signIn
} from '../actions'
import {connect} from 'react-redux'

class Signin extends React.Component {

  state = {
    success: null
  }

  onSubmit = formValues => {
    this.props.signIn(formValues)
  }

  render(){

    if(this.props.auth.token)
    return <Navigate to="/dashboard" />

    return(
      <>
        <Helmet>
          <title>Sign In | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Sign In</h1>
                <SigninForm 
                  onSubmit={this.onSubmit}
                  errors={this.props.auth.errors ? this.props.auth.errors : null}
                />
                <p>Don't have an account? <Link to="/signup" style={{textDecoration: "underline"}}>Sign up</Link>.
                </p>
                <p className='_forgot-password' style={{textDecoration: 'underline'}}><Link to="/forgot-password">Forgot my password?</Link></p>
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
    auth: state.authState
  }
}

export default connect(mapStateToProps, {
  signIn
})(Signin)