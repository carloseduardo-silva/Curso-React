import { useState } from 'react'
import './App.css'
import styles from './App.module.css'

//componentes
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {
 

  return (
    <>
      <Header/>

      <main className={styles.main}>

        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm/>
        </div>

        <div>
          <h2>Suas Tarefas: </h2>
          <TaskList/>

        </div>

      </main>
      
      <Footer/>
     
       
    </>
  )
}

export default App
