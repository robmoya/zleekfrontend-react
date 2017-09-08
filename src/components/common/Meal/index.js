import React from 'react';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Recipe from '../Recipe';

const Meal = createReactClass({
    handleRecipeChange: function (marker) {
        marker.meal = this.props.mealMarkerId;
        this.props.onHandleRecipeChange(marker);
    },
    componentWillMount: function () {
        // console.log(this.props);
    },
    render: function () {

        const { nutrients, recipePlans } = this.props.meal;

        let renderNutrients = () => {
            return Object.keys(nutrients).map(function (key, i) {
                return <span className="margin-right-xl" key={i}>{key}: {nutrients[key].toFixed(0)}</span>;
            })
        }
        let renderRecipes = () => {
            return recipePlans.map((recipePlan, i) => {
                return (
                    <Recipe key={i} recipeMarkerId={i} mealMarkerId={this.props.mealMarkerId} substituteRecipe={this.props.substituteRecipe} recipe={recipePlan} onHandleRecipeChange={this.handleRecipeChange} />
                )
            })
        }
        return (
            <div className="bg-white border-gray-hard border-radius-base margin-bottom-md">
                <div className="col-xs-12">
                    <div className="meal-card-container">
                        {/*<h3 className="margin-bottom-none">Meal</h3>*/}
                        <p className="text-left text-light-black margin-top-lg margin-bottom-lg">{renderNutrients()}</p>
                        {renderRecipes()}
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
});

Meal.propTypes = {
    meal: PropTypes.object.isRequired,
    mealMarkerId: PropTypes.number.isRequired,
    substituteRecipe: PropTypes.object.isRequired
}

export default Meal;
