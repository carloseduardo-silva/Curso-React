import React from 'react'
import styles from "./CreatePost.module.css"
import { useState, useEffect } from 'react'
import { userAuthValue } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'
import { useInsertDocument } from '../../hooks/useInsertDocument'


const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [URLimage, setURLImage] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")


  const { user } = userAuthValue() 

  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument('posts')

 
  const handlePost = (e) =>{
    e.preventDefault()
    setFormError("")

    //validate imageURL
    try {
      new URL(URLimage)

    } catch (error) {
      setFormError('A imagem precisa ser um URL')
    }

    //create array of tags
    const arrayTags = tags.split(',').map((tag) => tag.trim().toLowerCase())
    console.log(arrayTags)


    //check all values
    if(!title | !URLimage | !content | !tags){
      setFormError('Por favor preencher todos os campos!')
    }

    if(formError) return;
 
    insertDocument({
      title,
      URLimage,
      content,
      tags: arrayTags,
      uid: user.uid,
      createdBy: user.displayName,
    })  

    //redirect to home page
    navigate('/')


  }

  return (
    <div className={styles.createPost}>
     <h1> Criar Post</h1>
     <p> Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>

    <form onSubmit={handlePost}>
      
    <label>
      <span>Título</span>
      <input value={title}  onChange={(e) =>{setTitle(e.target.value)}} type="text" name='title' required placeholder='Pense num bom título'/>
    
    </label>
    
    <label>
      <span>URL da Imagem</span>
      <input value={URLimage} onChange={(e) =>{setURLImage(e.target.value)}} type="url" name='URLimage' required placeholder='Insira uma imagem que representa seu post' />
    
    </label>
    
    <label>
      <span>Conteúdo</span>
      <textarea value={content} onChange={(e) =>{setContent(e.target.value)}} name='content'  required placeholder='Insira o conteúdo do post' />
    
    </label>
    
    <label>
      <span>Tags</span>
      <input value={tags} onChange={(e) =>{setTags(e.target.value)}} type="text" name='tags'  required placeholder='Insira as tags separadas por vírgula' />
    
    </label>
    
    

      {!response.loading && <button className="btn">Criar Post</button> }
          {response.loading && <button disabled className="btn">Aguarde ...</button> }
        {response.error && <p className="error"> {response.error}</p>}
        {formError && <p className="error"> {formError}</p>}

    </form>
    </div>
  )
}

export default CreatePost
