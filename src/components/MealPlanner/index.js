import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../core/actions/mealPlannerActions';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'

import Meal from '../common/Meal';
// import EditMealForm from './EditMealForm';
 import sampleApiCall from '../../api/sampleApiCall';


const MealPlanner = createReactClass({
    componentWillMount: function(){
        this.props.onMount();
    },
    componentDidMount: function(){
    },
    render: function() {
        const { isFetched } = this.props;
        // const dayPlans = this.props.dayPlans;

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
                        <Meal key={i} meal={mealPlan}/>
                    )
                })
            }
        }


        let renderFetching = () => {
            if (!isFetched) {
                return <div className="h4 text-primary">Fetching Your Meal Plan</div>
            }
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h1>My Meal Planner</h1>

                        {/*<EditMealForm handleMealForm={this.handleMealForm} nutrients={nutrients}/>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12 bg-white border-gray-hard border-radius-base">

                        <div className="row">
                            <div className="col col-lg-9">
                                <div id="daily-meal-plan">
                                    {renderMeals()}
                                    {renderFetching()}
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
};

const mapStateToProps = (state) => {
    return {
        isFetched: state.mealPlanner.isFetched,
        error: state.mealPlanner.error,
        dayPlans: state.mealPlanner.dayPlans,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            dispatch(actions.fetchDayPlan(sampleApiCall));
            // dispatch(actions.createMealPlan({"mealsPerDay": 2, "recipesPerMeal": 3}));
        }
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(MealPlanner);
