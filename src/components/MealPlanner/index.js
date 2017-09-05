import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../core/actions/mealPlannerActions';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import initialState from '../../core/reducers/initialState';

import Meal from '../common/Meal';
import EditMealForm from './EditMealForm';
import LoadingIndicator from '../common/LoadingIndicator';


const MealPlanner = createReactClass({
    componentWillMount: function () {
        this.props.onMount();
    },
    handleRecipeChange: function (marker) {
        let {calories, protein, fat, carbohydrates} = this.props.dayPlans[0].nutrients;

        let substitutePlan = {
            "profile": {
                ...initialState.mealPlanner.substituteRecipe.profile,
                "nutrientsPerDay": {
                    "carbohydrates": carbohydrates,
                    "fat": fat,
                    "protein": protein,
                    "calories":calories
                }
            },
            "descriptor": this.props.descriptor,
            "marker": {
                ...marker,
                day:0
            }
        };
        this.props.substituteRecipe(substitutePlan);
    },
    handleDayChange: function (e){
        e.preventDefault()
    },
    render: function () {
        const { isFetching, errorInFetch, errorMessage, substituteRecipeObj } = this.props;
        let renderError = () => {
            if (errorInFetch) {
                return <div className="h4 text-primary">{errorMessage}</div>
            }
        }

        let renderNutrients = () => {
            if (!isFetching) {
                const dayPlan = this.props.dayPlans[0];
                const { nutrients } = dayPlan;
                return Object.keys(nutrients).map(function (key, i) {
                    return <div className="label-pair" key={i}>
                        <span className="text-light-black">{key}</span>
                        <span className="text-light-black">{nutrients[key].toFixed(0)}</span>
                    </div>;
                })
            }
        }
        let renderMeals = () => {
            if (!isFetching) {
                const dayPlan = this.props.dayPlans[0];
                const { mealPlans } = dayPlan;
                return mealPlans.map((mealPlan, i) => {
                    return (
                        <Meal key={i} meal={mealPlan} mealMarkerId={i} substituteRecipe={substituteRecipeObj} onHandleRecipeChange={this.handleRecipeChange} />
                    )
                })
            }
        }
        let renderDate = () => {
            let objDate = new Date(),
                locale = "en-us",
                day = objDate.toLocaleString(locale, {day: "numeric"}),
                month = objDate.toLocaleString(locale, { month: "short" });
                return <span>{`${month} ${day}th`}</span>
        }

        let renderFetching = () => {
            if (isFetching && !errorInFetch) {
                return <div className="h4 text-primary">Fetching Your Meal Plan</div>
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12 margin-top-md">
                        <EditMealForm />
                    </div>
                </div>
                <LoadingIndicator isLoading={isFetching}>
                    {
                        <div>
                            <div className="row">
                                <div className="col-xs-12 text-primary text-center">
                                    <p className="h4 margin-top-md">
                                        <button className="btn btn-link" onClick={this.handleDayChange}><i className="fa fa-chevron-left text-primary"></i></button>
                                        <i className="fa fa-calendar"></i> {renderDate()} Plan
                                        <button className="btn btn-link" onClick={this.handleDayChange}><i className="fa fa-chevron-right text-primary"></i></button>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <div id="daily-meal-plan" className="bg-white border-gray-hard border-radius-base">
                                        {renderError()}
                                        {renderFetching()}
                                        {renderMeals()}
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="col-lg-3 margin-top-md stats-info margin-bottom-xl">
                                    <div className="bg-white border-gray-hard border-radius-base padding-left-right">
                                        <h3 className="text-light-black block-header margin-bottom-lg">
                                            <b>Total Nutrients</b>
                                        </h3>
                                        <hr />
                                        {renderNutrients()}
                                        <div className="clearfix margin-bottom-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </LoadingIndicator>

            </div>
        );
    }
})
//
MealPlanner.propTypes = {
    onMount: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    buildPlan: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.mealPlanner.isFetching,
        errorInFetch: state.mealPlanner.errorInFetch,
        errorMessage: state.mealPlanner.errorMessage,
        descriptor: state.mealPlanner.descriptor,
        dayPlans: state.mealPlanner.dayPlans,
        buildPlan: state.mealPlanner.buildPlan,
        substituteRecipeObj: state.mealPlanner.substituteRecipe
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            dispatch(actions.fetchDayPlan(initialState.mealPlanner.buildPlan));
        },
        substituteRecipe: (subRecipe) => {
            dispatch(actions.substituteRecipe(subRecipe))
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);
