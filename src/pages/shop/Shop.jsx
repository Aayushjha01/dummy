import React from 'react'
import { PRODUCTS } from '../../product'
import { Products } from './Products'
import './shop.css'

export const Shop = () => {
  return (
   <div className="shop">
    <div className="shopTitle">
        <h1>Csit shop</h1>
        <div className="products">
            {
             PRODUCTS.map((products,key)=>{
              return <Products data={products}/>
             })
            }
           
        </div>
    </div>
   </div>
  )
}
