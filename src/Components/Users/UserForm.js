import React, {useState} from 'react';
import './UserForm.css'

export default function UserForm(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  function changedUserName(event){
    setUserName(event.target.value);
  }

  function changedAge(event){
    setUserAge(event.target.value);
  }

  function onAddUserSubmit(event){
    event.preventDefault();
    const userData = {
      "name": userName,
      "age": userAge
    }
    if(userName.length === 0 || userAge.length ===0){
      alert("Not valid input")
      return;
    }
    if(+userAge < 1){   //+indicate userAge is number not a string
      alert("Not valid age")
      return;
    } 
    props.onAddUserData(userData);
    
    setUserName('');
    setUserAge('');
  }

  return (
    <div className='form_card'>
      <form>
        <div className="row">
          <div className="col">
              <input type="text" className="form-control" placeholder="User Name" value={userName} onChange={changedUserName} />
          </div>
          <div className="col">
              <input type="number" className="form-control" placeholder="User Age (In Years)" value={userAge} onChange={changedAge}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <button type="submit" className="btn btn-primary mt-3" style={{float:"right"}} onClick={onAddUserSubmit}>Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}
