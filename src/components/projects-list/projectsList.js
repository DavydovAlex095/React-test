import React, { useEffect } from 'react';

import store from "../../store/store";
import './projectsList.css';


const ProjectsList = () => {

    // const [ projects, setProjects ] = useState('');
    // const [ password, setPassword ] = useState('');

    useEffect(() => {
        console.log('store in projects list: ', store.getState());
        // const subscription = props.source.subscribe();
        return () => {
            // Clean up the subscription
            // subscription.unsubscribe();
        };
    }, []);

    return (
        <div className="project-list">
            <h2>Projects list here</h2>
        </div>
    );
};

export default ProjectsList;