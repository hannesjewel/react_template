import React from 'react'
import {
    Field,
    reduxForm
} from 'redux-form'

import {
    Input
} from './fields'

class PasswordForgotResetForm extends React.Component {

    renderErrors = () => {

        if(!this.props.errors){
            return <></>
        }

        if(typeof this.props.errors === 'string'){
            return (
                <div className="_error-group">
                    <div className="_error-message">{this.props.errors}</div>
                </div>
            )
        }

        return Object.values(this.props.errors).map((item, index) => {   
            return (
                <div className="_error-group" key={index}>
                    <div className="_error-message">{item[0]}</div>
                </div>
            )
        })
    }

    onSubmit = formValues => {

      const data = new FormData()
      formValues.password && data.append('password', formValues.password)
      formValues.password_confirmation && data.append('password_confirmation', formValues.password_confirmation)
      this.props.code && data.append('code', this.props.code)
      this.props.onSubmit(data)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="_form-row">
                    <Field name="password" type="password" component={Input} label="Enter New Password" />
                </div>
                <div className="_form-row">
                    <Field name="password_confirmation" type="password" component={Input} label="Confirm Password" />
                </div>
                <div className="_form-group">
                  <br />
                    <button className='_button _button-2 _button-submit'>Submit</button>
                </div>
                <br />
                {this.props.errors && this.renderErrors()}
            </form>
        )
    }
}

const validate = formValues => {

    const errors = {}

    if(!formValues.password){
        errors.password = "You must enter a password"
    }

    if(!formValues.password_confirmation){
      errors.password_confirmation = "You must confirm your password"
  }

    return errors
}

export default reduxForm({
    form: 'passwordforgotreset',
    validate
})(PasswordForgotResetForm)