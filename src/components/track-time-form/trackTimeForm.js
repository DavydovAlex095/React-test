import React, { useState } from 'react';

import './trackTimeForm.css';
import { postProjectTime, getIssueSpentTime } from '../../services/requests';

const TrackTimeForm =({ projectId }) => {

    const [ description, setDescription ] = useState('');
    const [ logTime, setLogTime ] = useState('');
    const [ modal, setModal ]  = useState( 'modal');
    const [ issueTime, setIssueTime ] = useState(0.00);
    const { id } = projectId;

    const dateNow = new Date().toDateString();

    const showModal =() => {
        getIssueSpentTime(id)
            .then( data => {
                let _data = data.toFixed(2);
                data? setIssueTime(_data) : setIssueTime(0.00);
            });
        setModal("modal-show");
    };

    const hideModal = () => {
        setModal("modal");
        setDescription('');
        setLogTime('');
    };

    const sendData = () => {
        postProjectTime( logTime, id );
        console.log( 'data in Issue: ', projectId );
        console.log('id: ', id );
        hideModal();
    };

    return (
        <>
            <button className='btn btn-success'
                    onClick={ showModal }> Open Modal </button>
            <div id="myModal" className={ modal }>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Log your time</h2>
                        <span className="close"
                              onClick={ hideModal }>&times;</span>
                    </div>
                    <div className="modal-body">
                        <h3>Type description: </h3>
                        <input type='text'
                               value={ description }
                               onChange={(e) => setDescription(e.target.value)}/>
                        <h3>Log Your time: </h3>
                        <input type='number'
                               value={ logTime }
                               onChange={(e) => setLogTime(e.target.value)}/>
                        <div> { dateNow }</div>
                    </div>
                    <div className="modal-footer">
                        <h3>Issue log time: { issueTime } hours</h3>
                        <button className='btn btn-success'
                            onClick={() => sendData() }>Submit</button>
                        <button className='btn btn-danger'
                            onClick={ hideModal }>Cancel</button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default TrackTimeForm;
