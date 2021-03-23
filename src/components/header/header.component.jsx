import React from 'react'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                SHOP
                </Link>
                <Link to="/Contact" className="option">
                CONTACT
                </Link>
               {currentUser?<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:
                <Link to="/signInSignUp" className="option">
                SIGN IN
                </Link>}
            </div>

        </div>
    )
}

export default Header
