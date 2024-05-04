import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const tokenAuthContext = createContext()

function TokenAuth({children}) {
    const [isAuthorised, setIsAuthorised] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setIsAuthorised(true)
        } else {
            setIsAuthorised(false)
        }
    }, [isAuthorised])

    return (
        <>
            <tokenAuthContext.Provider value={{ isAuthorised, setIsAuthorised }}>
                {children}
            </tokenAuthContext.Provider>
        </>
    )
}

export default TokenAuth