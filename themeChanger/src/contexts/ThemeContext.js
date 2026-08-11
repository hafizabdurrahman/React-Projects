import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    mode: "light",
    setMode: () => {}
});

export const Provider = ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext);
}