import React from 'react'
import "./checkout.styles.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selector'
import CheckoutItem from '../../components/checkout-item/checkout-item-component'


const CheckoutPage = ({cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                    cartItems.map(cartItem=>{
                        return(
                            <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                        )
                    })
                }
            <div className="total">
                    <span className="total">TOTAL: {total}</span>
                </div>
        </div>
    )
}

const mapStatetoProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStatetoProps)(CheckoutPage)
