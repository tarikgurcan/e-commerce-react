import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component'
import Signup from '../../components/signUp/signUp.component'
import "./sign-in-and-sign-up.styles.scss"

const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <Signup/>
        </div>
    )
}

export default SignInSignUp
