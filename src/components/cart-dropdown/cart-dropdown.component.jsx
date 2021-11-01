import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button'
import {connect} from "react-redux"
import "./cart-dropdown.styles.scss"
import { selectedCartItems } from '../../redux/cart/cart-selector'
import { withRouter } from 'react-router'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length?cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem} />):<span className="empty-message">YOUR CART IS EMPTY</span>}
            </div>
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden())
                history.push("/checkout")}}>
                GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps=(state)=>({
    cartItems:selectedCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
