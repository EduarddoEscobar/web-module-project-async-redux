import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from '../actions/factActions';

const initialState = {
    fact: '',
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_START:
            return({
                ...state,
                fact: '',
                fetching: true,
                error: ''
            })

        case FETCH_SUCCESS:
            return({
                ...state,
                fact: action.payload,
                fetching: false,
                error: ''
            })
        
        case FETCH_FAILED:
            return({
                ...state,
                fact: '',
                fetching: false,
                error: action.payload
            })
            
        default: 
            return state
    }
}

export default reducer;