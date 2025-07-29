'use client'
import MyContext from "./context2/mycontext" 
import Section2 from "./component2/section2"
import React from "react"

export default function CountriesPage() {

    return (
        <MyContext>
            <Section2/>
        </MyContext>
    )
}