import React, { useState, useEffect } from 'react';

import './successPage.css';
import icon from '../../img/success.png';
import ProjectsList from "../projects-list/projectsList";
import store from '../../store/store';

const SuccessPage = () => {

    const [ showElem, setShowElem ] = useState(false);

    useEffect(
        () => {
            const timer = setTimeout(() => {
                console.log('This will run after 1 second!')
                setShowElem(!showElem);
            }, 1000);
            return () => clearTimeout(timer);
        }, []
    );

    const { isLoading } = store.getState();

    const onload = <div className="success-indicator">
                        <img src={icon} alt="success icon"/>
                        <span className="boom">ACCESS GRANTED!!!</span>
                        <span>Getting the Data!</span>
                    </div>;
    const projects = <ProjectsList />;

    return (
        <>
            { console.log('isLoading: ', isLoading) }
            { !isLoading ? projects : onload }
        </>
    );
};

export default SuccessPage;
