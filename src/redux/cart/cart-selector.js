import {createSelector} from "reselect"

const selectedCart =state=>state.cart;

export const selectCartItems=createSelector(
    [selectedCart],
    cart=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      )
  );