import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import {db} from "../firebase/config"

import { useState, useEffect } from "react"



export const useAuthentication = () =>{

    const[error, setError] = useState(null)
    const[loading, setLoading] = useState(null)
    const[registered, setRegistered] = useState(false)
    
    //cleanup
    const [cancelled, setCancelled]= useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    //register
    const createUser = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)

        try {

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)
            setRegistered(true)
            
        } catch (error) {

            console.log(error.message)
            console.log( typeof error.message)

            let systemErrorMessage

            if(error.message.includes('Password')){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres!'
            } else if(error.message.includes('email-already')){
                systemErrorMessage = 'E-mail ja cadastrado!'
            }
            else if(error.message.includes('invalid-email')){
                systemErrorMessage = 'E-mail invalido!'
            }
            else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!"
            }
            setLoading(false)
            setError(systemErrorMessage)
            
        }
        
    }

    //logout - signtout
    const logout = () =>{
        checkIfIsCancelled()
        signOut(auth)

    }

    //login - signin
    const login = async (data) =>{

        checkIfIsCancelled()
        setLoading(true)
        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email,
                data.password)
                setLoading(false)
            
        } catch (error) {

            let systemErrorMessage

            if(error.message.includes('invalid-login')){
                systemErrorMessage = 'Usuario ou senha incorreto(s)'

            } 
            else{
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde'
            }
            console.log(error)
            setError(systemErrorMessage)
            setLoading(false)
            
        }

    }

    useEffect(()=>{
        return () => {setCancelled(true)}

    }, [])

    return{
        auth,
        createUser,
        error, 
        loading,
        registered,
        setRegistered,
        logout,
        login
    }
}