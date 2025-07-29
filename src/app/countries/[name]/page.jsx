'use client'
import Section3 from "./component3/Section3"
import MyContext from "./context3/mycontext"

export default function DetailPage() {


    return (
        <MyContext>
            <main className="px-20 mx-auto text-gray-800">
                <h1 className="w-full my-5 p-6 bg-blue-400 text-white text-center md:text-4xl text-2xl font-bold">Detail page</h1>
                <Section3/>
            </main>
        </MyContext>
    )

}

