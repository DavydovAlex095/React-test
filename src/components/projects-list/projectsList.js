import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import store from "../../store/store";
import './projectsList.css';
import { getProjects } from '../../services/services';
import Project from '../project/project';


const ProjectsList = () => {

    const [ projects, setProjects ] = useState(null);
    // const [ password, setPassword ] = useState('');

    useEffect(() => {
        getProjects()
            .then( data => {
                console.log('Data in UseEffect: ', data.projects);
                setProjects(data.projects);
        });
    }, []);

    return (
        <div className="project-list">
            <h2>Projects list: </h2>
            { !projects?
                (<h2>Loading ...</h2>) : (
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
