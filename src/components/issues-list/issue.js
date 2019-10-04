import React from 'react';

import './issuesList.css';


const Issue = ({ value }) => {

    const { subject } = value;

    return (
        <>
                <p>{ subject }</p>
        </>
    )
};

export default Issue;
