import React, { Component } from 'react';
import '../styles/Recipe.css'

class Recipe extends Component {
	render() {
		const {title, img, instructions} = this.props;
		const ingrediants = this.props.ingrediants.map((ing, i) => (
			<li key={i}>{ing}</li>
		))
		return (
			<div className="recipe-card">
				<div className="recipe-card-img">
					<img src={img} alt={title} />
				</div>
				<div className="recipe-card-content">
					<h3 className="recipe-card-title">Recipe for {title}</h3>
					<h4>Ingrediants:</h4>
					<ul>
						{ingrediants}
					</ul>
					<h4>Instructions:</h4> 
					<p>{instructions}</p>
				</div>
			</div>
		)
	}
}

export default Recipe;