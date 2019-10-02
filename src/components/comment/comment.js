import React, { useState } from 'react';

import { saveProjectComment } from "../../services/saveProjectComment";
import store from '../../store/store';

const Comment =()=> {

    // const [ name, setName ] = useState('');
    const [ comment, setComment ] = useState('');

    const submitBtn =(e)=> {
        e.preventDefault();
        const { projId } = store.getState();
        saveProjectComment( projId,  );
        console.log( 'projId, comment: ', projId, comment );
    };

    return(
        <div>
            <div className="formContent">
                <form>
                    {/*<span>Comment topic:</span>*/}
                    {/*<input type="text"  className="comment-name"*/}
                           {/*maxLength='100' value={ name }*/}
                           {/*onChange={e => setName(e.target.value)}*/}
                           {/*required/>*/}
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
