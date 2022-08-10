import { FILTER_BY_REGION, GET_ALL_COUNTRIES, GET_BORDER_COUNTRIES, GET_COUNTRY_BY_NAME, SEARCH_BY_NAME } from "../actions"

const initialState = {
    all_countries: [],
    current_countries: [],
    country_data: {},
    border_countries: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                all_countries: action.payload,
                current_countries: action.payload
            }
        case SEARCH_BY_NAME: 
            let filtro = state.all_countries.filter(e => e.name.toLowerCase().includes(action.payload))    

            return{ 
                ...state,
                current_countries: filtro
            }
        case FILTER_BY_REGION:
            let region_filter;
            if(action.payload !== 'all'){
                region_filter = state.all_countries.filter(e => e.region === action.payload)
            }else{
                
                region_filter = state.all_countries
            }
            return {
                ...state,
                current_countries: region_filter
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                country_data: action.payload[0]
            }
        case GET_BORDER_COUNTRIES:
            return {
                ...state,
                border_countries: action.payload
            }
        default: 
            return state
    }
}

export default rootReducer