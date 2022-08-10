import axios from "axios";

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const FILTER_BY_REGION = 'FILTER_BY_REGION'
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME'
export const GET_BORDER_COUNTRIES = 'GET_BORDER_COUNTRIES'

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

export function country_by_name(name){
        return {
            type: SEARCH_BY_NAME,
            payload: name
        }
    
}

export function filter_by_region(region){
    return{
        type: FILTER_BY_REGION,
        payload: region
    }
}

export function get_country_by_name(name){
    return function(dispatch){
        return axios(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(info => info.data)
        .then(data => data.map(e => {
            return {
                common: e.name.common,
                borders: e.borders,
                native_name: e.altSpellings,
                flag: e.flags.png,
                population: e.population,
                region: e.region,
                subregion: e.subregion,
                capital: e.capital,
                domain: e.tld,
                currencies: e.currencies,
                languages: e.languages
            }
        }))
        .then(data => {
            dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: data
            })
        })
    }
}

export function get_border_countries(names){
    return function(dispatch){
        return axios(`https://restcountries.com/v3.1/alpha?codes=${names}`)
        .then(info => info.data)
        .then(data => data.map(e => {
            return {
                name: e.name.common
            }
        }))
        .then(data => {
            dispatch({
                type: GET_BORDER_COUNTRIES,
                payload: data
            })
        })
    }
}