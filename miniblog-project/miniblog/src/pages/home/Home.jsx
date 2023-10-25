//css
import styles from "./Home.module.css"
//hooks
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocuments"

import React from 'react'

const Home = () => {

  const [query, setQuery] = useState()
  const {documents:posts, loading} = useFetchDocument('posts')
  
  
    console.log(posts)


  const handleSubmit = (e) =>{

    e.preventDefault()

  }

  return (
    <div className={styles.home}>

        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input value={query} onChange={(e) =>{setQuery(e.target.value)}} type="text" placeholder="Busque por tags" />
          <button className="btn btn-dark"> Pesquisar</button>
        </form>

        <div>
            {loading && (<p> Carregando ...</p>) }
            {posts && posts.map((post) => 
              <h3 key={post.uid}> {post.title} </h3>
            )}

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
