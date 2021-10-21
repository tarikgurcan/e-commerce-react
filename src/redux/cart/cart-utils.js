export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingcartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id)

    if(existingcartItem){
        return cartItems.map((cartItem)=>{
            return(
                cartItem.id===cartItemToAdd.id
                ?{...cartItem,quantity:cartItem.quantity+1}:
                cartItem
            )
        })
    }

    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItems,cartItemstoRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemstoRemove.id
      );
    
      if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemstoRemove.id);
      }

    return cartItems.map((cartItem)=>cartItem.id===cartItemstoRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)

}