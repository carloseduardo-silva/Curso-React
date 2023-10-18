import { useState, useEffect } from "react";


//5 - refatorando post

// 4 - Custom Hook
export const useFetch = (url) =>{
    
    const [data, setData] = useState(null)

    //5 - refatorando post
    const [config, setConfig] = useState(null)

    const [method, setMethod] = useState(null)

    const [idProduct, setIdProduct] = useState(null)

    //loading
    const[loading, setLoading] = useState(false)

    const [callFetch, setcallFetch] = useState(false)

    const[error, setError] = useState('')

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            
            setConfig({
                method,
                headers:{"Content-Type": 'application/json'},
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
        else if(method === 'DELETE'){

            setConfig({
                method,
                headers:{"Content-Type": 'application/json'}
            })

            setMethod(method)
            setIdProduct(data)
            console.log(data)
            console.log(idProduct)
                
        }    
    }
        


    //getting datas 
    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)

            try {

                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                    
            } catch (error) {

                setError('Houve algum erro ao carregar os dados!')
                
            }

            setLoading(false)
        }

    fetchData()
    }, [url, callFetch])


    //5 - refatorando post
    useEffect(() => {

        let json;

        const httpRequest = async() =>{
            if(method === 'POST'){

                let fetchOptions = [url, config]
            
                const res = await fetch(...fetchOptions)

                json = await res.json()

            }
            else if(method ==='DELETE'){

               const deleteurl = `${url}/${idProduct}`

               const res = await fetch(deleteurl, config)

                json = await res.json()
               
            }

            setcallFetch(json)
        };

        httpRequest()
    }, [config, method, url])

    return {data, httpConfig, loading, error}
}