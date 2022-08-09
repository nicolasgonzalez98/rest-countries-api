import { RegionType } from "../RegionType/RegionType";
import { SearchBar } from "../SearchBar/SearchBar";
import './Filters.css'

export function Filters(){
    return (
        <div className="Filters">
            <SearchBar />
            <RegionType />
        </div>
    )
}