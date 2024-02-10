import { useState } from 'react'
import './App.css'
import styles from './App.module.css'

//componentes
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { Modal } from './components/Modal'


//interfaces
import { iTask } from './interfaces/Task'


function App() {
 
  const [taskList, setTaskList] = useState<iTask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<iTask | null>(null)

  const deleteTask = (id:number) => {

    setTaskList( taskList.filter( task => {return task.id !== id}) )

  }

  const toggleShowModal = (display:boolean) =>{
    const modal = document.querySelector('#modal');

    if(display){
      //show modal
      modal?.classList.remove('hide')

    }
    else{
      //close modal
      modal?.classList.add('hide')

    }

  }

  const handleEdit = (task:iTask):void => {

    toggleShowModal(true)
    setTaskToUpdate(task)

  }

  const updateTask =  (id:number, title:string, difficulty:number) => {

      const updatedTask:iTask = {id, title, difficulty}
      
      const updatedItems = taskList.map(task => { return task.id === updatedTask.id ? updatedTask : task})

      setTaskList(updatedItems)
      toggleShowModal(false)
  }

  return (
    <>

      <Modal 
      children={
      <TaskForm btnText='Editar Tarefa' 
      taskList={taskList} 
      task={taskToUpdate} 
      handleUpdate={updateTask}
      />}/>
      <Header/>

      <main className={styles.main}>

        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' 
          taskList={taskList} 
          setTaskList={setTaskList} />
        </div>

        <div>
          <h2>Suas Tarefas: </h2>
          <TaskList taskList={taskList} 
          handleDelete={deleteTask} 
          handleEditModal={handleEdit}/>

        </div>

      </main>
      
      <Footer/>
     
       
    </>
  )
}

export default App
