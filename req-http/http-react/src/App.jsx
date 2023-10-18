
import './App.css'

import { useState, useEffect } from 'react'

import{useFetch} from "./hooks/useFetch"

function App() {

  const url = 'http://localhost:3000/products'

  const [products, setProducts] = useState([])

  const[name, setName] = useState('')
  const[price, setPrice] = useState('')
  



  //4 - fetch utilizando CUSTOM HOOK
  const {data:items, httpConfig, loading, error} = useFetch(url)
 
  /* 1. throwing back the datas
    useEffect(() =>{
    async function fetchData() {

      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
     
    }

    fetchData()

  }, []) */


  // 2. enviando dados
    const handleSubmit = async (e) => {
    e.preventDefault()

    const product ={
      name,
      price,
    }
    httpConfig(product, 'POST')
    /*const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })


    
  // 3. carregamento dinamico


    const addedProducts = await res.json()

    setProducts((prevproducts) => [...prevproducts, addedProducts]) */

    setPrice("")
    setName("")
    
  } 

  const handleExclude = (e) =>{
    var idLi = e.target.closest('li').id

    httpConfig(idLi, 'DELETE')
  }

  return (
    <>
      <h1> Lista de Produtos</h1>

      {loading && <p> Carregando Dados ... </p>}
      {error && <p> {error} </p>}

      {!error && <ul>{items && items.map((product) =>
      (
        <li id={product.id} key={product.id}> {product.name} - R${product.price}   <button onClick={handleExclude} className='exclude-btn'>Excluir</button>  </li> 
      
      ))}</ul>
 }
      

        <div className='add-product'>
          <form onSubmit={handleSubmit}>

            <label> Name <input onChange={(e)=>setName(e.target.value)} type="text" value={name} name='name' /></label>

            <label> Preço <input onChange={(e)=>setPrice(e.target.value)} value={price} name='price' type="number" /></label>

            {!loading && <input type="submit" value='Criar' />}
            {loading && <input type="submit" disabled value='Aguarde' />}
            



          </form>
        

        </div>


    </>
  )
}

export default App
