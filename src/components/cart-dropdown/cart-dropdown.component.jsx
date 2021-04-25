import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import "./cart-dropdown.styles.scss"
import {connect} from "react-redux"
import CartItems from '../cart-items/cart-items.component'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">{cartItems.map(cartItem=>{
                return(
                    <CartItems key={cartItem.id} item={cartItem}/>
                )
            })}</div>
            <CustomButton>Check OUT</CustomButton>
        </div>
    )
}

const mapStatetoProps=({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStatetoProps)(CartDropdown)
