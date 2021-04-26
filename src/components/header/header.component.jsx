import React from 'react'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'
import {connect} from "react-redux"
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "./../../redux/cart/cart-selector"
import {selectCurrentUser} from "./../../redux/user/user-selector"

const Header = ({currentUser,hidden}) => {
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
                <CartIcon/>
            </div>
                {hidden?null:<CartDropdown/>}
        </div>
    )
}

const mapStatetoProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStatetoProps)(Header)
