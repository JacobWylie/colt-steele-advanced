import React, { Component } from 'react';
import '../styles/RecipeApp.css'
import Navbar from './Navbar';
import RecipeList from './RecipeList';

class RecipeApp extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <RecipeList />
            </div>
        );
    }
}

export default RecipeApp;
