import React from 'react';

import './successPage.css';
import icon from '../../img/success.png';
import ProjectsList from "../projects-list/projectsList";

const SuccessPage = () => {
    return (
        <div className="success-indicator">
            <img src={icon} alt="success icon"/>
            <span className="boom">ACCESS GRANTED!!!</span>
            <span>Getting the Data!</span>
            <ProjectsList />
        </div>
    );
};

export default SuccessPage;
