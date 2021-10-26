import React from 'react'
import { useState } from 'react'
import {connect} from "react-redux"
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-action'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import "./SignIn.styles.scss"

const SignIn =({emailSignInStart,googleSignInStart})=> {
    const [userCreditiantial,setCreditiantial]= useState({email:"",password:""})

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password}=userCreditiantial;
       emailSignInStart(email,password)
    }
    const handleChange=e=>{
        const {name,value} = e.target
        e.preventDefault()
        setCreditiantial({...userCreditiantial,[name]:value})
    }
        return (
            <div className="sign-in">
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput type="email" name="email" value={userCreditiantial.email} onChange={handleChange} label="email" />
                    <FormInput type="password" name="password" value={userCreditiantial.password} onChange={handleChange} label="password" />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSign onClick={googleSignInStart}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(null,mapDispatchToProps)(SignIn)