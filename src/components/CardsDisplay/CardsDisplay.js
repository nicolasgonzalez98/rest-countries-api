import { CardCountry } from "../CardCountry/CardCountry";
import './CardsDisplay.css'

export function CardsDisplay({list}){

    return (
        <div className="CardsDisplay">
            {list.map(e => 
                <CardCountry 
                    name={e.name}
                    population={e.population}
                    region= {e.region}
                    capital={e.capital}
                    flag={e.flag}
                />
                )}
        </div>
    )
}