import { createContext,useContext } from "react";
//here in the context i am passing the default values themeMode and two methods
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}