import { useDispatch } from 'react-redux'
import { country_by_name } from '../../redux/actions'
import './SearchBar.css'

export function SearchBar(){
    const dispatch = useDispatch()

    function search_by_name(e){
        dispatch(country_by_name(e.target.value.toLowerCase()))
    }

    return (
        
        <div className='SearchBar'>
            <input type='text' onInput={search_by_name} placeholder='Search for a country...' />
        </div>
    )
}