import React from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import initialState from '../../../core/reducers/initialState';
import * as actions from '../../../core/actions/mealPlannerActions';
// import sampleApiCall from '../../../api/sampleApiCall';


import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import './index.css';

// console.log(initialState.mealPlanner.buildPlan);

const EditMealForm = createReactClass({
    componentWillMount: function () {
        let buildPlan = initialState.mealPlanner;
        this.setState(buildPlan);
    },
    componentDidMount() {
    },
    changeSlider: function (e) {
        let buildPlan = {
            "numberOfDays": 1,
            "profile": {
                "nutrientsPerDay": {
                    "carbohydrates": this.refs.carbohydrates.state.value,
                    "fat": this.refs.fat.state.value,
                    "protein": this.refs.protein.state.value,
                    "calories": this.refs.calories.state.value
                },
                "mealsPerDay": 3,
                "recipesPerMeal": 2,
                "restrictions": {
                    "isVegan": false,
                    "isVegetarian": true,
                    "isLactose": false
                }
            }
        }
        this.setState({ buildPlan })
        return buildPlan;
    },
    onFormSubmit: function (e) {
        e.preventDefault();
        // const buildPlan = this.props.buildPlan;
        const buildPlan = this.changeSlider();
        // const profile = this.changeSlider();
        this.props.buildMealPlan(buildPlan);
    },
    render: function () {
        const { carbohydrates, fat, protein, calories } = this.state.buildPlan.profile.nutrientsPerDay;

        return (
            <div className="bg-white border-gray-hard border-radius-base">
                <form onSubmit={this.onFormSubmit} className="edit-meal-form">
                    <div className="col-lg-8">
                        <h3 className="margin-bottom-xl"><b>My Meal Planner</b></h3>
                    </div>
                    <div className="col-lg-4 margin-top-lg">
                        <input type="submit" value="Create New Meal" className="btn btn-primary pull-right" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-3">
                        Carbohydrates <span className="pull-right"><strong>{carbohydrates}g</strong></span>
                        <Slider className="margin-top-sm" ref="carbohydrates" step={1} min={0} max={1000} defaultValue={carbohydrates} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="col-lg-3">
                        Fat <span className="pull-right"><strong>{fat}g</strong></span>
                        <Slider className="margin-top-sm" ref="fat" step={1} min={0} max={100} defaultValue={fat} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="col-lg-3">
                        Protein <span className="pull-right"><strong>{protein}g</strong></span>
                        <Slider className="margin-top-sm" ref="protein" step={1} min={0} max={200} defaultValue={protein} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="col-lg-3">
                        Calories <span className="pull-right"><strong>{calories}kal</strong></span>
                        <Slider className="margin-top-sm" ref="calories" step={1} min={0} max={8000} defaultValue={calories} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="clearfix margin-bottom-xl" />
                </form>
            </div>
        )
    }
})

EditMealForm.propTypes = {
    buildPlan: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        buildPlan: state.mealPlanner.buildPlan,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        buildMealPlan: (buildPlan) => {
            console.log(buildPlan);
            dispatch(actions.fetchDayPlan(buildPlan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMealForm);
