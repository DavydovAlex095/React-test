import React, { useState } from 'react';

import { getProjectComments } from '../../services/getProjComments';
import store from '../../store/store';
import './comment.css';

const ShowComments =() => {

    const { projId } = store.getState();
    const [ showHideComments, setShowAllComments ] = useState(true);

    let projComment = getProjectComments(projId);

    const showComments = () => {
        setShowAllComments(!showHideComments);
    };

    const noComments = <p>No Comments for this Project</p>;
    const comments = <p>{ projComment }</p>;

    return (
        <>
            { showHideComments?
                <button type="button" className="btn btn-secondary" onClick={ showComments }>
                    Show Comment
                </button> :
                <button type="button" className="btn btn-secondary" onClick={ showComments }>
                    Hide Comment
                </button>}
            <div className="comment-container">
                { !showHideComments? comments : noComments }
            </div>
        </>
    )
};

export default ShowComments;