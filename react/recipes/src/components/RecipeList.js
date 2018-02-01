import React, { Component } from 'react';
import Recipe from './Recipe';
import '../styles/RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
	render() {
		const recipes = this.props.recipes.map( (r, i) => (
			<Recipe key={r.id} {...r} />
		));

		return(
			<div className="recipe-list">
				{recipes}
			</div>
		)
	}
}

RecipeList.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;




























