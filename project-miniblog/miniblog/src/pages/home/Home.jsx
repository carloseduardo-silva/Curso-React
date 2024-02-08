//css
import styles from "./Home.module.css"
//hooks
import { useState } from "react"
import { useNavigate, Link, Navigate } from "react-router-dom"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//componentes
import {PostDetail} from "../../components/PostDetail"

import React from 'react'

const Home = () => {

  const [query, setQuery] = useState("")
  const {documents:posts, loading} = useFetchDocuments('posts')
  const Navigate = useNavigate()
  
   
  const handleSubmit = (e) =>{

    e.preventDefault()

    if(query){
      return Navigate(`/search?q=${query}`)
    }


  }

  return (
    <div className={styles.home}>

        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input required value={query} onChange={(e) =>{setQuery(e.target.value)}} type="text" placeholder="Busque por tags" />
          <button className="btn btn-dark"> Pesquisar</button>
        </form>

        <div className={styles.posts_container}>
            {loading && (<p> Carregando ...</p>) }
            {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}

            { posts && posts.length === 0 && (
              <div className={styles.noposts}>
                <p> Não foram encontrados posts.</p>
                <Link to={'/post/createPost'} className="btn"> Criar primeiro post</Link>
              </div>
            )

            }


        </div>
      
    </div>
  )
}

export default Home
