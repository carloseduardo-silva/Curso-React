import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {collection, query, orderBy, onSnapshot, where, getDocs} from "firebase/firestore"



//fn exportation + some datas came from component
export const useFetchDocument = (docCollection, search=null, uid=null) =>{

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)



    //query of the datas, in dependency of the depArray
    useEffect(()=>{

        const loadData = async () => {
            if(cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, 'posts')

            try {
                let q;

                //query
                //dashboard

                q=  await query(collectionRef, orderBy("createAdt", "desc"));

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                      querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                      }))
                    );
                  });

                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false)
            }

        }
        loadData();
    }, [docCollection, search, uid, cancelled])

    //memory leak
    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return {documents, loading, error}
}