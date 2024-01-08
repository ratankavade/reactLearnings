import React, { useContext } from 'react'
import MealAmountForm from './MealAmountForm';
import {cartItems} from "../Layout/FoodApp"

export default function MealList(props) {
  const cartCtx = useContext(cartItems);
  

  function onAddToCartHandler(amount){
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
      <li className="row">
        <div className='col-md-9'>
          <h4 className="mb-1">{props.name}</h4>
          <i>{props.description}</i>
          <h6 className="mt-1 items_price">${props.price}</h6>
        </div>
        <MealAmountForm onAddToCart={onAddToCartHandler} />
      </li>
  )
}
