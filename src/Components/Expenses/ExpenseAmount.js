import React from 'react'
import './ExpenseAmount.css'

export default function ExpenseAmount(props) {
  return (
    <div className='col-md-3' style={{alignSelf: "center"}}>
      <div className='expense_amount'>
        <h6>{props.amount}</h6>
      </div>
    </div>
  )
}
