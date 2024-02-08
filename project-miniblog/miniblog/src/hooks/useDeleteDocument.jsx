import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import {doc,  deleteDoc} from "firebase/firestore"

//object that the reducer will consume
const initialState = {
    loading:null,
    error: null
}

//reducer 2.
const deleteReducer = (state, action) =>{
//switch with the states of the process
   switch (action.type){
    case "LOADING":
        return {loading: true, error:null}
    case "DELETED_DOC":
        return {loading: false, error:null}
    case "ERROR":
        return {loading:false, error: action.payload};
    default:
        return state


   }
}

export const useDeleteDocument = (docCollection) =>{
    //reducer 1.
    const [response, dispatch] = useReducer(deleteReducer, initialState)


    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancelBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)}}


    //delete doc
    const deleteDocument = async (id) =>{
         //passing the new value BEFORE the sent to the reducer
        checkCancelBeforeDispatch({
            type:"LOADING" })
        try {
            
            const deletedDocument = await deleteDoc(doc(db, docCollection, id))
            //passing the new value AFTER the sent to the reducer
            checkCancelBeforeDispatch({
                type:"DELETED_DOC",
                payload: deletedDocument,
            })

        } catch (error) {
            console.log(error)
             //passing the error AFTER the sent to the reducer
             checkCancelBeforeDispatch({
                type:"ERROR",
                payload: error.message
            })
            
            
        }
    }
    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return{deleteDocument, response}
}