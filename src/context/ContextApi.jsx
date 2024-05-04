import React, { createContext, useContext, useState } from 'react'
export const deleteResponseContext = createContext()
export const editResponseContext = createContext()
export const addResponseContext = createContext()
export const docDeleteResponseContext = createContext()
export const docEditResponseContext = createContext()

function ContextApi({ children }) {
    const [deleteResponse, setDeleteResponse] = useState("")
    const [editResponse, setEditResponse] = useState("")
    const [addResponse, setAddResponse] = useState("")
    const [docDeleteResponse, setDocDeleteResponse] = useState("")
    const [docEditResponse, setdocEditResponse] = useState("")


    return (
        <>
           <docEditResponseContext.Provider value={{docEditResponse, setdocEditResponse}}>
                <docDeleteResponseContext.Provider value={{ docDeleteResponse, setDocDeleteResponse }}>
                    <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                        <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                            <deleteResponseContext.Provider value={{ deleteResponse, setDeleteResponse }}>
                                {children}
                            </deleteResponseContext.Provider>
                        </editResponseContext.Provider>
                    </addResponseContext.Provider>
                </docDeleteResponseContext.Provider>
           </docEditResponseContext.Provider>
        </>
    )
}

export default ContextApi