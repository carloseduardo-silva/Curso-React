import React from 'react'

import { useState, useEffect } from 'react'

import { useAuthentication } from '../../hooks/useAuthentication'

import styles from "./Login.module.css"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {login, error: authError ,loading} = useAuthentication()

  const handleLogin = async (e) =>{

    e.preventDefault()

    setError('')

    const user = {
      email,
      password,
    }

    const res =  await login(user)
    console.log(res)
  }

  useEffect(()=>{
    if(authError){
     setError(authError)
    }
  }, [authError])





  return (
    <div className={styles.login}>
      <h1> Entrar </h1>
      <p> Faça o login para começar a postar!</p>

      <form onSubmit={handleLogin}>
        <label>
          <span>E-mail</span>
          <input name='email' required value={email} onChange={(e) =>{setEmail(e.target.value)}} placeholder='E-mail do usuário' type="email" />
        </label>
        
        <label >
          <span>Senha:</span>
          <input name='password' required value={password} onChange={(e) =>{setPassword(e.target.value)}} placeholder='Insira a senha' type="password" />
        </label>

        {!loading && <button className="btn">Entrar</button> }

        {loading && <button disabled className="btn">Aguarde ...</button> }
        {error && <p className="error"> {error}</p>}
        

        </form>

    </div>
  )
}

export default Login
