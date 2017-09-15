import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { CustomModalStyles } from '../../../../core/config';
import { substituteRecipeOptions, replaceRecipe } from '../../../../core/actions/mealPlannerActions';

const ChangeRecipe = createReactClass({
    afterOpenModal: function () {
        this.substituteRecipeOptions();
    },
    closeModal: function () {
        this.props.afterCloseModalFuc();
    },
    substituteRecipeOptions: function () {
        const mealPlan = {
            profile: this.props.mealPlanner.profile,
            descriptor: this.props.mealPlanner.descriptor,
            marker: {
                day: 0,
                meal: this.props.mealMarkerId,
                recipe: this.props.recipeMarkerId
            }
        }
        this.props.substituteRecipeOptions(mealPlan);
    },
    selectRecipe: function (i) {
        this.closeModal();
        const recipePlan = this.props.mealPlanner.substituteRecipeOptions.recipePlans[i];
        const recipeDescriptor = recipePlan.recipeDescriptor;
        const marker = {
            day: 0,
            meal: this.props.mealMarkerId,
            recipe: this.props.recipeMarkerId
        };
        const buildPlan = {
            profile: this.props.mealPlanner.profile,
            descriptor: this.props.mealPlanner.descriptor,
            recipeDescriptor,
            marker
        }
        this.props.replaceRecipe(buildPlan);
    },
    render: function () {
        const { isFetching, recipePlans } = this.props.mealPlanner.substituteRecipeOptions;

        const recipePlanCards = recipePlans.map((recipePlan, i) => {
            return (
                <div className="meal-card-for-change" key={i} onClick={() => this.selectRecipe(i)}>
                    <div className="meal-img" style={{ backgroundImage: `url(${recipePlan.img})` }}></div>
                    <div>
                        <h4>{recipePlan.name}</h4>
                        <div className="meal-creator-info">
                            {recipePlan.nutrients.calories.toFixed(2)} calories
                    </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={CustomModalStyles}
                    className="change-meal-modal-wrapper"
                    contentLabel="">
                    <div className="change-meal-modal">
                        <span className="fa fa-close" onClick={this.closeModal}></span>
                        <p className="change-meal-title">Change your meal
                            <i className="fa fa-random margin-left-md" onClick={this.substituteRecipeOptions}></i>
                        </p>
                        <div>
                            {isFetching &&
                                <div className="meal-card-loading">
                                    <span>
                                        <i className="fa fa-circle-o-notch fa-spin fa-fw margin-left-xs"></i>
                                    </span>
                                </div>}
                            {recipePlanCards}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
})

ChangeRecipe.propTypes = {
    recipeMarkerId: PropTypes.number.isRequired,
    mealMarkerId: PropTypes.number.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    afterCloseModalFuc: PropTypes.func.isRequired,
    substituteRecipeOptions: PropTypes.func.isRequired,
    mealPlanner: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        mealPlanner: state.mealPlanner
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        substituteRecipeOptions: function (mealPlan) {
            dispatch(substituteRecipeOptions(mealPlan));
        },
        replaceRecipe: function (buildPlan) {
            dispatch(replaceRecipe(buildPlan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRecipe);
