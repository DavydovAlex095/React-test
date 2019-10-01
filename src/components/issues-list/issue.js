import React from 'react';

import './issuesList.css';
// import TrackTimeForm from "../track-time-form/trackTimeForm";


const Issue = ({ value }) => {

    const { subject } = value;

    // const { name, identifier, status, id, updated_on } = project.project;
    // const time = new Date(updated_on);

    // const chooseIssue =(id)=> {
    //     console.log('id: ', id)
    // };

    // const showTrackForm = () => {
    //     return (
    //         <TrackTimeForm projectId={ id }/>)
    // };


    return (
        <>
            <p>{ subject }</p>
        </>
    )
};

export default Issue;
