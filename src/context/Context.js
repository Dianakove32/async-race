import React, { useState, useEffect } from 'react'
export const ApiContext = React.createContext()

export default function ContextProvider({ children }) {
    const [state, setState] = useState([])
    useEffect(() => {
        getCar()
    }, [state])

 function getCar(){
          fetch("http://localhost:3001/garage")
            .then(data => data.json())
            .then(res => setState(res))
    }
    return (
        <ApiContext.Provider value={{ state, setState }}>
            {children}
        </ApiContext.Provider>
    )
}