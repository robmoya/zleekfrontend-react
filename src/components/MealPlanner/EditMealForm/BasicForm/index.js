import React from 'react';
import createReactClass from 'create-react-class';
import initialState from '../../../../core/reducers/initialState';
import './index.css';


const BasicForm = createReactClass({
    componentWillMount: function () {
        this.setState({ mealsPerDay: initialState.mealPlanner.profile.mealsPerDay });
    },
    componentDidMount: function () {
    },
    changeMealsPerDay: function (e) {
        let mealsPerDay = Number(e.target.value);
        this.setState({ mealsPerDay: mealsPerDay });
    },
    handleBasicForm: function (e) {
        const basicBuildPlan = {
            mealsPerDay: this.state.mealsPerDay
        }
        this.props.onHandleBasicForm(basicBuildPlan);
    },
    render: function () {
        return (
            <div>
                <div className="col-xs-12 form-inline">
                    <div className="form-group margin-right-xl">
                        <label className="control-label">Meals Calorie/Day:</label>
                        <input className="form-control margin-left-sm" value="1800" />
                    </div>
                    <div className="form-group">
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
})


export default BasicForm;
