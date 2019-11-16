import ActionConstants from '../constants/action-constants';

const initialState ={
    data: [],
};

const rootReducer =(state = initialState, action = {}) => {
    switch(action.type) {
        case ActionConstants.LAUNCH_DATA_SUCCESS:
            return { ...state, successData: action.payload};
        case ActionConstants.LAUNCH_DATA_FAILURE:
            return { ...state, failureData: action.payload};
        case ActionConstants.LAUNCH_DATA_ERROR:
            return { ...state, errorData: action.payload};
        default:
            return state;
    }
};

export default rootReducer;
