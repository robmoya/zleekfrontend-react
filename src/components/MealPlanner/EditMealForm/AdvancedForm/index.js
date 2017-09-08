import React from  'react';
import createReactClass from 'create-react-class';
import Slider from 'rc-slider';


const AdvancedForm = createReactClass({
    changeSlider: function (e) {
        console.log(this.refs);
        // let buildPlan = {
        //     ...initialState.mealPlanner.buildPlan,
        //     "profile": {
        //         ...initialState.mealPlanner.buildPlan.profile,
        //         "nutrientsPerDay": {
        //             "carbohydrates": this.refs.carbohydrates.state.value,
        //             "fat": this.refs.fat.state.value,
        //             "protein": this.refs.protein.state.value,
        //             "calories": this.state.calories
        //         },
        //     }
        // }
        // this.setState({ buildPlan })
        // return buildPlan;
    },
    render: function (){

        return(
            <div className="">
                    <div className="col-lg-4">
                        Carbohydrates <span className="pull-right"><strong>%</strong></span>
                        <Slider className="margin-top-sm" ref="carbohydrates" step={1} min={0} max={1000} defaultValue={0} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="col-lg-4">
                        Fat <span className="pull-right"><strong>%</strong></span>
                        <Slider className="margin-top-sm" ref="fat" step={1} min={0} max={100} defaultValue={0} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="col-lg-4">
                        Protein <span className="pull-right"><strong>%</strong></span>
                        <Slider className="margin-top-sm" ref="protein" step={1} min={0} max={200} defaultValue={0} onAfterChange={this.changeSlider} />
                    </div>
                    <div className="clearfix"></div>
            </div>
        )
    }
})


export default AdvancedForm;
