import React from 'react'
import "./cart-item.styles.scss"

const CartItem = ({cartItem:{imageUrl,price,name,quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default React.memo(CartItem)