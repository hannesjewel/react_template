import React from 'react'
import {
    Field,
    reduxForm
} from 'redux-form'

import {
    Input
} from './fields'

class SigninForm extends React.Component {

    renderErrors = () => {
        if(typeof this.props.errors === 'string'){
            return <div className="_error-message">{this.props.errors}</div>
        }

        return Object.values(this.props.errors).map((item, index) => {  
            
            if(!item[0])
            return <></>
            
            if(typeof item[0] === 'string' && item[0].length > 1){
                return <div className="_error-message" key={index}>{item[0]}</div>
            }

            return <></>
        })
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                {this.props.errors && this.renderErrors()}
                <div className="_form-row">
                    <Field name="email" type="email" component={Input} label="Enter Email / Username" />
                    <Field name="password" type="password" component={Input} label="Enter Password" />
                </div>
                
                <div className="_form-group">
                    <button className='_button _button-2 _button-submit'>Sign In</button>
                </div>
            </form>
        )
    }
}

const validate = formValues => {

    const errors = {}

    if(!formValues.email){
        errors.email = "You must enter your username / email"
    }

    if(!formValues.password){
        errors.password = "You must enter your password"
    }

    return errors
}

export default reduxForm({
    form: 'signin',
    validate
})(SigninForm)