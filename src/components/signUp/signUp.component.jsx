import React, { useState } from 'react'
import "./sign-up.styles.scss"
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {connect} from "react-redux"
import { SignUpStart } from '../../redux/user/user-action'

const Signup =({signUpStart})=> {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      const { displayName, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit=async e=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("Passwords do not match")
            return
        }
        signUpStart({displayName,email,password})

    }

   const handleChange=e=>{
        const {name,value}=e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

        return (
            <div className="sign-up">
                <h2 className="title">I do no have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required></FormInput>
                     <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required></FormInput>
                     <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required></FormInput>
                     <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }


const mapDispatchToProps=dispatch=>({
    signUpStart:(userCredintials)=>dispatch(SignUpStart(userCredintials))
})

export default connect(null,mapDispatchToProps)(Signup)