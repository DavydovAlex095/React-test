
// import { getProjects } from "../services/services";
// import { PROJECTS_REQUEST } from "./actions";
//
// export function projectsRequest() {
//     console.log('proj req works!');
//     return dispatch => {
//         dispatch({ type: PROJECTS_REQUEST });
//         getProjects()
//             .then(resp => {
//                 return resp.json();
//             })
//             .then(data => {
//                 console.log('projects: ', data );
//                 // dispatch({ type: PROJECTS_SUCCESS, projectsList: data.projects });
//             })
//             .catch(e => {
//                 console.log('error: ', e)
//                 // dispatch({ type: PROJECTS_FAILED, isFail: true });
//                 // throw e;
//             });
//     };
// }
