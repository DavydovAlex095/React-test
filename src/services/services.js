import {PROJECTS_LIST, ISSUES_LIST, PROJECT_TIME } from "../actions/actions";
import store from "../store/store";

const _apiBase = 'https://redmine.ekreative.com';
const { dispatch } = store;

export const getProjects = () => {
    console.log('req works!');
    const url = '/projects.json';

    return fetch(`${_apiBase}${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // Those method can't be called before user logs in, so no need to validate once more
            "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
        }
    })
        .then(res => res.json())
        .then(json => {
            dispatch({ type: PROJECTS_LIST, payload: json });
            return json })
        .catch(reject=> console.log('You have Error: ', reject))

};

export const getProjectIssues = projectId => {
    const url = '/issues.json';

    return fetch(
        `${_apiBase}${url}?project_id=${projectId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
            }
        })
        .then(res => res.json())
        .then(json => {
            dispatch({ type: ISSUES_LIST, payload: json });
            console.log('ISSUES in fetch: ', json);
            return json })
        .catch(reject=> console.log('You have Error: ', reject))
};

export const getProjSpentTime = projectId => {
    const url = '/time_entries.json';
    console.log(`getSpentTime URL: ${_apiBase}${url}?project_id=${projectId}`);

    return fetch(
        `${_apiBase}${url}?project_id=${projectId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
            }
        })
        .then(res => res.json())
        .then(json => {
            dispatch({ type: PROJECT_TIME, payload: json });
            console.log('DATA in getSpentTime: ', json);
            return json })
        .catch(reject=> console.log('You have Error: ', reject))
};

export const getIssueSpentTime = (issueId=53008) => {
    const url = '/time_entries.json?issue_id=';

    return fetch(
        `${_apiBase}${url}${ issueId }`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('DATA in getIssueSpentTime: ', json);
            return json
        })
        .catch(reject=> console.log('You have Error in getIssueSpentTime: ', reject))
};



export const postProjectTime = ( hours=1, issueId=53008 ) => {

    let postData = new FormData();
    postData.append( "time_entry[issue_id]", issueId );
    postData.append( "time_entry[hours]", hours );

    fetch(`${_apiBase}/time_entries.json`, {
        method: "POST",
        body: postData,
        headers: {
            "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c",
        }
    })
        .then((data => {
            console.log('data in postProjectTime: ', data );
        }))
};
