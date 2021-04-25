import React from 'react'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'
import {connect} from "react-redux"

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

const mapStatetoProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStatetoProps)(Header)
