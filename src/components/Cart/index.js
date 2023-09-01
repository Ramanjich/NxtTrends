import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, emptyCartItems} = value
      const showEmptyView = cartList.length === 0

      const onClickRemoveall = () => {
        emptyCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="container-remove-all">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={onClickRemoveall}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
