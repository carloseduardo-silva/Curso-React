import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'


function App() {
  const [count, setCount] = useState(0)

  const [number, setNumber] = useState(2)

  const[Tcolor, setTcolor] = useState('gold')


  return (
    <>
     <h1>CSS COM REACT</h1>

     <MyComponent/>

     <p> JSX do APP.jsx, NÃO É DO COMPONENTE</p>

     <p  className='my-paragraph' > JSX DO COMPONENTE PAI SENDO ESTILIZADO POR COMPONENTE FILHO 'CSS VAZADO' consectetur adipisicing elit. Laudantium quas facilis dicta libero adipisci, rem quasi repudiandae incidunt soluta quae ullam, cupiditate hic sed quo iste illum quisquam quaerat? Magnam!</p>

     <p style={{backgroundColor:'red', color:'white'} } > PARAGRAFO ESTILIZADO POR CSS INLINE.
     Pariatur unde aliquid tenetur totam, deserunt omnis. Voluptate autem numquam laboriosam praesentium, necessitatibus officia et perspiciatis veniam repellendus dolor minima, beatae voluptatem?</p>

      <h3 style={number > 10 ? {color:'green'} : {color:'red'}}> CSS INLINE DINAMICO COM CONDICINAIS DE ACORDO COM O VALOR DE N</h3>

      <button style={{margin:'10PX'}} onClick={() => setNumber(12)} >GREEN </button>
      
      <button onClick={() => setNumber(1)} >RED</button>

      <h2 className={Tcolor == 'gold' ? 'classe2' : 'classe1' }> CSS COM CLASSES DINAMICAS </h2>

      <button style={{margin:'10PX'}} onClick={()=> setTcolor('banana')}> blue title</button>
      <button onClick={()=> setTcolor('gold')}> golden title</button>

      <h3> TESTANDO CSS MODULES, O QUAL NOS GARANTE UM SCOPO PARA O CSS DE CADA COMPONENTE.</h3>

      <Title/>

      <h1 className='titulo'> CLASS TITULO NAO PODE SER ACESSADA POIS FOI CRIADA ATRAVES DE UM CSS MODULES (SCOPADO PARA COMPONENTES QUE O IMPORTAM(IMPORT STYLES FROM 'COMPONENT.MODULE.CSS'))</h1>


    </>
  )
}

export default App
