import { useContext } from "react";

import './NavBar.css'

import { ThemeContext } from "../context/ThemeProvider";

const NavBar = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    console.log(theme);
    return(
        <nav className="nav-bar">
            <div>react-30-days</div>
            <button onClick={()=> setTheme({darkMode: !theme.darkMode})} className={`theme-button`}>
                <div className='sun'></div>
                <div className='moon'></div>
                <div className={`${theme.darkMode ? 'theme-box-right' : 'theme-box-left'} theme-box`}></div>
            </button>
        </nav>

    )
}

export default NavBar;