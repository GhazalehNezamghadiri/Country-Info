'use client'
import MyContext from "./context/myContext"
import Section from "./components/Section"

import React from 'react'

export default function Page() {
    return (
        <MyContext>
            <Section />
        </MyContext>
    )
}

