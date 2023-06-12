import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  let total = 0

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        cartList.forEach(each => {
          total += each.price * each.quantity
        })
        return (
          <div className="CartSummaryContainer">
            <h1>
              <span className="spanOrderTotal">Order Total:</span>
              {total}/-
            </h1>
            <p className="spanOrderTotal">{cartList.length} Items in cart</p>
            <button type="button" className="checkout">
              Checkout
            </button>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
