import React, { createContext, useEffect } from 'react'

export const ThemeContext=createContext()
// get the context from the localStorage, we are using
// localstorage becaise we want the user to have his or preferred them, 
// whenever they go to our site
const getFromLocalStorage=()=>{
    // to ensure my component is mounted before checking,
    // Next js will throw an error, if this check is not done


    if(typeof window !=="undefined"){
        const value=localStorage.getItem("theme")
        return value || "light"
    }
}



export default function ThemeContexTwo({children}) {
    //  let my state be the value store in the localStorage
    const [theme,setTheme]=useState(()=>{

      return  getFromLocalStorage()

    })
    const toggle=()=>{
        setTheme(theme==="light"? "dark" : "light")
    }

    // update the value of the local stoarge
    // we will have to use useEffect, cause changing our localStorage is 
    // a side Effcet

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    }, [])
  return (
    <ThemeContext.Provider value={{theme,toggle}}>

            {children}
    </ThemeContext.Provider>
  )
}
