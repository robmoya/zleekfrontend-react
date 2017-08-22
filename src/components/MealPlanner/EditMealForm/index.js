import React from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import initialState from '../../../core/reducers/initialState';
import * as actions from '../../../core/actions/mealPlannerActions';
import sampleApiCall from '../../../api/sampleApiCall';


import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

console.log(initialState.mealPlanner.buildPlan);

const EditMealForm = createReactClass({
    componentWillMount: function(){
        let buildPlan = initialState.mealPlanner;
        this.setState(buildPlan)
    },
    changeSlider: function (e) {
        let buildPlan = {
            "fn": "buildPlan",
            "numberOfDays": 1,
            "profile": {
              "nutrientsPerDay": {
                "carbohydrates": this.refs.carbohydrates.state.value,
                "fat": this.refs.fat.state.value,
                "protein": this.refs.protein.state.value,
                "calories": this.refs.calories.state.value
              },
              "mealsPerDay": 1,
              "recipesPerMeal": 1,
              "restrictions": {
                "isVegan": false,
                "isVegetarian": true,
                "isLactose": false
              }
            }
        }
        this.setState({buildPlan})
        return buildPlan;
    },
    onFormSubmit: function(e){
        e.preventDefault();
        const buildPlan = this.changeSlider();
        this.props.buildMealPlan(buildPlan);
    },
    render: function(){
        // console.log(this.props);
        const {carbohydrates, fat, protein, calories } = this.state.buildPlan.profile.nutrientsPerDay;

        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="col-lg-3">
                        Carbohydrates <strong>{carbohydrates}</strong>
                        <Slider ref="carbohydrates" step={1} min={0} max={2000} defaultValue={0}  onAfterChange={this.changeSlider}/>
                    </div>
                    <div className="col-lg-3">
                        Fat <strong>{fat}</strong>
                        <Slider ref="fat" step={1} min={0} max={2000} defaultValue={0}  onAfterChange={this.changeSlider}/>
                    </div>
                    <div className="col-lg-3">
                        Protein <strong>{protein}</strong>
                        <Slider ref="protein" step={1} min={0} max={2000} defaultValue={0}  onAfterChange={this.changeSlider}/>
                    </div>
                    <div className="col-lg-3">
                        Calories <strong>{calories}</strong>
                        <Slider ref="calories" step={1} min={0} max={2000} defaultValue={0}  onAfterChange={this.changeSlider}/>
                    </div>
                    <br/>
                    <input type="submit" value="Create New Meal" className="btn btn-primary pull-right"/>
                </form>
            </div>
        )
    }
})

EditMealForm.propTypes = {
    buildMealPlan: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        buildPlan: state.mealPlanner.buildPlan,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        buildMealPlan: (buildPlan) => {
            // console.log(buildPlan);
            // console.log(sampleApiCall);
            dispatch(actions.fetchDayPlan(buildPlan));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditMealForm);
