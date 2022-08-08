import { GET_ALL_COUNTRIES } from "../actions"

const initialState = {
    all_countries: [],
    current_countries: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                all_countries: action.payload,
                current_countries: action.payload
            }
        default: 
            return state
    }
}

export default rootReducer