import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getJoke = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://catfact.ninja/fact')
            .then(resp => {
                dispatch(fetchSuccess(resp.data.fact));
            }).catch(err => {fetchFailed(err)});
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (fact) => {
    return({type: FETCH_SUCCESS, payload: fact});
}

export const fetchFailed = (error) => {
    return({type: FETCH_FAILED, payload: error});
}