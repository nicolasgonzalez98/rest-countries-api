import './CardCountry.css'

export function CardCountry({name, population, region, capital, flag}){
    return (
        <div className='card-country'>
            <div className='top-card-info'><img src={flag} alt={name+' flag'}/></div>
            <div className='bottom-card-info'>
                <h3 className='country-name'>{name}</h3>
                <div>
                    <p>Population: <span className='data-country'>{population}</span></p>
                    <p>Region: <span className='data-country'>{region}</span></p>
                    <p>Capital: <span className='data-country'></span></p>
                </div>
            </div>
        </div>
    )
}