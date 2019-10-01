import {
    ISSUES_LIST,
    LOGIN_REQUEST,
    PROJECTS_REQUEST,
    PROJECTS_LIST,
    PROJECT_TIME
} from "../actions/actions";

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
                issues: action.payload
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
        case PROJECT_TIME:
            return {
                ...state,
                time: action.payload
            };
        default:
            return state
    }
}
