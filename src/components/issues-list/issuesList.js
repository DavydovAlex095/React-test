import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './issuesList.css';
import { getProjectIssues, getProjSpentTime } from '../../services/services';
import Issue from './issue';
import TrackTimeForm from '../track-time-form/trackTimeForm';
import Comment from '../comment/comment';


const IssuesList = ( {dataId, history} ) => {

    const [ issues, setIssues ] = useState(null);
    const name = !issues ? null : issues[0].project.name;
    const [ comment, setComment ] = useState(false);
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

    const showComment = () => {
        console.log('showComment');
        if(!comment) {
            history.push('/projects/comment');
        } else {
            history.push(`/projects/${dataId}`);
        }
        setComment(!comment);
    };

    const showIssues =
        <div>
            { !issues ?
        (<h2>Loading ...</h2>) : (
            <>
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
                </ul>
                <button className="btn btn-success">
                    <Link to='/projects'>BACK to Projects</Link>
                </button>
            </>
        )}
        </div>

    return (
        <div>
            <h3>Issues List for: { name }</h3>
            <button onClick={ showComment }>
                { !comment? <p>Add Comment</p> : <Link to='/projects/:id'>BACK </Link>}
            </button>
            { !comment? showIssues : <Comment />}
        </div>
    )
};

export default withRouter(IssuesList);
