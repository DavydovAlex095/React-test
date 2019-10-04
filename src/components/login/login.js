import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './login.css';
// import { projectsRequest } from '../../actions/actionCreators';
// import { getProjects } from "../../services/services";
// import store from "../../store/store";
import { loginRequest } from '../../services/services';
import { setUserData } from "../../services/stateToLocalStorage";


const LoginPage =({history})=> {

    const submitBtn =(e)=> {
        e.preventDefault();
        loginRequest( name, password )
            .then( res => {
                let _apiKey = res.api_key;
                let userName = name;
                let userPass = password;
                setUserData( userName, userPass, _apiKey );
                history.push('/projects');
            })
            .catch(() => history.push('/error'))
    };

    const clearLogin =() => {
        setName('');
        setPassword('');
    };

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <div className="flex-container">
            <div className="formContent">
                <h2> Login: </h2>
                <input type="text"  className="fadeIn second login"
                       maxLength='100' value={ name }
                       name="login" autoComplete='on'
                       onChange={ e => setName(e.target.value)} required/>
                <h2> Password: </h2>
                <input type="password" className="fadeIn third login"
                       maxLength='100' value={ password }
                       autoComplete='on' name="login"
                       onChange={ e => setPassword(e.target.value)}
                       required/><br/>
                <button onClick={submitBtn} className="btn btn-success login-btn">
                    ENTER
                </button>
                <button onClick={clearLogin} className="btn btn-danger login-btn ">
                    CLEAR
                </button>
            </div>
        </div>
    )
};

export default withRouter(LoginPage);
