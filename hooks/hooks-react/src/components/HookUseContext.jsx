import { createContext, useState } from "react";

export const MessageContext = createContext()

export const HookUseContext = ({children}) =>{

    const [msg, setMsg] = useState('Text from context API')

    return(
        <MessageContext.Provider value={{msg, setMsg}}> 
        {children}
        </MessageContext.Provider>
    )
}

