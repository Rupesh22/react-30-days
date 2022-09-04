import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState({darkMode: false});

    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;