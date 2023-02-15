import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
    Input
} from './fields'

class UserEditForm extends React.Component {

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

    renderSuccess = () => {
        return (
            <div className="_success-group">
                <div className="_success-message">{this.props.success}</div>
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render(){

        return(
            <form className="_form _form-dashboard" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="_form-row">
                    <Field 
                        type="text"
                        name="name" 
                        label="Name" 
                        component={Input} 
                    />
                </div>
                <div className="_form-row"> 
                    <Field 
                        type="email" 
                        name="email" 
                        label="Email Address" 
                        component={Input}
                    />
                </div>
                <div className="_form-row">
                    <Field
                        type="password"
                        name="password"
                        label="Password"
                        component={Input}
                    />
                </div>
                <div className="_form-row">
                <Field
                        type="password"
                        name="password_confirmation"
                        label="Confirm Password"
                        component={Input}
                    />
                </div>
                {this.props.errors && this.renderErrors()}
                {this.props.success && this.renderSuccess()}
                <div className="_form-row">
                    <button className="_button _button-submit" >Update</button>
                </div>
            </form>
        )
    }
}

const validate = formValues => {
    
    const errors = {}

    if(!formValues.name){
        errors.name = "you must enter a name"
    }

    if(!formValues.email){
        errors.email = "you must enter an email address"
    }

    return errors
}

export default reduxForm({
    form: 'useredit',
    validate
})(UserEditForm)