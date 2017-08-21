import React from 'react';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';

const Recipe = createReactClass({
    render: function(){
        const { recipeId, ingredients, nutrients } = this.props.recipe;

        let renderNutrients = () => {
            return Object.keys(nutrients).map(function(key, i) {
                return <small key={i}>{key}: {nutrients[key].toFixed(2)} &nbsp;</small>;
            })
        }

        let renderIngredients = () => {
            return ingredients.map((ingredient, i) => {
                return (
                    <small key={i}>{ingredient.name}</small>
                )
            })
        }

        return(
            <div className="list-group-item">
                <h5>Recipe {recipeId}</h5>
                {renderNutrients()}
                {renderIngredients()}
            </div>
        )
    }
})

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        // onMount: () => {
            // dispatch(fetchMealPlan({"mealsPerDay": 2, "recipesPerMeal": 3}));
            // dispatch(actions.createMealPlan({"mealsPerDay": 2, "recipesPerMeal": 3}));
        // }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
