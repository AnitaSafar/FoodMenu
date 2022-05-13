import { useEffect, useState } from 'react';
import './App.css';
import Meals from './components/Meals';



function App() {
  
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [foundMeal, setFoundMeal] = useState({});
  // const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query)
      .then(response => response.json())
      .then(newMeals => setMeals(newMeals.meals))
      setIsLoading(false)
  }, [])

  console.log(meals)


  function search(meals) {
    
    let found = []
  
    meals.find(meal => {
      if (meal.strMeal.toLowerCase().includes(query.toLowerCase()) === true) {
        found.push(meal)
        setFoundMeal(meal)
      // } else {
      //   setNoResult(true)
      //   return ("No meal found!")
      }
    })}
  
  console.log(foundMeal)

  
  const onClick = function () {
    search(meals)
  }

  ///filter by category, pick 5 random

  // let filteredItems = [];

  // const filterByCategory = function(foundMeal) {

  //   filteredItems = [];
  //   meals.map(meal => {
  //     if (meal.strCategory.toLowerCase() === foundMeal.strCategory) {
  //       filteredItems.push(meal)
  //     }
  //   })
  //   console.log("Filtered items", filteredItems);
  //   setMeals(filteredItems)
  // }

  // filterByCategory()
  
  /// filter by area, pick 3 random

  return (
    <>
    <h1>Search meals:</h1>
      <div>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}/>
        <button type="button" onClick={onClick}>Search!</button>
      </div>
      <div class="div">
        <h2>First meal found:</h2>
          <div>
            <p class="details"><b>Name:</b> {foundMeal?.strMeal}</p>
            <p class="details"><b>Category: </b>{foundMeal?.strCategory}</p>
            <p class="details"><b>Area:</b> {foundMeal?.strArea}</p>
          </div>
      </div>
      <div class="div">
        <Meals isLoading={isLoading} meals={meals}/>
      </div>
      
    </>
  );
}

export default App;
