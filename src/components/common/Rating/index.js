import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import _ from 'underscore';
import './index.css';

const Rating = createReactClass({
    propTypes: {
        value: PropTypes.number.isRequired,
        extraClasses: PropTypes.string
    },
    render: function () {
        const { value, extraClasses } = this.props;
        const fullStarRange = _.range(Math.floor(value));
        const decimalPart = value % 1;
        const hasHalfStar = (decimalPart >= 0.5);
        const emptyStarCount = hasHalfStar ?
        5 - (fullStarRange.length + 1) :
        5 - fullStarRange.length;

        return <div className={`rating-label text-primary ${extraClasses}`} title={`${value} out of 5`}>
            {fullStarRange.map(i => <i key={`fullstar-${i}`} className="fa fa-star"></i>)}
            {hasHalfStar && <i className="fa fa-star-half-o"></i>}
            {_.range(emptyStarCount).map(i => <i key={`emptystar-${i}`} className="fa fa-star-o"></i>)}
        </div>;
    }
});

export default Rating;