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

    const [ isFail, setIsFail ] = useState(false);
    const name = !issues ? null : issues[0].project.name;


    useEffect(() => {
        getProjectIssues(dataId)
            .then( data => {
                setIssues(data.issues);
            })
            .catch( () => {
                setIsFail(true);
                console.log('No data for this Project')
            })
    }, [ isFail ]);

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
                ( isFail?
                    (<div className="no-data">
                        <h2>No Issues For this Project!</h2>
                    </div>) :
                            (<div className="loader">
                                <h2>Loading ...</h2>
                            </div>)) : (
            <>
                <ul>
                {issues.map(
                    data =>{
                        return(
                            <li className='single-issue p-3' key={data.id}>
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
            <div className="header">
                <h1> { name }</h1>
                { console.log( 'isLoading, isFail', isFail) }
            </div>
            <div className="btn-group" role="group">
                <button type="button" onClick={ showComment } className="btn btn-secondary issues">
                    { !comment? <div className="issues">Add Comment</div> : <Link to='/projects/:id'>BACK to ISSUES </Link>}
                </button>
            </div>
            <ShowComments />
            { !comment? showIssues : <Comment />}
            <button type="button" className="btn btn-secondary back">
                <Link to='/projects'>BACK to PROJECTS</Link>
            </button>
        </div>
    )
};

export default withRouter(IssuesList);
