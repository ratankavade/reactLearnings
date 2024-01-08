import React, {createContext, useReducer, useState} from 'react'
import BodyBackground from '../UI/BodyBackground'
import CartModal from '../UI/CartModal'
import Header from '../UI/Header'


const cartItems = createContext(
  // {
  //   items: [],
  //   totalAmount: 0,
  //   addItem: (item)=>{},
  //   removeItem: (id)=>{}
  // }
)


const cartInitialState = {
  items: [],
  totalAmount: 0
}

function cartReducer(state, action){
  console.log("state, action", state, action);
  if(action.type === "ADD_ITEM"){
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item)=> item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems

    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }else{
      updatedItems = state.items.concat(action.item);
    }

    return{
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  if(action.type === "REMOVE_ITEM"){
    const existingCartItemIndex = state.items.findIndex(
      (item)=> item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id)
    }else{
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return{
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }

  return cartInitialState;
}

export default function FoodApp(props) {
  const [showCardModal, setShowCardModal] = useState(false);
  const [cartState, dispachCartAction] = useReducer(cartReducer, cartInitialState);

  const CartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }
  
  function addItemToCartHandler(item){
    dispachCartAction({type: "ADD_ITEM", item: item});
  }
  
  function removeItemToCartHandler(id){
    dispachCartAction({type: "REMOVE_ITEM", id: id});
  }

  function showCardModalHandler(){
    setShowCardModal(true);
  }

  function hideCardMadalHandler(){
    setShowCardModal(false);
  }

  return (
    <div className='py-3'>
      <cartItems.Provider value={CartContex}>
        {showCardModal && <CartModal onHideModal={hideCardMadalHandler}/>}
        <h2>{props.heading}</h2>
        <Header onShowModal={showCardModalHandler}/>
        <BodyBackground />
      </cartItems.Provider>
    </div>
  )
}

export {cartItems}
