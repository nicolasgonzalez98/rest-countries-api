import { useDispatch } from 'react-redux'
import { filter_by_region } from '../../redux/actions'
import './RegionType.css'

export function RegionType(){

    const dispatch = useDispatch()

    function searchRegion(e){
        dispatch(filter_by_region(e.target.value))
    }

    return (
        <div className='RegionType'>
            <select onChange={searchRegion}>
                <option defaultValue={"all"} value={"all"}>
                All
                </option>
                <option value={"Asia"}>Asia</option>
                <option value={"Africa"}>Africa</option>
                <option value={"Oceania"}>Oceania</option>
                <option value={"Americas"}>Americas</option>
                <option value={"Europe"}>Europe</option>
                <option value={"Antarctic"}>Antarctic</option>
            </select>
        </div>
    )
}