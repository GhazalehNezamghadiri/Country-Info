'use client'
import React, { useContext } from "react"
import Link from "next/link"
import { myContext } from "../context/myContext"


export default function Section() {
    const { message } = useContext(myContext)
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-5 py-16  ">
              <Link href='/travel'>
                    <button className="fixed px-4 py-4 bg-blue-500 hover:bg-blue-800 transition text-white rounded top-10 right-10 z-50 cursor-pointer">Travel list</button>
                </Link>
            <div className="background"></div>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black/70"> </div>
            <div className="absolute  text-center z-50 text-white">
                <h1 className="font-bold text-6xl mb-6  ">Welcome to the country Info</h1>
                <p className="text-lg mb-10 text-center ">
                    {message}
                </p>
                <Link href='/countries'><button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg cursor-pointer">Explore countries</button></Link>
            </div>

        </div>
    )
}