import React, { useState } from 'react';
import {withRouter } from 'react-router-dom';

import { saveProjectComment } from "../../services/saveProjectComment";
import store from '../../store/store';
import './comment.css';

const Comment =({ history })=> {

    const [ comment, setComment ] = useState('');

    const submitBtn =(e)=> {
        e.preventDefault();
        const { projId } = store.getState();
        saveProjectComment( projId, comment );
        history.push(`/projects/${projId}`);
        setComment('');
    };
    const clearComment =() => {
        setComment('');
    };

    return(
            <div className="comment-content bg-light">
                <h1 className="text">Comment:</h1>
                <textarea className="comment-text"
                       value={ comment }
                       onChange={ e => setComment(e.target.value)}
                       required/><br/>

                       <div className="d-flex justify-content-around">
                           <button onClick={ submitBtn } className="btn btn-success block w-25">
                               SAVE
                           </button>
                           <button onClick={ clearComment } className="btn btn-danger block w-25">
                               CLEAR
                           </button>
                       </div>
            </div>
    )
};

export default withRouter(Comment);
