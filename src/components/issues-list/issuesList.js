import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './issuesList.css';
import { getProjectIssues, getProjSpentTime } from '../../services/services';
import Issue from './issue';
import TrackTimeForm from '../track-time-form/trackTimeForm';
import Comment from '../comment/comment';
import ShowComments from "../comment/showComments";


const IssuesList = ( {dataId, history} ) => {

    const [ issues, setIssues ] = useState(null);
    const [ comment, setComment ] = useState(false);
    // const [ spentTime, setSpentTime ] = useState(null);
    const [ _id, setId ] = useState(dataId);

    const name = !issues ? null : issues[0].project.name;

    useEffect(() => {
        getProjectIssues(dataId)
            .then( data => {
                console.log('Data in UseEffect ISSUES List: ', data);
                data? setIssues(data.issues) : setIssues(null);
            });
        // getProjSpentTime(dataId)
        //     .then( value => {
        //         console.log('Time Spent on Project: ', value.total_count);
        //         value? setSpentTime(value.total_count) : setSpentTime(null);
        //     })
        //     .catch( () => console.log('No data for this Project'))
    }, []);

    const showComment = () => {
        console.log('showComment');
        if(!comment) {
            history.push('/projects/comment');
        } else {
            history.push(`/projects/${_id}`);
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
            </>
        )}
        </div>;

    return (
        <div>
            <h3>Issues List for: { name }</h3>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">
                    <Link to='/projects'>BACK to Projects</Link>
                </button>
                <button type="button" onClick={ showComment } className="btn btn-secondary">
                    { !comment? <>Add Comment</> : <Link to='/projects/:id'>BACK </Link>}
                </button>
                <ShowComments />
            </div>
            { !comment? showIssues : <Comment />}
        </div>
    )
};

export default withRouter(IssuesList);
