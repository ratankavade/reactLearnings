import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
  return (
      <div className='col-md-3' style={{alignSelf: "center"}}>
        <div className='expense_date'>
            <h5 className='mb-0'>{props.date.getFullYear()}</h5>
            <h6 className='mb-0'>{props.date.getDate()}</h6>
            <h6>{props.date.toLocaleString('default', { month: 'long' })}</h6>
        </div>
      </div>
    
  )
}
