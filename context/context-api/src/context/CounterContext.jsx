//1 - create context
import { createContext, useState } from "react";

export const CounterContext = createContext()


//2 - ConfigProvider and datas(states + childrenProps) that will be passed
export const CounterContextProvider = (({children}) =>{

    const [counter, setCounter] = useState(3);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
         {children}
        </CounterContext.Provider>

    )

})