import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './projectsList.css';
import { getProjects } from '../../services/requests';
import Project from './project';


const ProjectsList = () => {

    const [ projects, setProjects ] = useState(null);


    useEffect(() => {
        getProjects()
            .then( data => {
                setProjects(data.projects);
        });
    }, []);


    return (
        <div className="project-list w-25">
            <h2 className="p-3">Projects list: </h2>
            { !projects?
                (<h2>No Data for this Project!</h2>) : (
                    <ul>
                        { projects.map(
                        data =>  <Project project={ data } key={data.id}/>
                    )}
                    </ul>)}

        </div>
    );
};

const mapStateToProps = ({ projects }) => {
    return { projects }
};

export default connect(mapStateToProps)(ProjectsList);
