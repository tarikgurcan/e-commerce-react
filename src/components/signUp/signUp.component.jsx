import React, { Component } from 'react'
import "./sign-up.styles.scss"
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export default class Signup extends Component {
    state={
        displayName:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    handleSubmit=async e=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert("Passwords do not match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }catch(err){console.log(err)}
    }

    handleChange=e=>{
        const {name,value}=e.target;
        this.setState({[name]:value})
    }

    render() {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do no have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required></FormInput>
                     <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required></FormInput>
                     <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required></FormInput>
                     <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

