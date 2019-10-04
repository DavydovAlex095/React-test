import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './projectsList.css';
import { getProjects } from '../../services/services';
import Project from '../project/project';


const ProjectsList = () => {

    const [ projects, setProjects ] = useState(null);


    useEffect(() => {
        getProjects()
            .then( data => {
                setProjects(data.projects);
        });
    }, []);


    return (
        <div className="project-list">
            <h2 className="projects-header">Projects list: </h2>
            { !projects?
                (<h2>No Data for this Project!</h2>) : (
                    projects.map(
                        data =>  <Project project={ data } key={data.id}/>
                    ))}

        </div>
    );
};

const mapStateToProps = ({ projects }) => {
    return { projects }
};

export default connect(mapStateToProps)(ProjectsList);
