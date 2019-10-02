import React from 'react';

import './issuesList.css';


const Issue = ({ value }) => {

    const { subject } = value;

    return (
        <div className="single-issue">
                <p>{ subject }</p>
        </div>
    )
};

export default Issue;
