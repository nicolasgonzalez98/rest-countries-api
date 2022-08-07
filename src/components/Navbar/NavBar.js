import './NavBar.css'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";


export function NavBar({theme, toggleTheme}){


    

    return (
        <nav className='nav'>
            <div className="left">
                <h1>Where in the world?</h1>
            </div>
            <div className="right">
                <button onClick={toggleTheme} className='toggle-button'>
                    {theme === 'dark' ? 
                        <IoSunnyOutline size={'xs'} color={'hsl(0, 0%, 100%)'}/> : 
                        <IoMoonOutline size={'xs'} color={'hsl(200, 15%, 8%)'}/>
                    }
                </button>
            </div>
        </nav>
    )
}