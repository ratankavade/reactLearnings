import React, { useEffect, useState } from 'react'
import Card from '../UIComponents/Card'
import './UserInformation.css'
import useValidate from '../../Hooks/use-validate'

export default function UserInformation(props) {
    const [userInfo, setUserInfo] = useState([]);

    const {
        value: fNameValue,
        isValid: fNameIsValid,
        hasError: fNameHasError,
        onChangeHandler: fNameChangeHandler,
        onBlurHandler: fNameBlurHandler,
        reset: resetFname
    } = useValidate((value)=> value.trim() !== '');

    const {
        value: lNameValue,
        isValid: lNameIsValid,
        hasError: lNameHasError,
        onChangeHandler: lNameChangeHandler,
        onBlurHandler: lNameBlurHandler,
        reset: resetLname
    } = useValidate((value)=> value.trim() !== '');

    const {
        value: ageValue,
        isValid: ageIsValid,
        hasError: ageHasError,
        onChangeHandler: ageChangeHandler,
        onBlurHandler: ageBlurHandler,
        reset: resetAge
    } = useValidate((value)=> value > 5);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        onChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useValidate((value)=> value.includes('@'));

    let isFormValid = false;
    if(fNameIsValid && lNameIsValid && ageIsValid && emailIsValid){
        isFormValid = true;
    }else{
        isFormValid = false;
    }

    function SubmitUserInfoForm(event){
        event.preventDefault();

        console.log(fNameValue, lNameValue, ageValue, emailValue);

        sendUserData();

        resetFname();
        resetLname();
        resetAge();
        resetEmail();
    }

    //Post request

    const userFormObj = {
        fName: fNameValue,
        lName: lNameValue,
        age: ageValue,
        email: emailValue
    }

    async function sendUserData(){
        const response = await fetch('https://reactlearning-eef59-default-rtdb.firebaseio.com/userData.json', {
            method: 'POST',
            body: JSON.stringify(userFormObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log("Post data", data);
    }

    //Get Request
     
    // const getUserData = useCallback(async() => {
    //     const response = await fetch('https://reactlearning-eef59-default-rtdb.firebaseio.com/userData.json');
    //     const data = await response.json();
    //     // console.log("Get data", data);

    //     const fetchedUserData = [];

    //     for(const key in data){
    //         fetchedUserData.push({
    //             id: key,
    //             fName: data[key].fName,
    //             lName: data[key].lName,
    //             age: data[key].age,
    //             email: data[key].email
    //         })
    //     }

    //     console.log("Get data", fetchedUserData);

    //     setUserInfo(fetchedUserData);
    //     // console.log("userInfo", userInfo);

        
    // },[]);

    // useEffect(()=>{
    //     getUserData();
    // }, [getUserData]);

    // Directly used get function inside useEffect without useCallback

    useEffect(()=>{
        const getUserData = async() => {
            const response = await fetch('https://reactlearning-eef59-default-rtdb.firebaseio.com/userData.json');
            const data = await response.json();
    
            const fetchedUserData = [];
    
            for(const key in data){
                fetchedUserData.push({
                    id: key,
                    fName: data[key].fName,
                    lName: data[key].lName,
                    age: data[key].age,
                    email: data[key].email
                })
            }
    
            console.log("Get data", fetchedUserData);
    
            setUserInfo(fetchedUserData);
        }
        getUserData();
    },[]);

    return (
        <div className='userInformationForm'>
        <h1>{props.heading}</h1>
        <Card>
            <form className='clearfix'>
                <div className='row'>
                    <div className="form-group col-6 mb-4">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" value={fNameValue} onChange={fNameChangeHandler} onBlur={fNameBlurHandler} className="form-control" id="fname" placeholder="First Name" />
                        {fNameHasError && <p className='text-danger'>First Name should not empty</p>}
                    </div>
                    <div className="form-group col-6 mb-4">
                        <label htmlFor="fname">Last Name</label>
                        <input type="text" value={lNameValue} onChange={lNameChangeHandler} onBlur={lNameBlurHandler} className="form-control" id="fname" placeholder="Last Name" />
                        {lNameHasError && <p className='text-danger'>Last Name should not empty</p>}
                    </div>
                    <div className="form-group col-6 mb-4">
                        <label htmlFor="fname">Age</label>
                        <input type="number" value={ageValue} onChange={ageChangeHandler} onBlur={ageBlurHandler} className="form-control" id="fname" placeholder="Age" />
                        {ageHasError && <p className='text-danger'>Age should be greater than 5</p>}
                    </div>
                    <div className="form-group col-6 mb-4">
                        <label htmlFor="fname">Email</label>
                        <input type="email" value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} className="form-control" id="fname" placeholder="abc@gmail.com" />
                        {emailHasError && <p className='text-danger'>Email should be valid</p>}
                    </div>
                </div>
                <div className='float-end'>
                    <button className='btn btn-primary' disabled={!isFormValid} onClick={SubmitUserInfoForm}>Submit</button>
                    {/* <button className='btn btn-primary' onClick={getUserData}>Update User List</button> */}
                </div>
            </form>
        </Card>
        <br/>
        <Card>
            <div>
                <ul className='user_list'>
                    {userInfo.map((user)=>{
                        return <li key={user.id}>{user.fName} {user.lName}, Age - {user.age} ({user.email})</li>
                    })}
                    
                </ul>
            </div>
        </Card>
        </div>
    )
}
