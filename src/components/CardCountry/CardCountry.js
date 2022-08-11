import './CardCountry.css'
import { Link } from 'react-router-dom'

export function CardCountry({name, population, region, capital, flag}){
    let internationalNumberFormat = new Intl.NumberFormat('en-US')

    return (
        <Link to={`/${name.toLowerCase()}`}>
            <div className='card-country'>
                
                    <div className='top-card-info'><img src={flag} alt={name+' flag'}/></div>
                    <div className='bottom-card-info'>
                        <h3 className='country-name'>{name}</h3>
                        <div>
                            <p>Population: <span className='data-country'>{internationalNumberFormat.format(population)}</span></p>
                            <p>Region: <span className='data-country'>{region}</span></p>
                            <p>Capital: <span className='data-country'>{capital && capital[0]}</span></p>
                        </div>
                    </div>
                
            </div>
        </Link>
    )
}