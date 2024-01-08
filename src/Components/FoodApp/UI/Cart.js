import React, { useContext } from 'react'
import cart from '../../../Assets/Icons/cart.png'
import './Cart.css'
import {cartItems} from '../Layout/FoodApp'

export default function Cart(props) {

  const itemNumber = useContext(cartItems);

  const numberOfCartItems = itemNumber.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0);
  
  console.log("numberOfCartItems", numberOfCartItems);
  
  
  return (
    <div className="foodApp_cart" onClick={props.onCartClick}>
      <img className='mx-2' src={cart} alt="cart" width="40" height="30"></img>
      <span>Your Cart</span>
      <span className="badge bg-manual mx-2">{numberOfCartItems}</span>
    </div>
  )
}
