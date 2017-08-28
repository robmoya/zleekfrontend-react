import React from 'react';
import PropTypes from 'prop-types';
import 'loaders.css/loaders.css';
import './index.css';
import createReactClass from 'create-react-class';


const LoadingIndicator = createReactClass({
    render: function() {
        if(this.props.isLoading) {
            return <div className="loading-indicator-holder">
                <div className="loader-inner ball-scale inner"><div></div></div>
            </div>;
        }

        return <div>{this.props.children}</div>;
    }
})

LoadingIndicator.propTypes = {
    children: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default LoadingIndicator;
