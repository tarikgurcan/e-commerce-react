import React, { Component } from 'react'
import {auth, signInWithGoogle,  } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import "./SignIn.styles.scss"

export default class SignIn extends Component {
    state={
        email:"",
        password:""
    }
    handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:"",password:""})
        }catch(err){console.log(err)}
        this.setState({email:"",password:""})
    }
    handleChange=e=>{
        const {name,value} = e.target
        e.preventDefault()
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" />
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSign onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
