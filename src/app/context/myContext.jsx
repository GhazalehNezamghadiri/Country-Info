'use client'
import {createContext,useState } from "react"

export const myContext = createContext()

export default function MyContext({children}){
    

    const [message, setMessage] = useState('Discover facts about countries - from capital cities to population and more.')

    return(
       <myContext.Provider value={{message,setMessage}}>
        {children}
       </myContext.Provider>
    )
}