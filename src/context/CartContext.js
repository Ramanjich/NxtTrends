import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  emptyCartItems: () => {},
  totalAmount: 0,
})

export default CartContext
