import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { CustomModalStyles } from '../../../core/config';
import { substituteIngredientOptions, replaceIngredient } from '../../../core/actions/mealPlannerActions';
import './index.css';

const ChangeIngredient = createReactClass({
    afterOpenModal: function () {
        this.substituteIngredientOptions();
    },
    closeModal: function () {
        this.props.afterCloseModalFuc();
    },
    substituteIngredientOptions: function () {
        const mealPlan = {
            profile: this.props.mealPlanner.profile,
            descriptor: this.props.mealPlanner.descriptor,
            marker: {
                day: 0,
                meal: this.props.mealMarkerId,
                recipe: this.props.recipeMarkerId,
                ingredient: this.props.ingredientMarkerId
            }
        }
        this.props.substituteIngredientOptions(mealPlan);
    },
    selectIngredient: function (i) {
        this.closeModal();
        const ingredients = this.props.mealPlanner.substituteIngredientOptions.ingredients[i];
        const marker = {
            day: 0,
            meal: this.props.mealMarkerId,
            recipe: this.props.recipeMarkerId,
            ingredient: this.props.ingredientMarkerId
        };
        const buildPlan = {
            profile: this.props.mealPlanner.profile,
            descriptor: this.props.mealPlanner.descriptor,
            option: ingredients,
            marker
        }
        this.props.replaceIngredient(buildPlan);
    },
    render: function () {
        const { isFetching, ingredients } = this.props.mealPlanner.substituteIngredientOptions;

        const recipeIngredientCards = ingredients.map((ingredient, i) => {
            return (
                <div className="ingredient-card-for-change" key={i} onClick={() => this.selectIngredient(i)}>
                    <span>{ingredient.name}</span>
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
                    className="change-ingredient-modal-wrapper"
                    contentLabel="">
                    <div className="change-ingredient-modal">
                        <span className="fa fa-close" onClick={this.closeModal}></span>
                        <p className="change-meal-title text-black-light">Change your Ingredient
                            <i className="fa fa-random margin-left-md text-primary" onClick={this.substituteIngredientOptions}></i>
                        </p>
                        <div>
                            {isFetching &&
                                <div className="change-ingredient-loading">
                                    <span>
                                        <i className="fa fa-circle-o-notch fa-spin fa-fw margin-left-xs"></i>
                                    </span>
                                </div>
                            }
                            {recipeIngredientCards}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
})

ChangeIngredient.propTypes = {
    ingredientMarkerId: PropTypes.number.isRequired,
    recipeMarkerId: PropTypes.number.isRequired,
    mealMarkerId: PropTypes.number.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    afterCloseModalFuc: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        mealPlanner: state.mealPlanner
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        substituteIngredientOptions: function (mealPlan) {
            dispatch(substituteIngredientOptions(mealPlan));
        },
        replaceIngredient: function (buildPlan) {
            dispatch(replaceIngredient(buildPlan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeIngredient);
