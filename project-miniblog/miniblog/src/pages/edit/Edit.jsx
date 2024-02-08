//hooks
import { useState, useEffect } from 'react'
import { userAuthValue } from '../../context/Auth'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
//css
import styles from './Edit.module.css'


const Edit = () => {
    const [title, setTitle] = useState("")
    const [URLimage, setURLImage] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")


    const { id } = useParams()

    const {document: post} = useFetchDocument('posts', id)


    useEffect(()=>{

        if(post){
            setTitle(post.title)
            setContent(post.content)
            setURLImage(post.URLimage)
            let tagsString = post.tags.join(", ")
            setTags(tagsString)
        }


    }, [post])
  
  
    const { user } = userAuthValue() 
  
    const navigate = useNavigate()
  
    const { updateDocument, response } = useUpdateDocument('posts')
  
   
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
      
  
      //check all values
      if(!title | !URLimage | !content | !tags){
        setFormError('Por favor preencher todos os campos!')
      }
  
      if(formError) return;
    
      const data = {
        title,
        URLimage,
        content,
        tags: arrayTags,
        uid: user.uid,
        createdBy: user.displayName,
      }

      updateDocument(id, data)  
  
      //redirect to home page
      navigate('/dashboard')
  
  
    }
  
    return (
      <div className={styles.editPost}>
       <h1> Editando post: {post && post.title}</h1>
       <p>Altere os dados quando quiser!</p>
        
        {post && 
        <>
        <form onSubmit={handlePost}>
        
        <label>
          <span>Título</span>
          <input value={title}  onChange={(e) =>{setTitle(e.target.value)}} type="text" name='title' required placeholder='Pense num bom título'/>
        
        </label>
        
        <label>
          <span>URL da Imagem</span>
          <input value={URLimage} onChange={(e) =>{setURLImage(e.target.value)}} type="url" name='URLimage' required placeholder='Insira uma imagem que representa seu post' />
        
        </label>

        <p className={styles.preview_title}> Preview da imagem atual:</p>
        <img className={styles.preview_image} src={post.URLimage} alt={post.title} />
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
        
        </>}
        
      
      </div>
    )
}

export default Edit
