import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormValidator } from '../Registration/RegistrationVlidator'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-toastify/dist/ReactToastify.css'


import { ToastContainer, toast } from 'react-toastify'
class RegistrationForm extends Component {
    constructor() {
        super();


        this.validator = new FormValidator([{
            field: 'full_name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter full name.'
        }, {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter your email address.'
        }, {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Enter valid email address.'
        }, {
            field: 'phone',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter a phone number.'
        }, {
            field: 'phone',
            method: 'matches',
            args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
            validWhen: true,
            message: 'Enter valid phone number.'
        }, {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter password.'
        }, {
            field: 'password_confirmation',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter Password confirmation.'
        }, {
            field: 'password_confirmation',
            method: this.passwordMatch, // notice that we are passing a custom function here
            validWhen: true,
            message: 'Password and password confirmation do not match.'
        }]);
        this.state = {
            full_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            validation: this.validator.valid(),
        }
        this.submitted = false;
    }
    passwordMatch = (confirmation, state) => (state.password === confirmation)
    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleFormSubmit = e => {
       e.preventDefault()
        const validation = this.validator.validate(this.state);
        this.setState({
            validation
        });
        this.submitted = true;
        if (validation.isValid) {
           
            toast.success("Your form has been successfully Registered")
            //reaches here if form validates successfully...
        }
    }
    render() {
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation

        return (

            <>
                <div className="loginpagemain">
                    <div className="loginpagein">
                        <ToastContainer position="top-center"/>
                        <div className="col-md">
                            <table></table>
                            <form className="registrationForm">
                                <div className={validation.email.isInvalid && 'has-error'}>

                                    <input type="string" className="form-control" name="full_name" placeholder="Full Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div>
                                <div className={validation.email.isInvalid && 'has-error'}>

                                    <input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
                                <div className={validation.phone.isInvalid && 'has-error'}>

                                    <input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
                                <div className={validation.password.isInvalid && 'has-error'}>

                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
                                <div className={validation.password_confirmation.isInvalid && 'has-error'}>

                                    <input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={this.handleInputChange} /> <span className="help-block">{validation.password_confirmation.message}</span> </div>
                                    <Link to="/">  <button onClick={this.handleFormSubmit} className="btn-primary"> Register </button> </Link>
                            </form>
                            <Link to="/">  <button><span className="btnicon"> <i class="fa-solid fa-arrow-right-from-bracket"></i></span>Login</button></Link>
                        </div>
                    </div>
                </div>

            </>
        )
    }

}
export { RegistrationForm };
