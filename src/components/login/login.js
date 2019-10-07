import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './login.css';
import { loginRequest } from '../../services/requests';
import { setUserData } from "../../services/stateToLocalStorage";


const LoginPage = ({ history }) => {

    const submitBtn = (e) => {
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

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className="container mt-5 col-4 shadow bg-lavender">
            <div className="logo">Log In</div>
            <div className="login-item">
                <form className="form form-login">
                    <div className="form-field">
                        <label className="user" htmlFor="name"><span
                            className="hidden">Username</span></label>
                        <input type="text" className="form-input"
                               autoComplete='on' value={ name }
                               onChange={ e => setName(e.target.value)} required />
                    </div>

                    <div className="form-field">
                        <label className="lock" htmlFor="login-password"><span
                            className="hidden">Password</span></label>
                        <input type="password" className="form-input" value={ password }
                               autoComplete='on'
                               onChange={ e => setPassword(e.target.value)}
                               required />
                    </div>

                    <div className="form-field d-flex justify-content-center">
                        <input className="col-4" type="submit" onClick={submitBtn} />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default withRouter(LoginPage);
