import React from 'react'
import MealList from './MealList';
import './MealListItem.css'

export default function MealListItems() {

    const AVAILABLE_FOOD = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
    ];

    const mealListItems = AVAILABLE_FOOD.map((item, i)=> (<MealList key={i} id={item.id} name={item.name} description={item.description} price={item.price}/>))

    return (
        <div className="row justify-content-md-center mt-5">
        <ul className="col-md-8 meal_list_items mt-5">
            {mealListItems}
        </ul>
        </div>
    )
}
