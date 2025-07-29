'use client'
import Link from "next/link"
import { TravelContext } from "../context/context"
import { useContext } from "react"
export default function Master(){
    const {remove, travelList} = useContext(TravelContext)
    return(
         <div>
            <h2 className="text-3xl bg-blue-400 text-white my-4 font-bold text-center p-5">Your travel wishlist</h2>

            <Link href='/'>
                <button className="px-4 ml-20 py-2 rounded  bg-gray-300 text-gray-700 hover:text-gray-300 hover:bg-gray-600 transition cursor-pointer" >Back</button>
            </Link>

            {travelList.length === 0 && (
                <p className="text-gray-500 text-3xl text-center">You haven't added any countries yet</p>
            )}

            {travelList.length > 0 && (
                <ul className="p-20 gap-4 flex flex-wrap justify-center">
                    {travelList.map((country, i) => (
                        <li key={i} className="shadow-md  rounded-xl p-5 text-center bg-white">
                            <img src={country.flags.png} alt={country.name.common} className=" h-40 object-center rounded-lg  mb-4" />
                            <h2 className="font-bold text-xl mb-5">{country.name.common}</h2>
                            <Link href={`/countries/${country.name.common}`}><button className='px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:text-gray-300 hover:bg-gray-600 transition'>More Details</button></Link>
                            <br />
                            <button onClick={function () { remove(country.name.common) }} className="bg-red-600 text-sm my-3 text-white rounded px-4 py-1">Delete</button>

                        </li>
                    ))}
                </ul>
            )}

            <footer className="bg-gray-200 border-t border-gray-300 mt-16 py-10 px-10 text-center">
                <h2 className="text-2xl font-bold text-blue-500 mb-4">Ready to Explore the World?</h2>
                <p className="text-gray-700 mx-auto text-lg">
                    Traveling is more than just visiting new places — it’s about discovering different cultures, tasting unfamiliar flavors, hearing new languages, and seeing the world through someone else’s eyes.
                    Every country has its own rhythm, its own story, and its own way of life. When you explore beyond your comfort zone, you learn not only about others, but also about yourself.
                    From the ancient streets of Rome to the colorful markets of Marrakech, or the peaceful temples of Kyoto — each destination leaves a mark on your soul.
                    Keep building your travel list, because the world is vast, beautiful, and waiting just for you to experience it.
                </p>
            </footer>

        </div>
    )
}