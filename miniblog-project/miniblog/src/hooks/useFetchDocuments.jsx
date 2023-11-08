import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore"



//fn exportation + some datas came from component
export const useFetchDocuments = (docCollection, search=null, uid=null) =>{

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

            //setting db ref
            const collectionRef = await collection(db, 'posts')

            try {
                let q;

                //case of be a query of post
                if(search){
                    q = await query(collectionRef, where('tags', 'array-contains', search), orderBy("createAdt", "desc"))

                } 
                //case of the dashboard quering all posts from this user
                else if(uid){

                    q = await query(collectionRef, where("uid", "==", uid), orderBy("createAdt", "desc"))

                }

                //normal assync post exibition
                else{
                    q=  await query(collectionRef, orderBy("createAdt", "desc"));

                }

                //snapshort observer assync
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