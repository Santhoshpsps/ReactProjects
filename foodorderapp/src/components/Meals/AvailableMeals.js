import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const[meals, setmeals] = useState([]);
  const[isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    const fetchmealsData = async () => {
      const response = await fetch(
        "https://react-demo-4c8e2-default-rtdb.firebaseio.com//meals.json"
      );
      const data = await response.json();
      // console.log(data);
      const loadedMeals=[];

      for(const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          desc: data[key].description,
          price: data[key].price
        });
      }
      
      setmeals(loadedMeals);
      setIsLoading(false);      
    };
    fetchmealsData();
  }, []);
  console.log(meals);
  if(isLoading)
  {
    return(
      <section className={classes.mealsLoading}>
        <h1>Loading...</h1>
      </section>
    )
  }
  const mealsList =meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        desc={meal.description}
        price={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
