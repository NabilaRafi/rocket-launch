import axios from 'axios';
import ActionConstants from '../constants/action-constants';

export const handleSuccessData = (response) => {
    if (response !== null)
    return {
        type: ActionConstants.LAUNCH_DATA_SUCCESS,
        payload: response,
    }

    return {
        type: ActionConstants.LAUNCH_DATA_ERROR,
        payload: {
            error: true,
        }
    }

}

export const handleFailureData = (response) => {
    return {
        type: ActionConstants.LAUNCH_DATA_FAILURE,
        payload: response,
    }
}

export const getLaunchData = (data) => (dispatch) => {
    axios({
        method: 'get',
        url: `https://launchlibrary.net/1.4/launch/${data.startDate}/${data.endDate}`,
        data: data,
        headers: {'content-type': 'application/json'},
    })
    .then ((response) => {
        // process only json response 
        if(response.headers['content-type'].indexOf('json') > 0 ) {
            dispatch(handleSuccessData(response.data))
        } else {
            dispatch(handleFailureData(response))
        }
    })
    .catch((error) => dispatch(handleFailureData(error)));
}