import React, { useState, useEffect } from 'react';

import { getProjectComments } from '../../services/getProjComments';
import store from '../../store/store';
import './comment.css';

const ShowComments =() => {

    const { projId } = store.getState();

    const [ comment, setComment ] = useState('');

    const projComment = getProjectComments(projId);


    useEffect( () => {
        setComment(getProjectComments(projId));
    }, [ projComment, projId ]);

    return (
            <div className="comment-container">
                <div className="comment-text">
                    <h3> COMMENTS: </h3>
                    { comment?
                        <p>{ comment }</p>
                        : <p>No Comments for this Project</p> }
                </div>
            </div>
    )
};

export default ShowComments;