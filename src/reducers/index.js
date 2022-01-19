import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from '../actions/catActions';

const initialState = {
    url: '',
    fact: '',
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_START:
            return({
                ...state,
                url: '',
                fact: '',
                fetching: true,
                error: ''
            })

        case FETCH_SUCCESS:
            return({
                ...state,
                url: action.payload.width ? action.payload.url : state.url,
                fact: !action.payload.width ? action.payload.fact : state.fact,
                fetching: false,
                error: ''
            })
        
        case FETCH_FAILED:
            return({
                ...state,
                url: '',
                fact: '',
                fetching: false,
                error: action.payload
            })
            
        default: 
            return state
    }
}

export default reducer;