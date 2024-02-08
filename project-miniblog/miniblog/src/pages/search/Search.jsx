import React from 'react'
import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'


//components
import { Link } from 'react-router-dom'
import { PostDetail } from '../../components/PostDetail'




const Search = () => {

  const query = useQuery();
  const search = query.get("q")
  

  const { documents:posts } = useFetchDocuments('posts', search)
  console.log(posts)

  return (
    <div className={styles.query_container}>
      <h2> Aqui estão os resultados da sua busca:</h2>
      
      <div>

        {posts && posts.length === 0 && (
          <div className={styles.noposts_query}> 
          <p> Não foram encontrados posts a partir da sua busca!</p>
          <Link to='/' className='btn btn-dark'>Voltar</Link>
          </div>
        )}

      {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}

      </div>

    </div>
  )
}

export default Search
