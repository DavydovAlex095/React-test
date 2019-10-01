import React from 'react';
import { Link } from 'react-router-dom';

import './error.css';
import icon from '../../img/error.jpeg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">ACCESS DENIED!!!</span>
            <span> are you sure that you don't have typoes?</span>
            <button className="btn btn-danger">
                <Link to='/'>BACK </Link>
            </button>
        </div>
    );
};

export default ErrorIndicator;
