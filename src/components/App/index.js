import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import Header from './Header';

const App = createReactClass({
    propTypes: {
        children: PropTypes.array.isRequired
    },
    render: function () {
        return <div>
            <Header />
            <div className="zleek-main">
                {this.props.children}
            </div>
        </div>;
    }
});

export default App;