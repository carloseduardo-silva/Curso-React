import React from 'react'

//css
import styles from "./Post.module.css"

//hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {

    //id of the post extracted from the url
    const { id } = useParams()

    const { document: post, loading } = useFetchDocument('posts', id)
  
  return (
    <div className={styles.post_container}>
    {loading &&  <p> Carregando... </p>}
      {post && (
        <>
       
        <img src={post.URLimage} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <h3>Este post trata sobre:</h3>
        <div className={styles.tags}>
        {post.tags.map((tag) =>(
            <p key={tag}><span>#</span>{tag}</p>
        ))} </div>
        
        </>
      )}
      
    </div>
  )
}

export default Post
