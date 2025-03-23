import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// using Provider for warp
export const ThemeProvider = ThemeContext.Provider

// export theme useTheme hooks
export default function useTheme(){
    return useContext(ThemeContext)
}
