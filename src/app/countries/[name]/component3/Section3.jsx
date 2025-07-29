'use client'
import React, { useContext } from "react"
import Link from "next/link"
import {Context3 } from "../context3/mycontext"


export default function Section3() {
    const { country, load,error,wiki,culture,AddToList,mess } = useContext(Context3)


    if (load) return <div className="text-center p-10 text-4xl text-gray-600">Loading...</div>
    if (error) return <div className="p-10 text-red-600">{error}</div>

    return (
        <>
            <Link href='/countries'>
                <button className="px-8 py-2 bg-gray-300 text-gray-700 rounded hover:text-gray-300 hover:bg-gray-500 transition cursor-pointer">Back to list</button>
            </Link>
            <div className="md:flex mb-6 ">

                <img src={country.flags.png} alt='Flag' className="md:w-[45%] w-[80%] object-center my-4" />

                <div className="md:pl-40 *:my-4 text-lg w-full md:w-1/2  ">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">{country.name.common}</h1>
                    <h5><strong>Capital : </strong> <span className="text-gray-700"> {country.capital?.[0]}</span></h5>
                    <h5><strong>Population : </strong> <span className="text-gray-700"> {country.population.toLocaleString()}</span></h5>
                    <h5><strong>Region : </strong> <span className="text-gray-700"> {country.region}</span></h5>
                    <h5><strong>Languages : </strong> <span className="text-gray-700"> {country.languages ? Object.values(country.languages).join(',') : '---'}</span></h5>
                    <h5><strong>Currencies : </strong> <span className="text-gray-700"> {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(',') : '-'}</span></h5>
                    <h5><strong>Borders : </strong> <span className="text-gray-700"> {country.borders?.join(',')}</span></h5>

                    <button onClick={AddToList} className="mt-7 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">Add to travel list</button>
                </div>
            </div>

            {mess && (
                <div className="bg-green-400 text-white px-4 py-2 rounded my-5 w-fit">Added to travel list</div>
            )}
            <hr className="bg-gray-400 h-2 border-0" />


            {wiki && (
                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-2">{wiki.title}</h2>
                    <p className=" mb-2">{wiki.extract}</p>
                    <a href={wiki.content_urls.desktop.page} target="_blank" className="text-blue-600 underline">Read more on wikipedia</a>

                </section>
            )}

            {culture && (
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-2 ">{culture.titles.normalized}</h2>
                    <p className="mb-4 ">{culture.extract}</p>
                </section>
            )}
        </>
    )

}
