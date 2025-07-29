'use client'
import { createContext, useState, useEffect, Children } from "react"
import { useParams } from "next/navigation"


export const Context3 = createContext()

export default function MyContext({children}) {
    const { name } = useParams()

    const [load, setLoad] = useState(true)
    const [country, setCountry] = useState(null)
    const [error, setError] = useState(null)
    const [wiki, setWiki] = useState(null)
    const [culture, setCulture] = useState(null)
    const [visit, setVisit] = useState([])
    const [mess, setMess] = useState(false)


     useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error('err')
            })
            .then(data => {
                setCountry(data[0])


                return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
            })
            .then(res => {
                if (res.ok) return res.json()
                throw new Error('Fail to fetch wikipedia')

            })
            .then(wikiData => {
                setWiki(wikiData)


                return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/Culture_of_${name}`)
            })

            .then(res => {
                if (res.ok) return res.json()
                throw new Error('err')
            })
            .then(cultureData => {
                setCulture(cultureData)
                setLoad(false)
            })

            .catch(err => {
                console.log(err)
                setError('Could not load country details')
                setLoad(false)
            })

    }, [name])


    useEffect(() => {
        const saved = localStorage.getItem('CountriesToVisit')
        if(saved){
            setVisit(JSON.parse(saved))
        }
    },[])


    const AddToList = ()=>{
        if(!country) return
        const alredyExist = visit.find(c=>c.name.common === country.name.common)
        if(!alredyExist) {
            const update = [...visit, country]
            setVisit(update)
            localStorage.setItem('CountriesToVisit' , JSON.stringify(update))
            setMess(true)
            setTimeout(()=>setMess(false), 3000)
        }
    }


    return(
        <Context3.Provider value={{country, load, error,wiki,culture,AddToList , mess}}>
            {children}
        </Context3.Provider>
    )

}