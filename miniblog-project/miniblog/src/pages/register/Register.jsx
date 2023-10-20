import { useState, useEffect } from "react"
import styles from "./Register.module.css"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const{createUser, error: authError, loading, registered, setRegistered} = useAuthentication()

  const[error, setError] = useState("")


  const  handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password

    }

    if(password !== confirmPassword){
      setError('As senhas precisam ser iguais!')
      return

    }

    const res = await createUser(user)
    console.log(res)

    setInterval(() =>{
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setRegistered(false)
    }, 3000)


  }

  useEffect(()=>{
    if(authError){
     setError(authError)
    }
  }, [authError])

  return (

    <div className={styles.form_container}>
      <h1> Cadastre-se para postar</h1>
      <p> Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span  className={styles.bold}>Nome:</span>
          <input onChange={(e) =>{setDisplayName(e.target.value)}} value={displayName}  type="name" name="displayName" placeholder="Nome do usuário" />
        </label>

        <label>
          <span  className={styles.bold}>Email:</span>
          <input onChange={(e) =>{setEmail(e.target.value)}}
          value={email} type="email"  name="email" placeholder="Email do usuário" />
        </label>

        <label>
          <span  className={styles.bold}>Senha:</span>
          <input onChange={(e) =>{setPassword(e.target.value)}} value={password} type="password" name="password" placeholder="Insira a senha" />
        </label>

        <label>
          <span  className={styles.bold}>Confirmação de Senha:</span>
          <input onChange={(e) =>{setConfirmPassword(e.target.value)}} value={confirmPassword} type="password" name="confirmPassword"  placeholder="Confirme a senha" />
        </label>

        {!loading && <button className="btn">Cadastrar</button> }

        {loading && <button disabled className="btn">Aguarde ...</button> }
        {error && <p className="error"> {error}</p>}

        {registered && <p className="done">Cadastro Concluído</p>}




      </form>


    </div>
  )
}

export default Register
