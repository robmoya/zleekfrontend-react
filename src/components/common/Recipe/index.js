import React from 'react';
import { Link } from 'react-router-dom';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import ChangeRecipe from './ChangeRecipe';

const Recipe = createReactClass({
    componentWillMount: function () {
        this.setState({
            isSimilarOptionsModalOpen: false
        });
    },
    openSimilarOptionsModal: function () {
        this.setState({isSimilarOptionsModalOpen: true});
    },
    closeSimilarOptionsModal: function () {
        this.setState({isSimilarOptionsModalOpen: false});
    },
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

        // const { recipeId, name, directions, ingredients, nutrients } = recipe;
        const { recipeId, name, img } = recipe;

        // let renderNutrients = () => {
        //     return Object.keys(nutrients).map(function (key, i) {
        //         return <small key={i}>{key}: {nutrients[key].toFixed(2)} &nbsp;</small>;
        //     })
        // }
        // let renderDirections = () => {
        //     return directions.map((direction, i) => {
        //         return (
        //             <small key={i}>{direction}</small>
        //         )
        //     })
        // }
        // let renderIngredients = () => {
        //     return ingredients.map((ingredient, i) => {
        //         return ingredient.name;
        //     }).join('').substring(0, 80);
        // }


        // const mealBgStyle = {
        //     backgroundImage: `url(${img})`
        // };

        return (
            <div className="meal-card-wrapper">
                <div>
                    {this.state.isSimilarOptionsModalOpen && <ChangeRecipe modalIsOpen={true} mealMarkerId={mealMarkerId} recipeMarkerId={recipeMarkerId} afterCloseModalFuc={this.closeSimilarOptionsModal} />}
                    <div className="bg-size-cover meal-cover" style={{ backgroundImage: `url(${img})` }}>
                    </div>
                    <div className="pull-left margin-left-sm meal-description">
                        <Link to={{
                            pathname: `/recipes/${recipeId}`,
                            state: { recipe: recipe, mealMarkerId: mealMarkerId, recipeMarkerId: recipeMarkerId }
                        }} className="recipe-bg clickable h4">
                            {name}
                        </Link>
                        <p className="text-lighter-black recipe-cal"><small>{recipe.nutrients.calories.toFixed(2)}</small> calories</p>
                        {/*
                        <h5>{renderIngredients()}...<span className="text-primary">See More</span></h5>
                        <p className="margin-bottom-none">{renderNutrients()}</p>
                        <p className="hidden">{renderDirections()}</p>
                        */}
                    </div>

                    <div className="change-recipe">
                        <button className="btn btn-primary" onClick={this.openSimilarOptionsModal}>Similar Options</button>
                        <br />
                        <button className="btn btn-black-lighter-transparent margin-top-sm" onClick={this.changeRecipe}>
                            {isChangingRecipe ?
                                <span>Fetching<i className="fa fa-circle-o-notch fa-spin fa-fw margin-left-xs"></i></span> :
                                <span>Random<i className="fa fa-random margin-left-xs"></i></span>
                            }
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
})

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipeId: PropTypes.string.isRequired,
        ingredients: PropTypes.array,
        nutrients: PropTypes.object.isRequired,
        // name: PropTypes.string.isRequired,
        directions: PropTypes.array
    }).isRequired,
    recipeMarkerId: PropTypes.number.isRequired,
    mealMarkerId: PropTypes.number.isRequired,
    substituteRecipe: PropTypes.object.isRequired
}

export default Recipe;
