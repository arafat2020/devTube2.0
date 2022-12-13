import { createContext, useState } from "react";

export const devContext = createContext()

export const DevProvider =({ children })=>{
    const [term,setTerm] = useState('Progarmming')
    return(
        <devContext.Provider value={{
            term,setTerm,
        }}>
            {children}
        </devContext.Provider>
    )
}