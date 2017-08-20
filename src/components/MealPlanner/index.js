import React, { Component } from 'react';

// import { Link } from 'react-router';
import Meal from '../common/Meal';
import ZleekApi from '../../api/zleekApi.js';
// import EditMealForm from './EditMealForm';
import sampleApiCall from '../../api/sampleApiCall';

const createReactClass = require('create-react-class');



const MealPlanner = createReactClass({
    // getInitialState: function(){
    //     return {
    //         meals: [],
    //         nutrients: []
    //     }
    // },
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
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>My Meal Planner</h1>
                        {/*<EditMealForm handleMealForm={this.handleMealForm} nutrients={nutrients}/>*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 bg-white border-gray-hard border-radius-base">

                        <div className="row">
                            <div className="col-lg-9">
                                <div id="daily-meal-plan">
                                    {/*{renderMeals()}*/}
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <br/>
                                <h4>Total Nutrients</h4>
                                {/*
                                    <p>Calories <span className="pull-right">{nutrients.calories}</span></p>
                                    <p>Protein <span className="pull-right">{nutrients.protein}</span></p>
                                    <p>Fat <span className="pull-right">{nutrients.fat}</span></p>
                                    <p>Carbohydrates <span className="pull-right">{nutrients.carbohydrates}</span></p>
                                    <p>Fiber <span className="pull-right">{nutrients.fiber}</span></p>
                                    */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

export default MealPlanner;
