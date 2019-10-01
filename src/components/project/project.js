import React from 'react';
import { withRouter } from 'react-router-dom';

import './project.css';


const Project = ({ project, history }) => {

    const { name, id } = project;
    // const { name, identifier, status, id, updated_on } = project.project;
    // const time = new Date(updated_on);

    const chooseIssue =(id)=> {
        console.log('id: ', id);
        history.push(`/projects/${ id }`);
    };


    return (
        <li key={id} className='single-project'
            onClick={()=> chooseIssue( id )}
        >
            {/*onClick={() => console.log('You clicked on: ', id )}*/}
            {/*<h2> Hello from Project!</h2>*/}
            <p>{ name }</p>
            {/*<p>{ id }</p>*/}
            {/*<h2> My identifier is { identifier } </h2>*/}
            {/*<h2> My status is { status } </h2>*/}
            {/*<div> <h3> Project time is : {time.toString()} </h3></div>*/}
            {/*{ console.log('Project Data name: ', name )}*/}
            {/*{ console.log('Project Updated: ', updated_on )}*/}
            {/*{ console.log('Project time: ', time )}*/}
        </li>
    )
};

export default withRouter(Project);
