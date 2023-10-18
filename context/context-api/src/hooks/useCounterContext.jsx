//hook com importações prontas + validação + exportação do context
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


export const useCounterContext = () =>{

    const context = useContext(CounterContext)

    //validação do contexto
    if(!context){
        console.log('Contexto não Encontrado!')
    } 

    return context
}