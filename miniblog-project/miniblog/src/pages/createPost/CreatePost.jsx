import React from 'react'
import styles from "./CreatePost.module.css"
import { useState, useEffect } from 'react'
import { userAuthValue } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {

  const [title , setTitle ] = useState('')
  const [URLimage , setURLImage ] = useState('')
  const [content , setContent ] = useState('')
  const [tags, setTags ] = useState([])

  const [formError, setFormError] = useState("")


  const handlePost = (e) =>{
    e.preventDefault()
    console.log('post criado')
  }

  return (
    <div className={styles.createPost}>
     <h1> Criar Post</h1>
     <p> Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

    <form onSubmit={handlePost}>
      
    <label>
      <span>Título</span>
      <input onChange={(e) =>{setTitle(e.target.value)}} type="text" required placeholder='Pense num bom título'/>
    
    </label>
    
    <label>
      <span>URL da Imagem</span>
      <input onChange={(e) =>{setURLImage(e.target.value)}} type="text" required placeholder='Insira uma imagem que representa seu post' />
    
    </label>
    
    <label>
      <span>Conteúdo</span>
      <input onChange={(e) =>{setContent(e.target.value)}} type="text"  required placeholder='Insira o conteúdo do post' />
    
    </label>
    
    <label>
      <span>Tags</span>
      <input onChange={(e) =>{setTags(e.target.value)}} type="text"  required placeholder='Insira as tags separadas por vírgula' />
    
    </label>
    
    <button className='btn'> Criar Post</button>

    </form>
    </div>
  )
}

export default CreatePost
