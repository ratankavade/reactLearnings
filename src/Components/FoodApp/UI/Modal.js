import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props =>{
    return <div className='backdrop'></div>
}

const ModalOverlay = props => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}
