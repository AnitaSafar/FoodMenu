import React from "react";
import Meal from "./Meal";


const Meals = ({meals, isLoading}) => {

    return isLoading ? (<h1>Loading..</h1>) : 
        <>
        <h2>All meals:</h2>  
        <section>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} meal={meal}></Meal>
            ))}
        </section> 
        </>
        
};

export default Meals;
