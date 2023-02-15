import React from 'react'
import {
    Field,
    reduxForm
} from 'redux-form'

import {
    Input
} from './fields'

class PasswordForgotForm extends React.Component {

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
        this.props.onSubmit(formValues)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="_form-row">
                    <Field name="email" type="email" component={Input} label="Enter Email Address" />
                </div>
                <br />
                
                <div className="_form-group">
                    <button className='_button _button-2 _button-submit'>Send</button>
                </div>
                <br />
                {this.props.errors && this.renderErrors()}
            </form>
        )
    }
}

const validate = formValues => {

    const errors = {}

    if(!formValues.email){
        errors.email = "You must enter your email"
    }

    return errors
}

export default reduxForm({
    form: 'passwordforgot',
    validate
})(PasswordForgotForm)