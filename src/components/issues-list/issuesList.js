import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './issuesList.css';
import { getProjectIssues } from '../../services/requests';
import Issue from './issue';
import TrackTimeForm from '../track-time-form/trackTimeForm';
import Comment from '../comment/comment';
import ShowComments from "../comment/showComments";


const IssuesList = ( {dataId } ) => {

    const [ issues, setIssues ] = useState(null);
    const [ comment, setComment ] = useState(false);

    const [ isFail, setIsFail ] = useState(false);
    const name = !issues ? null : issues[0].project.name;



    useEffect(() => {
        getProjectIssues(dataId)
            .then( data => {
                setIssues(data.issues);
            })
            .catch( () => {
                setIsFail(true);
            })
    }, [ isFail, dataId ]);

    const showComment = () => {
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
            </div>
            <div className="btn-group" role="group">
                <button type="button" onClick={ showComment } className="btn btn-secondary issues">
                    { !comment?
                        <div className="issues">Add Comment</div> :
                        <Link to={ '/projects/'+ dataId }>BACK to ISSUES </Link>}
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
