import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_all_countries } from '../../redux/actions'
import { CardsDisplay } from '../CardsDisplay/CardsDisplay'
import { Filters } from '../Filters/Filters'
import './Home.css'

export function Home(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_all_countries())
    }, [dispatch])  

    let countries = useSelector(state => state.current_countries)

    

    return (
        <div className='Home'>
            <Filters />
            <CardsDisplay list={countries}/>
        </div>
    )
}