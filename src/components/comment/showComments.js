import React, { useState, useEffect } from 'react';

import { getProjectComments } from '../../services/getProjComments';
import store from '../../store/store';
import './comment.css';

const ShowComments =() => {

    const { projId } = store.getState();

    const [ comment, setComment ] = useState('');

    let projComment = getProjectComments(projId);


    useEffect( () => {
        setComment(getProjectComments(projId));
    }, [ projComment ]);



    return (
        <>
            <div className="comment-container">
                { console.log('comment in ShowComment: ', comment) }
                <div className="comment-text">
                    <h3> COMMENTS: </h3>
                    { comment?
                        <p>{ comment }</p>
                        : <p>No Comments for this Project</p> }
                </div>
            </div>
        </>
    )
};

export default ShowComments;