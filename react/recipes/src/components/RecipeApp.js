import React, { Component } from 'react';
import '../styles/RecipeApp.css'
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
				{
					id: 0, 
					title: "Spaghetti",
					instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
					ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
					img: "pasta.png"
				},
				{
					id: 1,
					title: "Milkshake",
					instructions: "Combine ice cream and milk.  Blend until creamy",
					ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
					img: "milkshake.png"
				},
				{
					id: 2,
					title: "Avocado Toast",
					instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
					ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
					img: "avocado_toast.png"
				},
				{
					id: 3,
					title: "Spaghetti",
					instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
					ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
					img: "pasta.png"
				},
				{
					id: 4,
					title: "Milkshake",
					instructions: "Combine ice cream and milk.  Blend until creamy",
					ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
					img: "milkshake.png"
				},
				{
					id: 5,
					title: "Avocado Toast",
					instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
					ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
					img: "avocado_toast.png"
				}
	    	],
	    	nextRecipeId: 6,
		}

		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(recipe) {
	// 	this.setState((prevState, props) => {
	// 		const newRecipe = {...recipe, id: this.state.nextRecipeId};
	// 		console.log(prevState)
	// 		return {
	// 			nextRecipeId: prevState.nextRecipeId + 1,
	// 			recipes: [...this.state.recipes, newRecipe]
	// 		}
	// 	})
	 const {title, ingredients, instructions, img} = recipe;
	const newRecipe = {
             id: this.state.nextRecipeId,
             title: title,
             ingredients: ingredients,
             instructions: instructions,
             img:img
           };
  	this.setState(prevState => {
  		return {
  			nextRecipeId: prevState.nextRecipeId + 1,
  			recipes: [...this.state.recipes, newRecipe]
  		}
  	});
	// }

}

    render() {
        return (
            <div className="App">
                <Navbar />
                <RecipeInput onSave={this.handleSave}/>
                <RecipeList recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default RecipeApp;


















