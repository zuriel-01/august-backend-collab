import React, { Children, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useSearchParams } from 'next/navigation'

export default function ThemeProvider({ children }) {
    const { theme } = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)
    // some browsers may not store the theme state in the local session
    // so we use the mounted use state
    // take care of it

    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted) {
        return (
            <div className={theme}> {children} </div>
        )
    }

}
