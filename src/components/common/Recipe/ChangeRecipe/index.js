import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { substituteRecipeOptions, replaceRecipe } from '../../../../core/actions/mealPlannerActions'

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'initial'
    }
};

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
        const marker = {
            day: 0,
            meal: this.props.mealMarkerId,
            recipe: this.props.recipeMarkerId
        };
        this.props.replaceRecipe(recipePlan, marker);
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
                    style={customStyles}
                    className="change-meal-modal-wrapper"
                    contentLabel="">
                    <div className="change-meal-modal">
                        <span className="fa fa-close" onClick={this.closeModal}></span>
                        <p className="change-meal-title">Change your meal
                            <i className="fa fa-random margin-left-md" onClick={this.substituteRecipeOptions}></i>
                        </p>
                        <div className="hidden-xs">
                            {isFetching &&
                                <div className="meal-card-loading">
                                    <span>
                                        <i className="fa fa-circle-o-notch fa-spin fa-fw margin-left-xs"></i>
                                    </span>
                                </div>}
                            {recipePlanCards}
                        </div>
                        <div className="meal-card-wrapper-xs visible-xs">
                            <div className="meal-card-list">
                                <div>
                                    <div className="bg-size-cover meal-cover-xs" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan1.jpg)' }}>
                                        <div>
                                            <img alt="" src="https://res.cloudinary.com/turquoise-software/image/upload/c_fill,g_face,h_200,w_200/v1471623391/profile-katyperry_lezdwq.jpg" />
                                        </div>
                                    </div>
                                    <div className="meal-tags-xs">
                                        <div>
                                            <i className="icon-heart margin-right-lg"></i>
                                            <i className="icon-carrot margin-right-lg"></i>
                                        </div>
                                        <h6 className="text-center">Created by
                                            <span className="margin-left-xs">
                                                <b>Lazar A</b>
                                            </span>
                                        </h6>

                                    </div>
                                    <div className="text-center padding-left-right">
                                        <hr />
                                        <h4 className="margin-bottom-xs">Omelette</h4>
                                        <h6 className="margin-top-xs">
                                            <i>146 Reviews</i>
                                        </h6>

                                    </div>
                                    <div className="btn-order-wrapper">
                                        <button className="btn btn-gray-light-transparent btn-sm btn-block">
                                            <b>Change</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
        replaceRecipe: function (recipePlan, marker) {
            dispatch(replaceRecipe(recipePlan, marker));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRecipe);
