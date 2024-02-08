import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {doc, getDoc} from "firebase/firestore"



//fn exportation + some datas came from component
export const useFetchDocument = (docCollection, id) =>{

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)



    //query of the datas, in dependency of the depArray
    useEffect(()=>{

        const loadDocument = async () => {
            if(cancelled) return

            setLoading(true)

            
            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

             
                setDocument(docSnap.data())
                
                setLoading(false)
            } catch (error) {

                console.log(error)
                setError(error.message)
                
                setLoading(false)
            }
           
           
        }

        loadDocument();
    }, [docCollection, id, cancelled])

    //memory leak
    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return {document, loading, error}
}