
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './Cart-item';
import { useContext } from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';




export const Cart = () => {
  
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  return (
   <div className="cart">
    <div>
      <h1>cart items</h1>
    </div>
    <div className="cart">
        { PRODUCTS.map((product) => {
          // console.log(product.price,'product')
          if (cartItems[product.id] !== 0) {
            
          return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className="checkOut">
        <p>Subtotal : Rs{totalAmount} </p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Check Out</button>
      </div>
        : <h1>Your Cart is empty</h1>}
   </div>
  )
}
