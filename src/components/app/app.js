import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './app.css';
import LoginPage from '../login/login';
import ProjectsList from "../projects-list/projectsList";
// import Spinner from '../spinner/spinner';
// import Error from '../error-handler/error';
// import SuccessPage from "../success-page/successPage";
// import ProjectsList from "../projects-list/projectsList";
// import IssuesList from "../issues-list/issuesList";

const App =()=> {

        return (
            <Switch>
                <Route
                    path="/"
                    component={LoginPage}
                    exact/>
                <Route
                    path="/projects"
                    component={ProjectsList}
                />
            </Switch>
        )
};
export default App;