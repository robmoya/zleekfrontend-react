import React from 'react';
import { Link } from 'react-router-dom';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';

const Recipe = createReactClass({
    changeRecipe: function (e) {
        e.preventDefault();
        let marker = {
            recipe: this.props.recipeMarkerId
        }
        this.props.onHandleRecipeChange(marker);
    },
    getRandom: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    render: function () {
        let recipe = this.props.recipe;

        const { mealMarkerId, recipeMarkerId, substituteRecipe } = this.props;

        if (mealMarkerId === substituteRecipe.meal && recipeMarkerId === substituteRecipe.recipe && !substituteRecipe.isFetching) {
            recipe = substituteRecipe.recipePlan;
        }

        const isChangingRecipe = mealMarkerId === substituteRecipe.meal && recipeMarkerId === substituteRecipe.recipe && substituteRecipe.isFetching;

        const { recipeId, name, directions, ingredients, nutrients } = recipe;

        let renderNutrients = () => {
            return Object.keys(nutrients).map(function (key, i) {
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
                return ingredient.name;
            }).join('').substring(0, 80);
        }

        const bgUrl = 'url(http://op9ls46e5.bkt.gdipper.com/recipe_' + this.getRandom(1, 30).toFixed(0) + '.jpg)';

        const mealBgStyle = {
            backgroundImage: bgUrl
        };

        return (
            <div>
                <div className="bg-size-cover meal-cover" style={mealBgStyle}>
                </div>
                <div className="pull-left margin-left-sm meal-description">
                    <Link to={`/recipes/${recipeId}/default`} className="recipe-bg clickable h4">
                        {name}
                    </Link>
                    <h5>{renderIngredients()}...<span className="text-primary">See More</span></h5>
                    <p className="margin-bottom-none">{renderNutrients()}</p>
                    <p className="hidden">{renderDirections()}</p>
                </div>
                {isChangingRecipe ? <span className="fa fa-circle-o-notch fa-spin fa-fw change-recipe"></span> :
                    <span className="fa fa-random cursor-pointer change-recipe" onClick={this.changeRecipe}></span>
                }

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
    }).isRequired,
    recipeMarkerId: PropTypes.number.isRequired,
    mealMarkerId: PropTypes.number.isRequired,
    substituteRecipe: PropTypes.object.isRequired
}

export default Recipe;
