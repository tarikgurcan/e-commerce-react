import React from 'react'
import {ReactComponent as ShoppingIcon} from "./../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import {ToggleCartHidden} from "./../../redux/cart/cart.actions"
import {connect} from "react-redux"
import {selectCartItemsCount} from "./../../redux/cart/cart-selector"

const CartIcon = ({ToggleCartHidden,itemCount}) => {
    return (
        <div className="cart-icon" onClick={ToggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchtoProps=dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})

const mapStatetoProps=(state)=>({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStatetoProps,mapDispatchtoProps)(CartIcon)
