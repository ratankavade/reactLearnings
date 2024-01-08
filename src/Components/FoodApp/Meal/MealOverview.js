import React from 'react'
import "./MealOverview.css"

export default function MealOverview() {
  return (
    <div className="card text-white bg-dark mb-3 overviewCard">
        <div className="card-body">
            <h5 className="card-title mb-4">Delicious Food, Delivered To You</h5>
            <p className="card-text">Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home.</p>
            <p className="card-text">All our meals are cooked with high-quality ingredients, just-in-time and
            of course by experienced chefs!</p>
        </div>
    </div>
  )
}
