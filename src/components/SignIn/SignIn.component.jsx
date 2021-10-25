import React, { Component } from 'react'
import {connect} from "react-redux"
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import "./SignIn.styles.scss"

class SignIn extends Component {
    state={
        email:"",
        password:""
    }
    handleSubmit=async(e)=>{
        e.preventDefault()
        const {emailSignInStart} = this.props
        const {email,password}=this.state;
       emailSignInStart(email,password)
    }
    handleChange=e=>{
        const {name,value} = e.target
        e.preventDefault()
        this.setState({[name]:value})
    }
    render() {
        const {googleSignInStart} = this.props
        return (
            <div className="sign-in">
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" />
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSign onClick={googleSignInStart}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null,mapDispatchToProps)(SignIn)