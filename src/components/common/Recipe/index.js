import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';

const Recipe = createReactClass({
    render: function(){
        const { recipeId, directions, ingredients, nutrients } = this.props.recipe;

        let renderNutrients = () => {
            return Object.keys(nutrients).map(function(key, i) {
                return <small key={i}>{key}: {nutrients[key].toFixed(2)} &nbsp;</small>;
            })
        }
        let renderDirections = () => {
            return directions.map((direction, i) => {
                return (
                    <small key={i}>{direction}</small>
                )
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
            <div>
                <div className="bg-size-cover meal-cover" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan1.jpg)' }}>
                </div>
                <div className="pull-left margin-left-sm meal-description">
                    <h4>
                        <Link to={`/recipes/${recipeId}/default`} className="recipe-bg clickable">
                            Recipe{recipeId}
                        </Link>
                    </h4>
                    <h5>{renderIngredients()}</h5>
                    <p>{renderNutrients()}</p>
                    <p>{renderDirections()}</p>
                </div>
                <button className="btn btn-gray-light-transparent btn-sm">Order Now</button>
                <span className="meal-tags">
                    <i className="icon-gluten margin-right-lg"></i>
                    <i className="icon-carrot"></i>
                </span>
                <div className="clearfix"></div>
            </div>
        )
    }
})

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipeId: PropTypes.string.isRequired,
        ingredients: PropTypes.array.isRequired,
        nutrients: PropTypes.object.isRequired,
        // name: PropTypes.string.isRequired,
        directions: PropTypes.array.isRequired
    }).isRequired
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
