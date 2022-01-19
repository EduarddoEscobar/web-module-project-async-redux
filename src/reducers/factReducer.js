
const intiialState = {
    fact: {},
    fetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_START:
            return({
                fact: {},
                fetching: true,
                error: ''
            })

        case FETCH_SUCCESS:
            return({
                fact: action.payload,
                fetching: false,
                error: ''
            })
        
        case FETCH_FAILED:
            return({
                fact: {},
                fetching: false,
                error: action.payload
            })
            
        default: 
            return state
    }
}

export default reducer;