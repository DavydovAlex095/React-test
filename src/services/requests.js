import {PROJECTS_LIST, ISSUES_LIST, SAVE_ID, ISSUES_FAIL } from "../actions";
import store from "../store/store";
import { loadKey } from "./stateToLocalStorage";

const _apiBase = 'https://redmine.ekreative.com';
const _apiKey = loadKey();
const { dispatch } = store;


export const loginRequest = ( name, userPass ) => {
    const url = '/users/current.json';

    return fetch(`${_apiBase}${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${name}:${userPass}`)}`
        }
    })
        .then(res => res.json())
        .then(json => {
            return json.user })
        .catch( reject =>
            console.log('Not correct password: ', reject))

};

export const getProjects = () => {
    const url = '/projects.json';

    return fetch(`${_apiBase}${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Redmine-API-Key": `${_apiKey}`
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
                "X-Redmine-API-Key": `${_apiKey}`
            }
        })
        .then(res => res.json())
        .then(json => {
            dispatch({ type: ISSUES_LIST, payload: json });
            return json })
        .catch(reject=> {
            dispatch( { type: ISSUES_FAIL });
        });

};


export const getIssueSpentTime = ( issueId ) => {
    const url = '/time_entries.json?issue_id=';

    return fetch(
        `${_apiBase}${url}${ issueId }&limit=100`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": `${_apiKey}`
            }
        })
        .then(res => res.json())
        .then(data => {
            let { time_entries } = data;
            let timeOverall = 0;

            time_entries.map((time_entry) =>
                timeOverall += time_entry.hours);
            return timeOverall
        })
        .catch(reject=> console.log('You have Error in getIssueSpentTime: ', reject))
};

export const postProjectTime = ( hours=0, issueId ) => {
    const url = '/time_entries.json';
    let _hour = +hours;

    let postData = new FormData();
    postData.append( "time_entry[issue_id]", issueId );
    postData.append( "time_entry[hours]", _hour );

    fetch(`${_apiBase}${url}`, {
        method: "POST",
        body: postData,
        headers: {
            "X-Redmine-API-Key": `${_apiKey}`,
        }
    })
        .then((data => {
            console.log('data in postProjectTime: ', data );
        }))
};
