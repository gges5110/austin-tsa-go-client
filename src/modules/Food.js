// modules/Food.js
import React, { Component } from 'react';

 class Food extends Component {
   constructor() {
     super();
     this.state = {
       restaurants: [],
     };
   }

   componentDidMount() {
     fetch('/api/food')
       .then(response => response.json())
       .then(json => {
         console.log(json);
         let restaurants = json.map((restaurant) => {
           return (
             <div key={restaurant.name}>
               Name: {restaurant.name}
               Catagory: {restaurant.catagory}
             </div>
           )
         });
         this.setState({
           restaurants: restaurants
         });
       });
   }

   render() {
     return (
        <div>
        <div className="food-page-background"></div>
        Food
        <h1>Restaurants</h1>
          {this.state.restaurants}
        </div>
      );
   }
 };

export default Food;
