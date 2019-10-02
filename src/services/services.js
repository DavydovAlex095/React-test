import {PROJECTS_LIST, ISSUES_LIST, PROJECT_TIME, SAVE_ID } from "../actions/actions";
import store from "../store/store";

const _apiBase = 'https://redmine.ekreative.com';
const { dispatch } = store;

export const getProjects = () => {
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
    dispatch({ type: SAVE_ID, payload: projectId });

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
            console.log('Project Id in fetch: ', json);
            return json })
        .catch(reject=> console.log('You have Error: ', reject))
};

export const getProjSpentTime = projectId => {
    const url = '/time_entries.json';

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

export const getIssueSpentTime = ( issueId ) => {
    const url = '/time_entries.json?issue_id=';

    return fetch(
        `${_apiBase}${url}${ issueId }&limit=100`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
            }
        })
        .then(res => res.json())
        .then(data => {
            let { time_entries } = data;
            let timeOverall = 0;

            time_entries.map((time_entry) => {
                timeOverall += time_entry.hours;
            });
            return timeOverall
        })
        .catch(reject=> console.log('You have Error in getIssueSpentTime: ', reject))
};



export const postProjectTime = ( hours=0, issueId ) => {
    const url = '/time_entries.json';
    let _hour = +hours;
    // console.log('Hours Type: ', typeof _hour);

    let postData = new FormData();
    postData.append( "time_entry[issue_id]", issueId );
    postData.append( "time_entry[hours]", _hour );
    // console.log( 'Data in Post ID: ',issueId, 'HOURS: ',hours );

    fetch(`${_apiBase}${url}`, {
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
