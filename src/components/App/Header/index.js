import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router-dom';

const Header = createReactClass({
    render: function () {
        return <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed margin-right-none" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" title="Zleek" className="navbar-logo noselect clickable font-lobster">Zleek</Link>
                </div>
            </div>
        </nav>;
    }
});

export default Header;