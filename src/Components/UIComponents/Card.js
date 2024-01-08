import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className={`darkGrayCard ${props.class}`} style={{width: props.widthProp}}>
      {props.children}
    </div>
  )
}
