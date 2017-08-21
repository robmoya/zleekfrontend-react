import React from 'react';
import {connect} from 'react-redux';
// import * as actions from '../../core/actions/mealPlannerActions';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'

import Meal from '../common/Meal';
// import ZleekApi from '../../api/zleekApi.js';
// import EditMealForm from './EditMealForm';
// import sampleApiCall from '../../api/sampleApiCall';


const MealPlanner = createReactClass({
    componentWillMount: function(){
        this.props.onMount();
    },
    componentDidMount: function(){
        // ZleekApi.getMealPlan(sampleApiCall).then((data) => {
        //     // this.setState({
        //     //     meals: data.meals,
        //     //     nutrients: data.nutrients
        //     // });
        //     console.log(data);
        // }).catch((error) => {
        //     console.log("Api call error");
        // })
    },
    renderLoading(){
        if (this.props.fetching) {
            return <div>Fetching</div>
        }
    },
    render: function() {
        const { mealPlans, nutrients } = this.props.dayPlan;

        let renderMeals = () => {
            return mealPlans.map((mealPlan, i) => {
                return (
                    <Meal key={i} meal={mealPlan}/>
                )
            })
        }
        let renderNutrients = () => {
            return Object.keys(nutrients).map(function(key, i) {
                return <p key={i}>{key}: {nutrients[key]}</p>;
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h1>My Meal Planner</h1>
                        {this.renderLoading()}
                        {/*<EditMealForm handleMealForm={this.handleMealForm} nutrients={nutrients}/>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12 bg-white border-gray-hard border-radius-base">

                        <div className="row">
                            <div className="col col-lg-9">
                                <div id="daily-meal-plan">
                                    {renderMeals()}
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
    dayPlan: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        fetching: state.mealPlanner.fetching,
        dayPlan: state.mealPlanner.dayPlans
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            // dispatch(fetchMealPlan({"mealsPerDay": 2, "recipesPerMeal": 3}));
            // dispatch(actions.createMealPlan({"mealsPerDay": 2, "recipesPerMeal": 3}));
        }
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(MealPlanner);
