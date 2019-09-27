import {PROJECTS_REQUEST} from "../actions/actions";
import store from "../store/store";

const _apiBase = 'https://redmine.ekreative.com';

// getResource = async (url) => {
//     const res = await fetch(`${this._apiBase}${url}`);
//
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}` +
//             `, received ${res.status}`)
//     }
//     return await res.json();
// };

export function getIssues(name, password, limit) {
    // Limiting to 1 if no limit is set, since we dont need them, just to authenticate user
    return fetch(`${_apiBase}/issues.json?&limit=${limit || 1}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${name}:${password}`)}`
        }
    });
}

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
        .then(res=> res.json())
        .then(json=> {
            store.dispatch({ type: PROJECTS_REQUEST, payload: json });
            console.log('store: ',store.getState());
            console.log('res in fetch: ', json)})
        // .catch(reject=> console.log('You have Error: ', reject))


    // fetch(`${_apiBase}/projects.json`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         // Those method can't be called before user logs in, so no need to validate once more
    //         "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
    //     }
    // })
    //     .then(res=> console.log('success: ',res))
    //     .catch(err=> console.log('error: ', err))
};

// function fetchPosts(subreddit) {
//     return dispatch => {
//         dispatch(requestPosts(subreddit))
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())
//             .then(json => dispatch(receivePosts(subreddit, json)))
//     }
// }

export function getIssuesPerProject(limit, projectId) {
    return fetch(
        `${_apiBase}/issues.json?&limit=${limit || 100}&project_id=${projectId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
            }
        }
    );
}

export function trackProjectTime(projectId, hours, comment, issueId) {
    return fetch(`${_apiBase}/time_entries.json`, {
        method: "POST",
        body: JSON.stringify({
            time_entry: {
                project_id: projectId,
                issue_id: issueId,
                hours: hours || 1,
                comments: comment
            }
        }),
        headers: {
            "Content-Type": "application/json",
            "X-Redmine-API-Key": "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
        }
    });
}