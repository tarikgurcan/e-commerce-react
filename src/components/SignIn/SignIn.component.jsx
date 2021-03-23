import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import "./SignIn.styles.scss"


export default class SignIn extends Component {
    state={
        email:"",
        password:""
    }
    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        this.setState({email:"",password:""})
        e.preventDefault()
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I have already account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" handleChange={this.handleChange} value={this.state.email} required label="email"/>
                    <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password} label="password" required/>
                    <CustomButton type="submit">Submit Form</CustomButton>
                </form>
            </div>
        )
    }
}
