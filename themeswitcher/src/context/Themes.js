import React, { createContext } from "react";
import { useContext } from "react";

export const ThemeContext = createContext(
    {
        theme:'pink',
        darkmode :()=>{},
        lightmode: ()=>{},
    }
)

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext) // this is a custom hook where we return the useContext hook with Themecontext provides
}

