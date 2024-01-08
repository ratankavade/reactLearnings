import React, { useRef } from 'react'

export default function MealAmountForm(props) {
  const amountInputRef = useRef();

  function addItemsToCartHandler(event){
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log("enteredAmount", enteredAmountNumber);

    if(enteredAmount.trim().length === 0 || enteredAmountNumber.length < 1){
      return
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <div className="col-md-3 row">
        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">Amount</label>
        <div className="col-sm-6">
        <input type="number" className="form-control" id="inputPassword" ref={amountInputRef} />
        </div>
        <div className='col-sm-12 mt-2' style={{textAlign: 'center'}}>
            <button type="button" className="btn btn-danger" onClick={addItemsToCartHandler}>+ Add</button>
        </div>
    </div>
  )
}
