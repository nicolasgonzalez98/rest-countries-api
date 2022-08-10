import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { get_border_countries } from "../../redux/actions";
import { Link } from 'react-router-dom'
import './BordersList.css'

export function BordersList({borders}){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_border_countries(borders))
    }, [dispatch, borders])

    let countries = useSelector(state => state.border_countries)

    console.log(countries)

    return (
        <div className="BordersList">
            <p className="type">Border Countries: </p>
            <div>
            {countries.map(e => {return <Link to={`/${e.name.toLowerCase()}`}><button className="box-name">{e.name}</button></Link>})}
            </div>
        </div>
    )
}