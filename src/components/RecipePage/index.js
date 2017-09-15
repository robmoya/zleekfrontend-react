import React from 'react';
import { connect } from 'react-redux';
import createReactClass from 'create-react-class';
import ChangeIngredient from './ChangeIngredient';
import LoadingIndicator from '../common/LoadingIndicator';

const RecipePage = createReactClass({
    componentWillMount: function () {
        this.setState({
            statsBlcokStatus: true,
            ingredientsBlockStatus: true,
            isChangeIngredientModalOpen: false,
            ingredientMarkerId: 0
        });
    },
    openChangeIngredientModal: function (i) {
        this.setState({ isChangeIngredientModalOpen: true, ingredientMarkerId: i });
    },
    closeChangeIngredientModal: function () {
        this.setState({ isChangeIngredientModalOpen: false });
    },
    openStatsBlock: function () {
        const status = this.state.statsBlcokStatus;
        this.setState({
            statsBlcokStatus: !status
        });
    },
    openIngredientsBlock: function () {
        const status = this.state.ingredientsBlockStatus;
        this.setState({
            ingredientsBlockStatus: !status
        });
    },
    render: function () {
        const { mealMarkerId, recipeMarkerId } = this.props.location.state;
        const { name, directions, ingredients, nutrients, img } = this.props.mealPlans[mealMarkerId].recipePlans[recipeMarkerId];
        const { isFetching } = this.props;

        let renderDirections = () => {
            return directions.map((direction, i) => {
                return <div key={i} className="cooking-step">
                    <div className="step-number">
                        <span>{i + 1}</span>
                    </div>
                    <div className="step-description">
                        {direction}
                        <div className="bg-size-cover recipe-image" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan2.jpg)' }}></div>
                    </div>
                </div>
            });
        }

        let renderIngredients = () => {
            return ingredients.map((ingredient, i) => {
                return <li key={i}>{ingredient.name} <i className="fa fa-random text-dark-gray margin-left-xs" onClick={() => this.openChangeIngredientModal(ingredient.ingredientKey)}></i></li>
            });
        }

        return (
            <div className="bg-gray-light recipe-page">
                <LoadingIndicator isLoading={isFetching}>
                    {this.state.isChangeIngredientModalOpen && <ChangeIngredient modalIsOpen={true} mealMarkerId={mealMarkerId} recipeMarkerId={recipeMarkerId} ingredientMarkerId={this.state.ingredientMarkerId} afterCloseModalFuc={this.closeChangeIngredientModal} />}
                    <div className="bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 recipe-header">
                                    <div>
                                        <h1><i className="fa fa-chevron-left margin-right-sm" onClick={this.props.history.goBack}></i>{name}</h1>
                                    </div>
                                    <div className="recipe-recommendations">
                                        <div className="bg-size-cover border-radius-base" style={{ backgroundImage: `url(${img})` }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 margin-top-sm">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="row">
                                                <div className="col-xs-12 stats-info">
                                                    <div className="bg-white border-gray-hard border-radius-base padding-left-right">
                                                        <h3 className="text-light-black block-header">
                                                            <b>Total Stats</b>
                                                            <span className="stats-info-icon">
                                                                <i className="fa fa-info"></i>
                                                            </span>
                                                            <span className="block-arrow" onClick={this.openStatsBlock}>
                                                                {this.state.statsBlcokStatus === true ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
                                                            </span>
                                                        </h3>
                                                        {this.state.statsBlcokStatus === true &&
                                                            <div>
                                                                <hr className="margin-top-none" />
                                                                <div className="label-pair">
                                                                    <span className="text-light-black">Carbs</span>
                                                                    <span className="text-light-black">{nutrients.carbohydrates.toFixed(0)}g</span>
                                                                </div>
                                                                <div className="label-pair">
                                                                    <span className="text-light-black">Protein</span>
                                                                    <span className="text-light-black">{nutrients.protein.toFixed(0)}g</span>
                                                                </div>
                                                                <div className="label-pair">
                                                                    <span className="text-light-black">Fat</span>
                                                                    <span className="text-light-black">{nutrients.fat.toFixed(0)}g</span>
                                                                </div>
                                                                <div className="label-pair">
                                                                    <span className="text-light-black">Calories</span>
                                                                    <span className="text-light-black">{nutrients.calories.toFixed(0)}</span>
                                                                </div>
                                                                <hr />
                                                                {/*<Link to="#" id="nutrition-detail" className="text-primary">Detailed Nutrition</Link>*/}
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 margin-top-sm ingredients-info margin-bottom-sm">
                                                    <div className="bg-white border-gray-hard border-radius-base padding-left-right">
                                                        <h3 className="text-light-black block-header">
                                                            <b>{ingredients.length} Ingredients</b>
                                                            <span className="block-arrow" onClick={this.openIngredientsBlock}>
                                                                {this.state.ingredientsBlockStatus === true ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
                                                            </span>
                                                        </h3>

                                                        {this.state.ingredientsBlockStatus === true &&
                                                            <div>
                                                                <div className="ingredients-list text-light-black margin-top-md">
                                                                    <ul className="ingredients-ul">
                                                                        {renderIngredients()}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <div className="bg-white border-radius-base recipe-content border-gray-hard">
                                                        <div className="nutrition-cate">
                                                            <span>Vegan</span>
                                                            <span className="active">High Protein</span>
                                                            <span>Daily Free</span>
                                                            <span className="active">Healthy</span>
                                                            <span>Low Cabs</span>
                                                            <span>Vegetarian</span>
                                                        </div>
                                                        <div className="recipe-notes">
                                                            <h2 className="text-light-black">
                                                                <b>Directions</b>
                                                            </h2>
                                                            {renderDirections()}
                                                        </div>

                                                        <br /><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </LoadingIndicator>
            </div>
        );
    }
})

const mapStateToProps = (state) => {
    return {
        mealPlans: state.mealPlanner.dayPlans[0].mealPlans,
        isFetching: state.mealPlanner.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
