import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'
import {connect} from "react-redux"
import CartIcon  from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCartHidden } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'


const Header = ({currentuser,hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                LOGO
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentuser?<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link className="option" to="/signin">SIGN IN</Link>}
                <CartIcon/> 
            </div>
            {hidden?null:<CartDropdown/>}
        </div>
    )
}

const mapStateToProps=(state)=>createStructuredSelector({
    currentuser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
