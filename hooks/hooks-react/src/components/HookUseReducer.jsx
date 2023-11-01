import React, { useState } from 'react'
import { useReducer } from 'react'

const HookUseReducer = () => {
    //1- UseReducer
    const [number, dispatch] = useReducer((state) =>{
        return Math.random(state)
    })

    //2- UseReducer com switch, state corresponde ao objeto com seus valores, dispatch é a função que aciona o exampleReducer o qual geralmente é regido por um switch que ira executar um determinado bloco de codigo de acordo com o valorX passado no dispatch({type: 'valorX', param}) , param opcional, pode ser acessado no switch atravésd de action.param
    const initialTask = [
      {id:1, text:'Lavar Louça'},
      {id:2, text:'Passar Roupa'},
      {id:3, text:'Lavar o Banheiro'}
    ]

    const taskReducer = (state, action) =>{
      switch(action.type){
        case 'ADD':
          const newTask = {
            id: Math.random(),
            text: taskText,
          }

          setTaskText('')

          return [...state, newTask];

        case 'DELETE':
          return state.filter((task) =>task.id !== action.id)


        default:
          return state;
          

      }
    }

    const[taskText, setTaskText] = useState('')
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTask)
    

    const handleSubmit = (e) =>{

      e.preventDefault()

      dispatchTask({type:'ADD'})

    }

    const removeTask = (id)=>{
      dispatchTask({type: 'DELETE', id})

    }
    

  return (
    <div style={{margin:"3em 0em"}}>
        <h1> UseReducer</h1>

        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar Número</button>

        <form onSubmit={handleSubmit}>
            <label>
              <p>Adicionar Tarefa:</p>
              <input onChange={(e) =>{setTaskText(e.target.value)}} type="text" value={taskText} />
              
              </label>

        </form>
        <h2>Tarefas: </h2>
        {tasks.map((task) =>(
          <li onDoubleClick={() => removeTask(task.id)} key={task.id}> {task.text} </li>
        ))}

    <hr />      
    </div>
  )
}

export default HookUseReducer
