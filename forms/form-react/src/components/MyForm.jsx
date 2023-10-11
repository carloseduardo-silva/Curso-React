import './MyForm.css'
import {useState} from 'react'


const MyForm = ({user}) => {

  const [name, setName] = useState(user ? user.name : 'Nome não definido')
  const [email, setEmail] = useState(user ? user.email : 'Email não definido')

  const [bio, setBio] = useState(user ? user.bio : 'Bio nao definida')

  const [gender, setGender] = useState()

  const handleName = (e) =>{
    setName(e.target.value)
  }




  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Enviando Formulario')
    console.log(`Nome: ${name} -  Email: ${email} - Bio: ${bio} - Genero: ${gender}`)
    setEmail('')
    setName('')
    setBio('')
    setGender('')
    
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite o seu Nome' onChange={handleName} value={name} />
 


            {/* UTILIZAR ESTA FORMA !!! */}
            <label >
              <span> Email: </span>
              <input type="email" placeholder='Digite o seu Email' onChange={(e) => setEmail(e.target.value)} value={email} />
              
            </label>
            <label>Bio:</label>
            <textarea placeholder='Digite sobre voce' name="bio" id="bio" cols="30" rows="10" onChange={(e) =>{
              setBio(e.target.value)
            }} value={bio}></textarea>

            <label>
              <span>Gênero</span>
              <select value={gender} onChange={(e) =>setGender(e.target.value)} name="gender" >
              <option value="masc">Masculino</option>
              <option value="fem">Feminino</option>
              <option value="undefined">Outro</option>

              </select>
            </label>

           
           
           <button>Enviar</button>
           
        </form>
      
    </div>
  )
}

export default MyForm
