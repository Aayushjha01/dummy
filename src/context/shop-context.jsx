import { PRODUCTS } from '../product'
import React,{ createContext ,  useState } from 'react'

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
  let cart = {}
  for(let i= 1 ;  i <  PRODUCTS.length + 1 ; i++){
     cart[i] = 0
  }
   console.log('cart',cart);
  return cart;
}

export const ShopContextProvider = (props) => {
  const[cartItems,setCartItems] = useState(getDefaultCart());
  // console.log(cartItems,'cartItemsssss')
  
  const addToCart = (item) => {
    // console.log(item,"item")
    setCartItems((cartItem) =>({ ...cartItem, //setcartitems function taking previous state and updating it
    [ item]:cartItems[item] + 1 }
      ));
      // console.log( cartItems[item] +1)
      // console.log([item])
    };
      
    
  
    
    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount,itemId)=>{
    console.log(newAmount,'amount')
    setCartItems((prev)=> ({...prev,[itemId]: newAmount}))  //setcart item is function which takes previous state and update or modify it
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
  // console.log(contextValue.cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
