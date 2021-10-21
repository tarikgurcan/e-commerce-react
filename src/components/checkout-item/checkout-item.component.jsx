import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart-actions'
import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem, clearItem,removeCartItem,itemAdd}) => {
    const {name,imageUrl,price,quantity}= cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />

            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div onClick={()=>removeCartItem(cartItem)} className="arrow">&#10094;</div>
                <div className="value">{quantity}</div>
                <div onClick={()=>itemAdd(cartItem)}  className="arrow">&#10095;</div>
            </span>
            <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>

        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    clearItem:(item)=>dispatch(clearItemFromCart(item)),
    removeCartItem:(item)=>dispatch(removeItem(item)),
    itemAdd:(item)=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)
