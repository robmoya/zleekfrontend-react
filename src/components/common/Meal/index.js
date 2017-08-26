import React from 'react';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Recipe from '../Recipe';

const Meal = createReactClass( {
    handleRecipeChange: function(recipeSub){
        this.props.onHandleRecipeChange(recipeSub);
    },
    componentWillMount: function() {
        // console.log(this.props);
    },
    render: function() {

        const { nutrients, recipePlans } = this.props.meal;

        let renderNutrients = () => {
            return Object.keys(nutrients).map(function(key, i) {
                return <small key={i}>{key}: {nutrients[key].toFixed(2)} &nbsp;</small>;
            })
        }
        let renderRecipes = () => {
            return recipePlans.map((recipePlan, i) => {
                return (
                    <Recipe key={i} recipe={recipePlan} onHandleRecipeChange={this.handleRecipeChange}/>
                )
            })
        }
        return(
            <div>
                <div className="meal-card-container">
                    <h3>Meal &nbsp;
                        {renderNutrients()}
                    </h3>
                    <div className="meal-card-wrapper">
                        {renderRecipes()}
                    </div>
                </div>
            </div>
        )
    }
});

Meal.propTypes = {
    meal: PropTypes.object.isRequired
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

export default connect(mapStateToProps,mapDispatchToProps)(Meal);
