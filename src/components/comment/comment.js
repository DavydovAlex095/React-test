import React, { useState } from 'react';

import { saveProjectComment } from "../../services/saveProjectComment";
import store from '../../store/store';
import './comment.css';

const Comment =()=> {

    const [ comment, setComment ] = useState('');

    const submitBtn =(e)=> {
        e.preventDefault();
        const { projId } = store.getState();
        saveProjectComment( projId, comment );
        console.log( 'projId, comment: ', projId, comment );
    };

    return(
        <div>
            <div className="formContent">
                <form>

                    <h3>Comment:</h3>
                    <textarea className="comment-text" rows="5"
                           value={ comment }
                           onChange={e => setComment(e.target.value)}
                           required/><br/>
                    <button onClick={submitBtn} className="btn btn-success">
                        SAVE
                    </button>
                    <button onClick={submitBtn} className="btn btn-danger">
                        CLEAR
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Comment;
