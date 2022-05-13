import React from "react";

const Meal = ({meal}) => {

    return (
        <div>
            <li id="list" >{meal.strMeal}</li>
        </div>
    )
};

export default Meal;
