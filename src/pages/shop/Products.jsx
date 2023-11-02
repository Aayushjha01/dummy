
import React ,{ useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const Products = (props) => {
    const{id,productName,price,productImage}= props.data

    const {addToCart , cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    // console.log("a", cartItemAmount)
    
  return (
    <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>Rs{price}</p>
        </div>
        <button className="addToCartBttn" onClick = {()=>addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>[{cartItemAmount}]</>}</button>
       
    </div>
  )
}