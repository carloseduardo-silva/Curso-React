import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import {collection, addDoc, Timestamp} from "firebase/firestore"

//object that the reducer will consume
const initialState = {
    loading:null,
    error: null
}

//reducer 2.
const insertReducer = (state, action) =>{
//switch with the states of the process
   switch (action.type){
    case "LOADING":
        return {loading: true, error:null}
    case "INSERTED_DOC":
        return {loading: false, error:null}
    case "ERROR":
        return {loading:false, error: action.payload};
    default:
        return state


   }
}

export const useInsertDocument = (docCollection) =>{
    //reducer 1.
    const [response, dispatch] = useReducer(insertReducer, initialState)


    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancelBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)}}


    //insert doc
    const insertDocument = async (document) =>{
         //passing the new value BEFORE the sent to the reducer
        checkCancelBeforeDispatch({
            type:"LOADING" })
        try {
            
            const newDocument = {...document, createAdt: Timestamp.now()}

            const insertedDocument = await 
            addDoc(collection(db, docCollection), newDocument)

            //passing the new value AFTER the sent to the reducer
            checkCancelBeforeDispatch({
                type:"INSERTED_DOC",
                payload: insertedDocument,
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

    return{insertDocument, response}
}