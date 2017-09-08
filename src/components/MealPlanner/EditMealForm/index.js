import React from 'react';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import initialState from '../../../core/reducers/initialState';
import * as actions from '../../../core/actions/mealPlannerActions';
import AdvancedForm from './AdvancedForm';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import './index.css';

const EditMealForm = createReactClass({
    componentWillMount: function () {
        const profile = initialState.mealPlanner.profile;
        this.setState({mealsPerDay:profile.mealsPerDay,calories:profile.nutrientsPerDay.calories});
    },
    componentDidMount() {
    },
    toggleAdvSettings: function (e) {
        e.preventDefault();
        this.setState({
            isAdvanced: !this.state.isAdvanced
        })
    },
    changeMealsPerDay: function (e) {
        this.setState({ mealsPerDay: Number(e.target.value) });
    },
    changeCalories: function (e) {
        this.setState({ calories: Number(e.target.value) });
    },


    onFormSubmit: function (e) {
        e.preventDefault();
        if (this.state.isAdvanced) {
            // let buildPlan = this.changeSlider();
            // buildPlan.profile.mealsPerDay = this.state.mealsPerDay;
            // buildPlan.profile.nutrientsPerDay.calories = this.state.calories;
            // this.props.buildMealPlan(buildPlan);
            console.log("test advanced");
        } else {
            this.handleBasicForm();
        }

    },
    handleBasicForm: function () {
        let buildPlan = {profile:initialState.mealPlanner.profile};
        buildPlan.numberOfDays = 1;
        buildPlan.profile.mealsPerDay = this.state.mealsPerDay;
        buildPlan.profile.nutrientsPerDay.calories = this.state.calories;

        this.props.buildMealPlan(buildPlan);
    },
    render: function () {
        let { isAdvanced } = this.state;
        let renderSettingsTrigger = () => {
            if (isAdvanced) {
                return "Basic Settings"
            } else {
                return "Advanced Settings"
            }
        }
        let renderSettings = () => {
            if (isAdvanced) {
                return (
                    <AdvancedForm/>
                )
            } else {
                return (
                    <div>
                        <div className="form-inline">
                            <div className="form-group margin-right-xl">
                                <label className="control-label">Meals Calorie/Day:</label>
                                <input type="text" className="form-control margin-left-sm" defaultValue={this.state.calories} onKeyUp={this.changeCalories} />
                            </div>
                            <div className="form-group margin-right-xl">
                                <label className="control-label">I would like to eat:</label>
                                <select className="form-control margin-left-sm" defaultValue={this.state.mealsPerDay} onChange={this.changeMealsPerDay}>
                                    <option value="1">1 meal</option>
                                    <option value="2">2 meals</option>
                                    <option value="3">3 meals</option>
                                    <option value="4">4 meals</option>
                                    <option value="5">5 meals</option>
                                    <option value="6">6 meals</option>
                                    <option value="7">7 meals</option>
                                    <option value="8">8 meals</option>
                                </select>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                )
            }
        }

        return (
            <div className="bg-white border-gray-hard border-radius-base">
                <form onSubmit={this.onFormSubmit} className="edit-meal-form">
                    <div className="form-group">
                        <div className="col-lg-9">
                            <h3 className="margin-bottom-xl"><b>My Meal Planner</b></h3>
                        </div>
                        <div className="col-lg-3 text-right">
                            <button className="btn-link margin-top-xl" onClick={this.toggleAdvSettings}>{renderSettingsTrigger()}</button>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="col-lg-9">
                            {renderSettings()}
                        </div>
                        <div className="col-lg-3">
                            <button type="submit" className="btn btn-primary btn-create-meal">
                                Create New Meal<i className="fa fa-magic margin-left-xs"></i>
                            </button>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="meal-tag-list bg-gray-light border-gray-hard-top">
                        <button type="button" className="btn btn-default">Anything</button>
                        <button type="button" className="btn btn-default">Vegan</button>
                        <button type="button" className="btn btn-default">Paleo</button>
                        <button type="button" className="btn btn-default">Atkins</button>
                        <button type="button" className="btn btn-default">Pregnancy</button>
                        <button type="button" className="btn btn-default">Carb Cycling</button>
                        <button type="button" className="btn btn-default">High Protein</button>
                        <button type="button" className="btn btn-default">Low Fat</button>
                        <button type="button" className="btn btn-default">Diabetes</button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        )
    }
})

EditMealForm.propTypes = {
    profile: PropTypes.object.isRequired,
    isAdvanced: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => {
    return {
        profile: state.mealPlanner.profile,
        isAdvanced: state.mealPlanner.isAdvanced
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        buildMealPlan: (buildPlan) => {
            dispatch(actions.fetchDayPlan(buildPlan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMealForm);
