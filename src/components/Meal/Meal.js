import React from 'react';

const Meal = ({ meals }) => {
    const { strMeal } = meals;
    console.log(meals)
    return (
        <div>
            <h3>Name: {strMeal}</h3>

        </div>
    );
};

export default Meal;