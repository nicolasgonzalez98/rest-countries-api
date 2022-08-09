import './DetailCountry.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { get_country_by_name } from '../../redux/actions';

export function DetailCountry(){

    const dispatch = useDispatch()
    let { name } = useParams()

    useEffect(() => {
        dispatch(get_country_by_name(name))
    }, [dispatch])

    let country = useSelector(state => state.country_data)
    console.log(country)

    return (
        <div className='DetailCountry'>
            <button>Back</button>

            <img src={country.flag} alt={`${country.common} flag`}/>
            <h3>{country.common}</h3>

            <div className='left-top-info-country'>
                <p>Native name: <span>{country.native_name[1]}</span></p>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Subregion: <span>{country.subregion}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
            
            <div className='right-bottom-info-country'>
                <p>Top Level Domain: <span>{country.domain}</span></p>

                {/* <p>Currencies: <span>{country.currencies}</span></p>
                <p>Languages: <span>{country.languages}</span></p> */}
            </div>

        </div>
    )
}