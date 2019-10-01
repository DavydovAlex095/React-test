import React, { useState } from 'react';

const Comment =()=> {

    const submitBtn =(e)=> {
        e.preventDefault();

    };

    const [ name, setName ] = useState('');
    const [ comment, setComment ] = useState('');

    return(
        <div>
            <div className="formContent">
                <form>
                    <h2> Comment name </h2>
                    <input type="text"  className="comment-name"
                           maxLength='100' value={ name }
                           onChange={e => setName(e.target.value)}
                           required/>
                    <h2> Comment </h2>
                    <input type="textarea" className="comment"
                           value={ comment }
                           onChange={e => setComment(e.target.value)}
                           required/><br/>
                    <button onClick={submitBtn} className="btn btn-alert">
                        SAVE COMMENT
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Comment;