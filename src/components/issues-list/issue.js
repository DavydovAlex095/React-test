import React from 'react';

import './issuesList.css';


const Issue = ({ value }) => {

    const { subject } = value;

    return (
        <>
                <p className="single-issue-title" title={subject}>{ subject }</p>
        </>
    )
};

export default Issue;
