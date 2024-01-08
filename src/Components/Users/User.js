import React, {useState} from 'react';
import './User.css'
import UserForm from './UserForm';
import UserList from './UserList';
import Card from '../UIComponents/Card';


export default function User(props) {
  const [enteredUserData, setEnteredData] = useState([]);

  function addUserDataHandler(prevEnteredUserData){
    setEnteredData((newEnteredData)=>{
      return [prevEnteredUserData, ...newEnteredData]
    })
  }

  return (
    <div className='py-3'>
        <h2>{props.heading}</h2>
        <Card>
          <UserForm onAddUserData={addUserDataHandler}/>
          <UserList userDataList={enteredUserData}/>
        </Card>
    </div>
  )
}
