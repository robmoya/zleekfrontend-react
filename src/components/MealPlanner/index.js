import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../core/actions/mealPlannerActions';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import initialState from '../../core/reducers/initialState';

import Meal from '../common/Meal';
import EditMealForm from './EditMealForm';


const MealPlanner = createReactClass({
    componentWillMount: function(){
        this.props.onMount();
    },
    handleRecipeChange: function(subRecipe){
        this.props.substituteRecipe(subRecipe);
    },
    render: function() {
        const { isFetched, errorInFetch, errorMessage } = this.props;
        let renderError = () => {
            if (errorInFetch) {
                return <div className="h4 text-primary">{errorMessage}</div>
            }
        }

        let renderNutrients = () => {
            if(isFetched){
                const dayPlan = this.props.dayPlans[0];
                const { nutrients } = dayPlan;
                return Object.keys(nutrients).map(function(key, i) {
                    return <p key={i}>{key}: {nutrients[key]}</p>;
                })
            }
        }
        let renderMeals = () => {
            if (isFetched) {
                const dayPlan = this.props.dayPlans[0];
                const { mealPlans } = dayPlan;
                return mealPlans.map((mealPlan, i) => {
                    return (
                        <Meal key={i} meal={mealPlan} onHandleRecipeChange={this.handleRecipeChange}/>
                    )
                })
            }
        }
        let renderFetching = () => {
            if (!isFetched && !errorInFetch) {
                return <div className="h4 text-primary">Fetching Your Meal Plan</div>
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h1>My Meal Planner</h1>
                        {/*<EditMealForm handleMealForm={this.handleMealForm}/>*/}
                        <EditMealForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12 bg-white border-gray-hard border-radius-base">

                        <div className="row">
                            <div className="col col-lg-9">
                                <div id="daily-meal-plan">

                                    {renderMeals()}
                                    {renderFetching()}
                                    {renderError()}
                                </div>
                            </div>
                            <div className="col col-lg-3">
                            <br/>
                                <h4>Total Nutrients</h4>
                                {renderNutrients()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})
//
MealPlanner.propTypes = {
    onMount: PropTypes.func,
    isFetched: PropTypes.bool.isRequired,
    buildPlan: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isFetched: state.mealPlanner.isFetched,
        isFetching: state.mealPlanner.isFetching,
        errorInFetch: state.mealPlanner.errorInFetch,
        errorMessage: state.mealPlanner.errorMessage,
        descriptor: state.mealPlanner.descriptor,
        dayPlans: state.mealPlanner.dayPlans,
        buildPlan: state.mealPlanner.buildPlan
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



export default connect(mapStateToProps,mapDispatchToProps)(MealPlanner);
