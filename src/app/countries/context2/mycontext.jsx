'use client'
import { createContext, useEffect, useState } from "react"

export const Context2 = createContext()


export default function MyContext({ children }) {
    const [countries, setCountries] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(null)
    const [showall, setShowall] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching data')
                return res.json()
            })
            .then(data => {
                setCountries(data)
                setLoad(false)
            })
            .catch(err => {
                console.log(err)
                setError('Fail to fetch data')
                setLoad(false)
            })
    }, [])


    return (
        <Context2.Provider value={{countries, setCountries, load, setLoad, error, setError, showall, setShowall, search, setSearch }}>
            {children}
        </Context2.Provider>
    )

}
