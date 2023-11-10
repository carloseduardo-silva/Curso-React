import { db } from "../firebase/config"
import {collection, query, orderBy, getDocs, where } from "firebase/firestore"
import { useEffect, useState } from "react"

export const useFetchDatas = (docCollection, search=null) =>{

    //states
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    //deal with memory leak
    const[cancelled, setCancelled] = useState(false)


    //query
    useEffect(()=>{
        
        const loadData = async () =>{
            if (cancelled) return

            setLoading(true)

            try {

                let q;
                let docsArr = []

                if (search) {

                    q =  query(collection(db, 'products'), where("queryName", "array-contains", search))
                    
                } 
                else{
                     q =  query(collection(db, 'products'), orderBy('idProduct'))
                }

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    
                    docsArr.push(doc.data())
                    
                    setDatas(docsArr)
                });

                setLoading(false)
                

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)
            }
        }

        loadData()
    }, [docCollection, cancelled, search])



    // memory leak
    useEffect(() =>{
        return () => setCancelled(true)
    },[])


    //return
    return {datas, loading, error}
}