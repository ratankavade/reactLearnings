import React from 'react'
import './UserList.css'

export default function UserList(props) {
  return (
    <div>
      <ul className='p-0'>
        {props.userDataList.map((item, i)=>{
          return <li key={i} className='user-list-items'><span>{item.name}</span>&nbsp;&nbsp;&nbsp; <span>{item.age} (In Years)</span></li>
        })}
        
      </ul>
    </div>
  )
}
