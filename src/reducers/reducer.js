import {
    ISSUES_LIST,
    LOGIN_REQUEST,
    PROJECTS_REQUEST,
    PROJECTS_LIST,
    SAVE_ID,
    ISSUES_FAIL
} from "../actions";

const initialState = {
    isLoading: false,
    isCompleted: false,
    isFail: false,
    projectsList: [],
    issuesList: []
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case ISSUES_LIST:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isFail: false,
                issues: action.payload,
            };
        case ISSUES_FAIL:
            return {
                ...state,
                isFail: true,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isFail: false,
                inputData: action.inputData
            };
        case PROJECTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isFail: false
            };
        case PROJECTS_LIST:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isFail: false,
                projects: action.payload
            };
        case SAVE_ID:
            return {
                ...state,
                projId: action.payload
            };
        default:
            return state
    }
}
