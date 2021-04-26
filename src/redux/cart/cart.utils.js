export const addItemtoCart=(cartItems, cartItemtoAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemtoAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.id===cartItemtoAdd.id?
            {...cartItem,quantity:cartItem.quantity+1}:
            cartItem
            )
    }

    return [...cartItems,{...cartItemtoAdd,quantity:1}];
}

export const removeItemFromCart=(cartItems,cartItemstoRemove)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemstoRemove.id);

    if(existingCartItem===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemstoRemove.id)
    }

    return cartItems.map(
        cartItem=>
        cartItem.id===cartItemstoRemove.id?
        {...cartItem, quantity: cartItem.quantity-1}
        :cartItem
    )
}