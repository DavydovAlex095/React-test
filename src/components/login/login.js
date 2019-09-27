import React, { useState } from 'react';
// import { withRouter } from 'react-router-dom';

import './login.css';
// import { projectsRequest } from '../../actions/actionCreators';
import { getProjects } from "../../services/services";
import store from "../../store/store";


const LoginPage =()=> {

    const submitBtn =  e => {
        e.preventDefault();
        // console.log('Login works, name: ',name, 'value: ', password );
        // projectsRequest();
        // console.log('data: ',getProjects());
        getProjects();
    };
    console.log(store.getState());

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <div>
            <div className="formContent">

                {/*<div className="fadeIn first">*/}
                {/*    <img src="https://s.hdnux.com/photos/47/31/53/10328782/37/920x920.jpg" id="icon" alt="User Icon"/>*/}
                {/*</div>*/}

                <form>
                    <h2> Login </h2>
                    <input type="text"  className="fadeIn second"
                           maxLength='100' value={ name }
                           name="login" autoComplete='on'
                           onChange={e=>setName(e.target.value)} required/>
                    <h2> Password </h2>
                    <input type="password" className="fadeIn third"
                           maxLength='100' value={ password }
                           autoComplete='on' name="login"
                           onChange={e=>setPassword(e.target.value)}
                           required/><br/>
                    <button onClick={submitBtn} className="fadeIn fourth btn btn-submit">
                        ENTER
                    </button>
                </form>

            </div>
        </div>
    )
};

export default LoginPage;