import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import { closeChangeRecipeModal } from '../../../../core/actions/changeRecipeActions.js';
import Modal from 'react-modal';

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

    },
    closeModal: function () {
        this.props.closeChangeRecipeModal();
    },
    render: function(){
        return(
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
                            <i className="fa fa-random margin-left-md"></i>
                        </p>
                        <div className="hidden-xs">
                            You are looking for recipes similar to&nbsp;
                            <span className="text-blue">omelette</span>
                            <img alt="" src="https://res.cloudinary.com/turquoise-software/image/upload/c_fill,g_face,h_200,w_200/v1471623391/profile-katyperry_lezdwq.jpg" className="border-radius-base margin-right-xs" />
                        </div>
                        <p className="customize-title hidden-xs">Customize your recipe</p>
                        <div className="slider-label">
                            <span>Carbs
                                <br />
                            </span>
                            <span>Fats
                                <br />
                            </span>
                            <span className="margin-right-none">Protein
                                <br />
                            </span>
                        </div>
                        <h6 className="text-center-xs">Similar to
                            <span className="text-blue">Omelette</span>
                        </h6>
                        <div className="hidden-xs">
                            <div className="meal-card-for-change">
                                <div className="meal-img" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan1.jpg)' }}></div>
                                <div>
                                    <h4>Double Omelette</h4>
                                    <p>Calories: 300</p>
                                    <div className="meal-creator-info">
                                        <img alt="" src="https://res.cloudinary.com/turquoise-software/image/upload/c_fill,g_face,h_200,w_200/v1471623391/profile-katyperry_lezdwq.jpg" className="border-radius-circle margin-right-xs" />
                                        Lazar A. Recommands
                                    </div>
                                </div>
                                <div className="meal-tags">
                                    <i className="icon-carb"></i>
                                    <i className="icon-heart"></i>
                                </div>
                            </div>
                            <div className="meal-card-for-change">
                                <div className="meal-img" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan1.jpg)' }}></div>
                                <div>
                                    <h4>Double Omelette</h4>
                                    <p>Calories: 300</p>
                                    <div className="meal-creator-info">
                                        <img alt="" src="https://res.cloudinary.com/turquoise-software/image/upload/c_fill,g_face,h_200,w_200/v1471623391/profile-katyperry_lezdwq.jpg" className="border-radius-circle margin-right-xs" />
                                        Lazar A. Recommands
                                    </div>
                                </div>
                                <div className="meal-tags">
                                    <i className="icon-carb"></i>
                                    <i className="icon-heart"></i>
                                </div>
                            </div>
                            <div className="meal-card-for-change">
                                <div className="meal-img" style={{ backgroundImage: 'url(http://op9ls46e5.bkt.gdipper.com/meal_plan1.jpg)' }}></div>
                                <div>
                                    <h4>Double Omelette</h4>
                                    <p>Calories: 300</p>
                                    <div className="meal-creator-info">
                                        <img alt="" src="https://res.cloudinary.com/turquoise-software/image/upload/c_fill,g_face,h_200,w_200/v1471623391/profile-katyperry_lezdwq.jpg" className="border-radius-circle margin-right-xs" />
                                        Lazar A. Recommands
                                    </div>
                                </div>
                                <div className="meal-tags">
                                    <i className="icon-carb"></i>
                                    <i className="icon-heart"></i>
                                </div>
                            </div>
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
    modalIsOpen: PropTypes.bool.isRequired,
    closeChangeRecipeModal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.mealPlanner.isChangeRecipeModalOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeChangeRecipeModal: () => {
            dispatch(closeChangeRecipeModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeRecipe);
