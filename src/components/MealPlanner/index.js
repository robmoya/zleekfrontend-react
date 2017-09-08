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
        let buildPlan = {
            "numberOfDays": 1,
            "profile": initialState.mealPlanner.profile
        }
        this.props.onMount(buildPlan);
    },
    handleRecipeChange: function (marker) {
        // let { calories, protein, fat, carbohydrates } = this.props.dayPlans[0].nutrients;

        let substitutePlan = {
            "profile": {
                ...initialState.mealPlanner.profile,
            },
            "descriptor": this.props.descriptor,
            "marker": {
                ...marker,
                day: 0
            }
        };
        this.props.substituteRecipe(substitutePlan);
    },
    handleDayChange: function (e) {
        e.preventDefault()
    },
    render: function () {
        const { isFetching, errorInFetch, errorMessage, substituteRecipeObj } = this.props;
        let renderError = () => {
            if (errorInFetch) {
                return <div className="h4 text-danger">{errorMessage}</div>
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
                day = objDate.toLocaleString(locale, { day: "numeric" }),
                month = objDate.toLocaleString(locale, { month: "short" });
            return <span>{`${month} ${day}th`}</span>
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
                                <div className="col-xs-12 margin-top-md margin-bottom-md">
                                    <div className="bg-white border-gray-hard border-radius-base">
                                        <div className="row">
                                            <div className="col-lg-4 text-center">
                                                <button className="btn btn-link btn-block" onClick={this.handleDayChange}>
                                                    <i className="fa fa-chevron-left text-light-black"></i>
                                                </button>
                                            </div>
                                            <div className="col-lg-4 text-center border-gray-hard-left">
                                                <button className="btn btn-link text-decoration-none">
                                                    <span className="text-light-black">
                                                        <i className="fa fa-calendar"></i> {renderDate()} Plan
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="col-lg-4 text-center border-gray-hard-left">
                                                <button className="btn btn-link btn-block" onClick={this.handleDayChange}>
                                                    <i className="fa fa-chevron-right text-light-black"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    {renderError()}
                                    {renderMeals()}
                                </div>
                                <div className="col-lg-3 stats-info margin-bottom-xl">
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
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.mealPlanner.isFetching,
        errorInFetch: state.mealPlanner.errorInFetch,
        errorMessage: state.mealPlanner.errorMessage,
        descriptor: state.mealPlanner.descriptor,
        dayPlans: state.mealPlanner.dayPlans,
        profile: state.mealPlanner.profile,
        substituteRecipeObj: state.mealPlanner.substituteRecipe
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (buildPlan) => {
            dispatch(actions.fetchDayPlan(buildPlan));
        },
        substituteRecipe: (subRecipe) => {
            dispatch(actions.substituteRecipe(subRecipe))
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(MealPlanner);
