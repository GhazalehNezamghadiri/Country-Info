'use client'
import Link from "next/link"
import { useContext } from "react"
import { Context2 } from "../context2/mycontext"

export default function Section2() {

    const { countries, load, error, showall, setShowall, search, setSearch } = useContext(Context2)

    if (load) return <div className="p-10 text-center text-4xl text-gray-600">Loading country data,Please wait ...</div>
    if (error) return <div className="p-10 text-red-600">Error : {error}</div>

    const filter = countries.filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()))
    const countriesToShow = search ? filter : (showall ? countries : countries.slice(0, 6))
    const notFound = search && filter.length === 0 ? 'Country not found' : ''

    return (
        <>
            <main className="p-6 max-w-7xl mx-auto">
                <h1 className="w-full my-5 p-6 bg-blue-400 text-white text-center md:text-4xl text-2xl font-bold">List of countries</h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                    <Link href='..'>
                        <button className='px-3 py-2 w-20 bg-gray-300 text-gray-700 rounded hover:bg-gray-500 transition cursor-pointer'>Back</button>
                    </Link>

                    <input type="text" placeholder="Search country" onChange={(e) => setSearch(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition w-full sm:w-80" />
                </div>

                <div className='text-red-600 text-2xl mb-4 text-center font-semibold'>{notFound}</div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countriesToShow.map((country, i) => (
                        <li key={i} className="shadow-md  rounded-xl p-5 text-center bg-white">
                            <img src={country.flags?.png} alt={`Flag of ${country.name.common}`} className="w-full h-40 object-cover rounded-lg  mb-4" />
                            <h2 className="font-bold text-xl mb-5">{country.name.common}</h2>
                            <Link href={`/countries/${country.name.common}`}><button className='px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:text-gray-300 hover:bg-gray-600 transition'>More Details</button></Link>

                        </li>
                    ))}
                </ul>


                <div className='flex justify-center my-10 '>
                    <button className='px-6 py-3 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition' onClick={() => setShowall(true)}>Show more</button>
                </div>
            </main>
            <footer className="bg-gray-200 border-t border-gray-300 mt-16 py-10 px-10 text-center">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">All the flags of the world</h2>
                <p className=' text-lg text-gray-700 mx-auto'>On our website, you can easily search for countries by name and instantly view key details such as flags, population, capital, and region.
                    If you’re interested in learning more, simply click on a country to explore additional information including languages, currencies, timezones, and more.
                    It’s a simple and user-friendly way to discover the world — one country at a time.</p>
            </footer>
        </>
    )

}