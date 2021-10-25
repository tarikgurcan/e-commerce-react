import React from 'react'
import {connect} from "react-redux"
import CartIcon  from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCartHidden } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'
import { SignOutStart } from '../../redux/user/user-action'


const Header = ({currentuser,hidden,SignOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/" className="logo-container">
                LOGO
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentuser?<OptionLink as='div' onClick={SignOutStart}>SIGN OUT</OptionLink>:<OptionLink to="/signin">SIGN IN</OptionLink>}
                <CartIcon/> 
            </OptionsContainer>
            {hidden?null:<CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps=(state)=>createStructuredSelector({
    currentuser:selectCurrentUser,
    hidden:selectCartHidden
})

const mapDispatchToProps=dispatch=>({
    SignOutStart:()=>dispatch(SignOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
