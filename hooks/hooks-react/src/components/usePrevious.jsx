import {useEffect, useRef, useDebugValue} from 'react'

export const usePrevious = (value) => {

    const ref = useRef()

    //consolelog do reactdevtools
    useDebugValue('--- CUSTOM HOOK DEBUGVALUE ---')
    useDebugValue(`O numero anterior é ` + value)

    useEffect(() =>{
        ref.current = value
    })

  return ref.current
}

