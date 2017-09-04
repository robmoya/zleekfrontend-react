import React from  'react';
import createReactClass from 'create-react-class';
import initialState from '../../../../core/reducers/initialState';


const BasicForm = createReactClass({
    componentWillMount: function(){
        this.setState({mealsPerDay: initialState.mealPlanner.buildPlan.profile.mealsPerDay});
    },
    componentDidMount: function(){
    },
    handleBasicForm: function(e){
        let mealsPerDay = Number(e.target.value);

        let basicBuildPlan = {
            mealsPerDay: mealsPerDay
        }
        this.setState({mealsPerDay: mealsPerDay});
        this.props.onHandleBasicForm(basicBuildPlan);
    },
    render: function (){
        return(
            <div>
                <div className="col-lg-9">
                    <label className="control-label">I would like to eat... </label>
                    <div className="btn-toolbar">
                        <button type="button" className="btn btn-default">Anything</button>
                        <button type="button" className="btn btn-default">Vegan</button>
                        <button type="button" className="btn btn-default">Atkins</button>
                        <button type="button" className="btn btn-default">Pregnancy</button>
                        <button type="button" className="btn btn-default">Carb Cycling</button>
                        <button type="button" className="btn btn-default">High Protein</button>
                        <button type="button" className="btn btn-default">Low Fat</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <label className="control-label">Meals Per Day</label>
                    <select className="form-control" value={this.state.mealsPerDay} onChange={this.handleBasicForm}>
                        <option value="1">1 meal</option>
                        <option value="2">2 meals</option>
                        <option value="3">3 meals</option>
                    </select>
                </div>
                <div className="clearfix"></div>
            </div>

        )
    }
})


export default BasicForm;
