import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './issuesList.css';
import { getProjectIssues, getProjSpentTime } from '../../services/services';
import Issue from './issue';
import TrackTimeForm from "../track-time-form/trackTimeForm";


const IssuesList = ( {dataId} ) => {

    const [ issues, setIssues ] = useState(null);
    const name = !issues ? null : issues[0].project.name;
    const [ spentTime, setSpentTime ] = useState(null);

    useEffect(() => {
        getProjectIssues(dataId)
            .then( data => {
                console.log('Data in UseEffect ISSUES List: ', data);
                data? setIssues(data.issues) : setIssues(null);
            });
        getProjSpentTime(dataId)
            .then( value => {
                console.log('Time Spent on Project: ', value.total_count);
                value? setSpentTime(value.total_count) : setSpentTime(null);
            })
            .catch( () => console.log('No data for this Project'))
    }, []);

    return (
        <div>
            <h3>Issues List for: { name }</h3>
            { !issues ?
                (<h2>Loading ...</h2>) : (
                    <ul>
                        {issues.map(
                        data =>{
                            return(
                                <li className='single-issue' key={data.id}>
                                    <Issue value={ data }  />
                                    <TrackTimeForm projectId={ data } />
                                </li>
                            )
                        }
                    )}
                        <p><b>Total time spent on project: { spentTime } h </b></p>
                    </ul>
                )}
            <button className="btn btn-success">
                <Link to='/projects'>BACK </Link>
            </button>
        </div>
    )
};

export default withRouter(IssuesList);
