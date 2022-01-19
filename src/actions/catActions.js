import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getCat = () => {
    return (dispatch) => {
        console.log('Fetching');
        dispatch(fetchStart());
        axios.get('https://catfact.ninja/fact')
            .then(resp => {
                dispatch(fetchSuccess(resp.data));
            }).catch(err => {fetchFailed(err)});
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(resp => {
                console.log(resp.data);
                dispatch(fetchSuccess(resp.data[0]));
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