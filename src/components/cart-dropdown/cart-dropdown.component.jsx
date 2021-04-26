import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import "./cart-dropdown.styles.scss"
import {connect} from "react-redux"
import CartItems from '../cart-items/cart-items.component'
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selector'
import { ToggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">{cartItems.length?cartItems.map(cartItem=>{
                return(
                    <CartItems key={cartItem.id} item={cartItem}/>
                )
            }):
            <span className="empty-message">Your cart is empty</span>
            }</div>
            <CustomButton onClick={()=>{history.push("/checkout")
            dispatch(ToggleCartHidden())
        }

        } >Check OUT</CustomButton>
        </div>
    )
}

const mapStatetoProps=createStructuredSelector({
    cartItems: selectCartItems,
}
)

export default withRouter(connect(mapStatetoProps)(CartDropdown));