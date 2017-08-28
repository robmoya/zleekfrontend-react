import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import createReactClass from 'create-react-class';
import Background from './bg.jpg';

const MvpPage = createReactClass({
    render: function () {
        return (
            <div className="mvp-page">
                <div className="mvp-page-bg" style={{ backgroundImage: `url(${Background})` }} />
                <div className="mvp-content">
                    <h1 className="font-lobster">Zleek</h1>
                    <h2>
                        We help you to create easy meal plans based on our lifestyle in order to achieve your goals
                    </h2>
                    <p>
                        Low sodium, gluten free. vegan, kocher lasagna? Yeah! We got all of that!
                    </p>
                    <Link to={'/mealplanner'} className="btn btn-lg btn-primary" >TRY OUR MEALPLANNER</Link>
                </div>
            </div>
        );
    }
})

MvpPage.propTypes = {

}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MvpPage);
