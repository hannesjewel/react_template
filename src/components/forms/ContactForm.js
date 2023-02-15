import React from 'react'
import {
    Field,
    reduxForm
} from 'redux-form'
import {RECAPTCHA_SITE_KEY} from '../../config'
import {
    Input,
    TextArea
} from './fields'
import Recaptcha from 'react-recaptcha'
import scrollToFirstError from './SmoothScrollToErrorFields.js'

class ContactForm extends React.Component {

    state= {
        message: '',
        button: 'Send',
        capchaLoaded: null,
        capchaVerified: null
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

    callback = () => {
        console.log('recapcha has loaded')
        this.setState({ capchaLoaded: true })
    }

    verifyCallback = response => {
        console.log('recapcha has been verified')
        this.setState({ capchaVerified: true })
    }

    onSubmit = formValues => {
        
        if(this.state.capchaLoaded && !this.state.capchaVerified){
            console.log('Robot filter denied')
            return
        }

        this.setState({
            button: 'Sending'
        })
        
        this.props.onSubmit(formValues)
    }

    render(){

        if(this.props.errors && this.state.button === 'Sending')
        this.setState({ button: 'Send' })

        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="_form">
                {'fullname' && <div name={`position-fullname`} />}
                {'email' && <div name={`position-email`} />}
                <div className="_form-row">
                    <Field name="fullname" type="text" component={Input} label="Full Name*" />
                    <Field name="email" type="email" component={Input} label="Email*" />
                </div>
                {'message' && <div name={`position-message`} />}
                <div className="_form-row">
                    <Field
                        name="message" 
                        label="Message*" 
                        component={TextArea} 
                    />
                </div>
                
                <div className="_form-row">
                    <div className="_form-group">
                        <label>Please verify that you are not a robot*</label>
                        <Recaptcha
                            elementID="g_recaptcha"
                            sitekey={RECAPTCHA_SITE_KEY}
                            render="explicit"
                            onloadCallback={this.callback}
                            verifyCallback={this.verifyCallback}
                            theme="dark"
                        />
                    </div>
                </div>
                <br />
                 
                <div className="_form-group">
                    <button className={`_button _button-submit ${this.state.button === 'Sending' ? '_sending' : ''}`}>SEND MESSAGE</button>
                </div>
                {
                    this.props.errors && (
                        <div className="_form-row">
                            {this.renderErrors()}
                        </div>
                    )
                }
            </form>
        )
    }
}

const validate = formValues => {

    const errors = {}

    if(!formValues.fullname){
        errors.fullname = "You must enter your full name"
    }

    if(!formValues.email){
        errors.email = "You must enter your email address"
    }

    if(!formValues.message){
        errors.message = "You must enter a message"
    }

    return errors
}

export default reduxForm({
    form: 'contact',
    validate,
    onSubmitFail: (errors) => scrollToFirstError(errors),
})(ContactForm)