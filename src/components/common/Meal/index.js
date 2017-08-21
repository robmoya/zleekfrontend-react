import React from 'react';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Recipe from '../Recipe';

const Meal = createReactClass( {
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
                    <Recipe key={i} recipe={recipePlan} />
                )
            })
        }
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="margin-top-none">Meal &nbsp;
                        <small>{nutrients.calories.toFixed(2)} Calories</small>
                            {/*
                                <small className="margin-left-md text-light-black">500 Calories
                                    <i className="fa fa-random margin-left-md"></i>
                                    <i className="fa fa-ellipsis-h margin-left-md"></i>
                                </small>
                                */}

                        </h3>
                        {renderNutrients()}
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                {renderRecipes()}
                            </ul>
                        </div>
                        {/*
                            <span className="pull-right text-red margin-top-sm">
                                <i className="icon-heart margin-right-lg"></i>
                                <i className="icon-carrot margin-right-lg"></i>
                                <i className="icon-gluten"></i>
                            </span>
                            */}
                    </div>

                </div>
                <br/>
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
