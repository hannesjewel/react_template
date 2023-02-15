import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
    Input,
    Select
} from './fields'

class UserCreateForm extends React.Component {

    renderRoles = () => {

        const roles = ['admin', 'customer']
        return roles.map((role, index) => {
            return <option value={role} key={index}>{role}</option>
        })
    }

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
                        name="role" 
                        label="User Role*" 
                        component={Select} 
                    >
                        <option value="">Please select a user role</option>
                        {this.renderRoles()}
                    </Field>
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
                    <button className="_button _button-submit" >Create</button>
                </div>
            </form>
        )
    }
}

const validate = formValues => {
    
    const errors = {}

    if(!formValues.name){
        errors.name = "you must enter your name"
    }

    if(!formValues.email){
        errors.email = "you must enter your email address"
    }

    if(!formValues.password){
        errors.password = "you must enter a password"
    }

    if(!formValues.password_confirmation){
        errors.password_confirmation = "you must confirm your password"
    }

    return errors
}

export default reduxForm({
    form: 'usercreate',
    validate
})(UserCreateForm)