import React from 'react'
import SignupForm from './forms/SignupForm'
import { Link} from 'react-router-dom'
import Helmet from 'react-helmet'
import {APP_TITLE} from '../config'
import {
  signUp
} from '../actions'
import {connect} from 'react-redux'

class Signup extends React.Component {

  onSubmit = formValues => {
    this.props.signUp(formValues)
  }

  render(){

    return(
      <>
        <Helmet>
          <title>Sign In | {APP_TITLE}</title>
        </Helmet>
        <section className='_section'>
          <div className='_grid'>
            <div className='_column'>
              <div className='_panel'>
                <h1 className='_heading-1'>Sign Up</h1>
                <SignupForm 
                  onSubmit={this.onSubmit}
                  errors={this.props.auth.errors ? this.props.auth.errors : null}
                  success={this.props.auth.success ? true : null}
                />
                <p>Already have an account? <Link to="/signin" style={{textDecoration: "underline"}}>Sign in</Link>.</p>
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
  signUp
})(Signup)