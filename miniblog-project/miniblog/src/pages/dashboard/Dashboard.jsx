import React from 'react'
import { Link } from 'react-router-dom'

//css
import styles from "./Dashboard.module.css"

// hooks
import { userAuthValue } from '../../context/Auth'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


const Dashboard = () => {

  const {user} = userAuthValue()
  const uid = user.uid

  //posts from user
  const {documents: posts, loading} = useFetchDocuments('posts', null, uid)

  console.log(posts)

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p> Gerencie os seus posts</p>
      {posts && posts.length === 0 ?
      (<div className={styles.noposts}>
        <p> Não foram encontrados posts!</p>
        <Link to='/' className='btn'> Criar Primeiro Post </Link>
         </div>) :

      (<div> Tem posts!</div>)}

      {posts && posts.map((post) =>( 
        <h1> {post.title}</h1>
        ))}

    </div>
  )
}

export default Dashboard
