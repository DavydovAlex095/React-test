import React from 'react';
import { withRouter } from 'react-router-dom';

import './project.css';


const Project = ({ project, history }) => {

    const { name, id } = project;

    const chooseIssue =(id)=> {
        history.push(`/projects/${ id }`);
    };

    return (
        <li key={id} className='single-project'
            onClick={()=> chooseIssue( id )}>
            <p>{ name }</p>
        </li>
    )
};

export default withRouter(Project);
