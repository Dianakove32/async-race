import React, { useState, useEffect } from 'react'
export const ApiContext = React.createContext()

export default function ContextProvider({ children }) {
    const [id, setId] = useState('')

    return (
        <ApiContext.Provider value={{ id, setId }}>
            {children}
        </ApiContext.Provider>
    )
}