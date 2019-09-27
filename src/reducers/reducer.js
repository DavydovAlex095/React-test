import {
    ISSUES_REQUEST,
    LOGIN_REQUEST,
    PROJECTS_REQUEST,
} from "../actions/actions";

const initialState = {
    isLoading: false,
    isCompleted: false,
    isFail: false,
    projectsList: [],
    issuesList: []
};

export default (state = initialState, action, payload = null) => {
    switch (action.type) {
        case ISSUES_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isFail: false
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
                isFail: false,
                products: payload
            };
        default:
            return state
    }
}