'use client'
import Master from "../coponent/master"
import { useState,useEffect, createContext } from "react"


export const TravelContext = createContext() 


export default function Context({children}){
     const [travelList, setTeravelList] = useState([])

    useEffect(() => {
        const save = localStorage.getItem('CountriesToVisit')
        if (save) {
            setTeravelList(JSON.parse(save))
        }
    }, [])


    function remove(countryName) {
        const update = travelList.filter(function (country) {
            return country.name.common !== countryName
        })

        setTeravelList(update)
        localStorage.setItem('CountriesToVisit', JSON.stringify(update))
    }


    return(
        <TravelContext.Provider value={{travelList,remove}}>
            {children}

        </TravelContext.Provider>
    )

}