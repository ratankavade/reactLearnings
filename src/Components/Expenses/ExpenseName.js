import React from 'react'
import './ExpenseName.css'

export default function ExpenseName(props) {
  return (
    <div className='col-md-6' style={{alignSelf: "center"}}>
      <div className='expense_name'>
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}
