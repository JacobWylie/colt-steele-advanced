import React, { Component } from 'react';
import '../styles/RecipeApp.css'
import Recipe from './Recipe';
import Navbar from './Navbar';

class RecipeApp extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Recipe
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
