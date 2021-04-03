import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import "./SignUp.styles.scss";

export default class SignUp extends Component {
    
    state={
        displayName:"",
        email:"",
        password:"",
        confirmpassword:"",
    }

    handleSubmit=async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmpassword}=this.state;

        if(password!==confirmpassword){
            alert("Password don't match");
            return
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocument(user,{displayName});
            
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmpassword:"",
            },console.log(this.state))
        }catch(err){
            console.log(err);
        }

    }

    handlechange=(e)=>{
        const {name,value}=e.target;

        this.setState({[name]:value});
    }

    render() {
        const {displayName,email,password,confirmpassword}=this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your e-mail</span>
                <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handlechange}
                    label="Display Name"
                    required
                    />
                     <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handlechange}
                    label="email"
                    required
                    />
                     <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handlechange}
                    label="password"
                    required
                    />
                     <FormInput
                    type="password"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={this.handlechange}
                    label="confirm password"
                    required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
                
            </div>
        )
    }
}
