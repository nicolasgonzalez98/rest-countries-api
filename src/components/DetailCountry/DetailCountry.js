import './DetailCountry.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { get_country_by_name } from '../../redux/actions';
import { BordersList } from '../Borders-List/BordersList';

export function DetailCountry(){

    function keys_currencies(list){
        let currencies = Object.keys(list).map(e => list[e].name)
        return currencies.length > 1 ? currencies.join(', ') : currencies[0]
    }

    function keys_language(list){
        let languages = Object.keys(list).map(e => list[e])
        return languages.length > 1 ? languages.join(', ') : languages.join()
    }

    const dispatch = useDispatch()
    let { name } = useParams()
    

    useEffect(() => {
        dispatch(get_country_by_name(name))
    }, [dispatch, name])

    let country = useSelector(state => state.country_data)
    console.log(country)

    return (
        <div className='DetailCountry'>
            {
                !Object.keys(country).length ? 
                <><div>Loading...</div></>
                :<>
                {(country.common.toLowerCase() !== name.toLowerCase())?
            <><div>Loading...</div></> : 
            <>
                        <button className='back'>Back</button>

                        <div className='box-info-country'>
                            <img src={country.flag} alt={`${country.common} flag`}/>
                            <div className='right-box-info-country'>
                                <h1>{country.common}</h1>

                                <article>
                                    <div className='left-top-info-country'>
                                        <p>Native name: <span>{country.native_name[1]}</span></p>
                                        <p>Population: <span>{country.population}</span></p>
                                        <p>Region: <span>{country.region}</span></p>
                                        <p>Subregion: <span>{country.subregion}</span></p>
                                        <p>Capital: <span>{country.capital}</span></p>
                                    </div>
                                    
                                    <div className='right-bottom-info-country'>
                                        <p>Top Level Domain: <span>{country.domain}</span></p>
                                        <p>Currencies: <span>{keys_currencies(country.currencies)}</span></p>
                                        <p>Languages: <span>{keys_language(country.languages)}</span></p>
                                    </div>
                                </article>

                                {country.borders? 
                                <BordersList borders={country.borders.join(',')} /> :
                                null
                                }
                            </div> 
                        </div>
                    </>    
                }
                </>
            }

        </div>
    )
}