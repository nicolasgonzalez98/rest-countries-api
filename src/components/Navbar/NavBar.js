import './NavBar.css'
import { MoonOutline, SunnyOutline } from 'react-ionicons'


export function NavBar({theme, toggleTheme}){


    

    return (
        <nav className='nav'>
            <div className="left">
                <h1>Where in the world?</h1>
            </div>
            <div className="right">
                <button onClick={toggleTheme} className='toggle-button'>
                    {theme === 'dark' ? 
                        <SunnyOutline color={'hsl(0, 0%, 100%)'}/> : 
                        <MoonOutline color={'hsl(200, 15%, 8%)'}/>
                    }
                </button>
            </div>
        </nav>
    )
}