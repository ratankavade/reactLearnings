import './App.css';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import News from './Components/News';
import Textform from './Components/Textform';
import Expenses from './Components/Expenses/Expenses'
import User from './Components/Users/User';
import FoodApp from './Components/FoodApp/Layout/FoodApp';
import UserInformation from './Components/CustomHookFormValidation/UserInformation'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar />
        <div className='container'>
          <News />
        </div> */}

        <Router>
          <NavBar />
          <div className="container">
            <Routes>
                <Route exact path="/textUtils" element={<Textform heading="Text Utils" />} />
                <Route exact path="/" element={<News heading="This is my text form" />} />
                <Route exact path="/expenseItems" element={<Expenses heading="My Expenses" />} />
                <Route exact path="/users" element={<User heading="Add New User" />} />
                <Route exact path="/foodApp" element={<FoodApp heading="Order Food App" />} />
                <Route exact path="/userInfo" element={<UserInformation heading="Form Validation Using Custom Hook" />} />
              </Routes>
          </div>
        </Router>
        
      </div>
    )
  }
}

