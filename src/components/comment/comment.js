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
        console.log( 'projId, comment: ', projId, comment );
    };
    const clearComment =() => {
        setComment('');
    };

    return(
            <div className="comment-content">
                <h1 className="text">Comment:</h1>
                <input type="text" className="comment-text"
                       value={ comment }
                       onChange={ e => setComment(e.target.value)}
                       required/><br/>
                    <button onClick={ submitBtn } className="btn btn-success block">
                        SAVE
                    </button>
                    <button onClick={ clearComment } className="btn btn-danger block">
                        CLEAR
                    </button>
            </div>
    )
};

export default withRouter(Comment);
