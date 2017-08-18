import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Meal extends Component {
    render() {
        return(
            <div className="meal-card-container">
                <div>
                    <h3 className="margin-top-none">Meal
                        {/*
                            <small className="margin-left-md text-light-black">500 Calories
                                <i className="fa fa-random margin-left-md"></i>
                                <i className="fa fa-ellipsis-h margin-left-md"></i>
                            </small>
                            */}

                    </h3>
                    {/**
                        <p>
                            <small>Calories {nutrients.calories.toFixed(2)} &nbsp;</small>
                            <small>Protein {nutrients.protein.toFixed(2)} &nbsp;</small>
                            <small>Fat {nutrients.fat.toFixed(2)} &nbsp;</small>
                            <small>Carbohydrates {nutrients.carbohydrates.toFixed(2)} &nbsp;</small>
                            <small>Fiber {nutrients.fiber.toFixed(2)}</small>
                        </p>
                        /}

                    {/*
                        <span className="pull-right text-red margin-top-sm">
                            <i className="icon-heart margin-right-lg"></i>
                            <i className="icon-carrot margin-right-lg"></i>
                            <i className="icon-gluten"></i>
                        </span>
                        */}
                </div>
                <div className="clearfix"></div>



                <div className="meal-card-wrapper">
                    {/*{renderRecipes()}*/}


                </div>
            </div>
        )
    }
}

Meal.propTypes = {
    meal: PropTypes.shape({
        recipes: PropTypes.array.isRequired,
        nutrients: PropTypes.object.isRequired
    }).isRequired
}

export default Meal;
