import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'

export function get_all_countries(){
    return function(dispatch){
        return (axios('https://restcountries.com/v3.1/all'))
        .then(data => data.data)
        .then(info => info.map( e => {
            return {
                name: e.name.common,
                population: e.population,
                region: e.region,
                capital: e.capital,
                flag: e.flags.png
            }
        }))
        .then(data => {
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        })
    }
}