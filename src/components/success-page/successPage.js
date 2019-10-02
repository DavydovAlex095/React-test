import React, { useState, useEffect } from 'react';

import './successPage.css';
import icon from '../../img/success.png';
import ProjectsList from "../projects-list/projectsList";

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

    const onload = <div className="success-indicator">
                        <img src={icon} alt="success icon"/>
                        <span className="boom">ACCESS GRANTED!!!</span>
                        <span>Getting the Data!</span>
                    </div>;
    const projects = <ProjectsList />;

    return (
        <>
            { showElem ? projects : onload }
        </>
    );

    // return (
    //     <div className="success-indicator">
    //         <img src={icon} alt="success icon"/>
    //         <span className="boom">ACCESS GRANTED!!!</span>
    //         <span>Getting the Data!</span>
    //         <ProjectsList />
    //     </div>
    // );
};

export default SuccessPage;
