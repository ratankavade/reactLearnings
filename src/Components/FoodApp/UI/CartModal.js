import React, { useContext } from 'react'
// import Modal from './Modal'
// import Card from '../../UIComponents/Card'
import './CartModal.css'
import {cartItems} from '../Layout/FoodApp'

// const selectedFoodItems = [{
//   id: 'm1',
//   name: 'Sushi',
//   description: 'Finest fish and veggies',
//   price: 22.99,
// }]
export default function CartModal(props) {
  const cartContext = useContext(cartItems);
  console.log("cartContext", cartContext);
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const hasItems = cartContext.items.length > 0;

  function cartItemAddHander(item){
    cartContext.addItem({ ...item, amount: 1 });
  }

  function cartItemRemoveHander(id){
    cartContext.removeItem(id);
  }

  return (
    <div width="500px" className="cardModalCss">
      {/* <Modal> */}
        <h3 className='text-white'>Selected Food Items</h3>
        <div>
          <ul className='text-white'>
            {cartContext.items.map((item, i)=>{
              return <li key={i} className="row">
                  <div className='col-md-9'>
                    <h6>{item.name}</h6>
                    <h6 className='text-morrom'>{item.price}</h6> <span className='amount_multiply'>x {item.amount}</span>
                  </div>
                  <div className='col-md-3'>
                    <button className='add_remove_btn' onClick={cartItemAddHander.bind(null, item)}>+</button>
                    <button className='add_remove_btn' onClick={cartItemRemoveHander.bind(null, item.id)}>-</button>
                  </div>
                </li>
            })}
          </ul>
          <div className='text-white row'><h4 className='col-md-9'>Total Amount:</h4><h4 className='col-md-3'>${totalAmount}</h4></div>
          
        </div>
        <div className='text-end'>
          <button className="btn btn-danger mx-3" onClick={props.onHideModal}>Close</button>
          {hasItems && <button className="btn btn-danger">Order</button>}
        </div>
      {/* </Modal> */}
    </div>
  )
}
