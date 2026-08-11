import React, {useContext, useState} from "react";
import ThemeContext from "./ThemeContext";


function Provider({children}){
    const [mode, setMode] = useState("light");
    return(
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Provider