import React from 'react'
import logo from '../../../Assets/Icons/logo.png'
import Cart from './Cart'
import './Header.css'

export default function Header(props) {
  return (
    <div className='col-md-12 foodApp_header'>
      <img src={logo} alt="Girl in a jacket" width="80" height="60"></img>
      <Cart onCartClick={props.onShowModal}/>
    </div>
  )
}
