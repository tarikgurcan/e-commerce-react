 import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {selectCartTotal, selectedCartItems } from '../../redux/cart/cart-selector'
 import "./checkout.styles.scss"
 
 const CheckoutPage = ({cartItems,cartTotal}) => {
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
             {cartItems.map((cartItem)=><CheckoutItem key={cartItem.id}cartItem={cartItem}/>)}
             <div className="total">
                 <span>Total ${cartTotal}</span>
             </div>
             <div className="test-warning">
                 *Please use the following test credit card for payment
                 <br />
                 4242 4242 4242 4242 - Exp:01/22 - CVV: 123
                </div>
             <StripeCheckoutButton className="stripe-button" price={cartTotal}/>
         </div>
     )
 }

 const mapStateToProps=createStructuredSelector({
     cartItems:selectedCartItems,
     cartTotal:selectCartTotal
 })
 
 export default connect(mapStateToProps)(CheckoutPage)
 