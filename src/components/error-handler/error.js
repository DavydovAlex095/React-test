import React from 'react';

import './error.css';
import icon from '../../img/error.jpeg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">ACCESS DENIED!!!</span>
            <span>
      </span>
            <span>
        (are you sure that you don't have typoes?)
      </span>
        </div>
    );
};

export default ErrorIndicator;