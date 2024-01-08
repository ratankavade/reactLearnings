import React from 'react'
import backgroundImg from '../../../Assets/Icons/foodAppBackground.jpg'
import './BodyBackground.css';
// import MealList from '../Meal/MealList'
import MealOverview from '../Meal/MealOverview';
import MealListItems from '../Meal/MealListItems';

export default function BodyBackground() {
  return (
    <div className='body_background_img'>
      <img src={backgroundImg} alt="Food on table" width="100%" height="300"></img>
      <MealOverview />
      <MealListItems />
    </div>
  )
}
