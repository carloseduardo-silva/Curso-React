
import './App.css'

import { useState, useEffect } from 'react'

import{useFetch} from "./hooks/useFetch"

function App() {

  const url = 'http://localhost:3000/products'

  const [products, setProducts] = useState([])

  const[name, setName] = useState('')
  const[price, setPrice] = useState('')


  //4 - fetch utilizando CUSTOM HOOK
  const {data:items, httpConfig} = useFetch(url)
 



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


 


  

  return (
    <>
      <h1> Lista de Produtos</h1>

      <ul>{items && items.map((product) =>(
        <li key={product.id}> Name: {product.name} <br /> price: {product.price}   </li>
      ))}</ul>


        <div className='add-product'>
          <form onSubmit={handleSubmit}>

            <label> Name <input onChange={(e)=>setName(e.target.value)} type="text" value={name} name='name' /></label>

            <label> Preço <input onChange={(e)=>setPrice(e.target.value)} value={price} name='price' type="number" /></label>

            <input type="submit" value='Criar' />



          </form>
        

        </div>


    </>
  )
}

export default App
