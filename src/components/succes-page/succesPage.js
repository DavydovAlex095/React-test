import React from 'react';

import './successPage.css';
import icon from '../../img/success.png';

const SuccessPage = () => {
    return (
        <div className="success-indicator">
            <img src={icon} alt="success icon"/>
            <span className="boom">ACCESS GRANTED!!!</span>
            <span>Getting the Data!</span>
        </div>
    );
};

export default SuccessPage;