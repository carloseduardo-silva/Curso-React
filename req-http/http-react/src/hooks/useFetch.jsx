import { useState, useEffect } from "react";


//5 - refatorando post

// 4 - Custom Hook
export const useFetch = (url) =>{
    
    const [data, setData] = useState(null)

    //5 - refatorando post
    const [config, setConfig] = useState(null)

    const [method, setMethod] = useState(null)

    const [callFetch, setcallFetch] = useState(false)



    const httpConfig = (data, method) => {
        if(method === 'POST'){
            
            setConfig({
                method,
                headers:{"Content-Type": 'application/json'},
                body: JSON.stringfy(data)
            })
            setMethod(method    )
        }}


    useEffect(()=>{
        const fetchData = async () =>{

            const res = await fetch(url)
            const json = await res.json()

            setData(json)
        }

    fetchData()
},[url])

    //5 - refatorando post
    useEffect(() => {
        const httpRequest = async() =>{
            if(method === 'POST'){

                let fetchOptions = [url, config]
            
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setcallFetch(json)
            
            
            }
        }


    }, [config, method, url])

    return {data, httpConfig}
}