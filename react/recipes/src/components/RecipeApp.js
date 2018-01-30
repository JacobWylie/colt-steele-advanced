import React, { Component } from 'react';
import '../styles/RecipeApp.css'
import Recipe from './Recipe';

class RecipeApp extends Component {
    render() {
        return (
            <div className="App">
                <h1>Recipe App</h1>
                <Recipe t
                	title = "Pasta" 
                	ingrediants={['flour', 'water']}
                	instructions="Mix Ingrediants"
                	img = 'pasta.png'
                />
            </div>
        );
    }
}

export default RecipeApp;
