import React from 'react'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from "react-router-dom"
import "./header.styles.scss"

const Header = () => {
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
                <Link to="/Contact" className="option">
                CONTACT
                </Link>
            </div>

        </div>
    )
}

export default Header
