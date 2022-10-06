import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData()
    console.log(meals.meals);
    return (
        <div>
            <h2>Available Meal here.{meals.meals.length}</h2>
            {
                meals.meals.map(meal => <Meal
                    key={meal.idMeal}
                    meals={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;