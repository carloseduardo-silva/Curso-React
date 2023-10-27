import React from 'react'
import { Link } from 'react-router-dom'

//css
import styles from "./Dashboard.module.css"

// hooks
import { userAuthValue } from '../../context/Auth'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import { useDeleteDocument } from '../../hooks/useDeleteDocument'


const Dashboard = () => {

  const {user} = userAuthValue()
  const uid = user.uid

  //posts from user
  const {documents: posts, loading} = useFetchDocuments('posts', null, uid)

  //delete user
  const { deleteDocument } = useDeleteDocument('posts')

 


  if(loading){
    return <p>Carregando...</p>
  }

  

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p> Gerencie os seus posts</p>
      {posts && posts.length === 0 ?
      (<div className={styles.noposts}>
        <p> Não foram encontrados posts!</p>
        <Link to='/' className='btn'> Criar Primeiro Post </Link>
         </div>) :

      (
      <> 
      <div className={styles.post_header}>
        <span>Título</span>
        <span>Ações</span>

      </div>

      
      </> )}

      {posts && posts.map((post) =>( 
        <div className={styles.post_row} key={post.id}>

          <p> {post.title}</p>

          <div>
            <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>

            <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>

            <button className='btn btn-outline btn-danger' onClick={() => deleteDocument(post.id)}>Excluir</button>
          </div>



        </div>
        ))}

    </div>
  )
}

export default Dashboard
