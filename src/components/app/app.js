import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './app.css';
import LoginPage from '../login/login';
import Comment from '../comment/comment';
// import Spinner from '../spinner/spinner';
import Error from '../error-handler/error';
import SuccessPage from "../success-page/successPage";
import IssuesList from "../issues-list/issuesList";


const App =()=> {

        return (
            <Switch>
                <Route
                    path="/"
                    component={LoginPage} exact/>
                <Route
                    path="/projects"
                    component={SuccessPage} exact/>
                <Route
                    path="/error"
                    component={Error}/>
                <Route
                    path="/projects/:id"
                    render={({ match }) => {
                    const { id } = match.params;
                    return <IssuesList dataId={ id } />
                                       }} exact/>
                <Route
                    path="/projects/comment"
                    component={ Comment } />
                    }}/>

            </Switch>
        )
};
export default App;
