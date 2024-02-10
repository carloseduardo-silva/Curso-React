import * as React from 'react';
import { useState,  FormEvent, useEffect } from 'react';

import styles from './TaskForm.module.css'

import { iTask } from '../interfaces/Task';


export interface IAppProps {
  btnText:string;
  taskList:iTask[];
  setTaskList?:React.Dispatch<React.SetStateAction<iTask[]>>
  task?:iTask | null;
  handleUpdate?(id:number, title:string, difficulty:number):void;
}

export function TaskForm (props: IAppProps) {

  const [title, setTitle] = useState<string>("")
  const [id, setid] = useState<number>(1)
  const [difficulty, setDifficulty] = useState<number>(0)


  //fill the modal with the datas 
  useEffect(() => {
    if(props.task){
      setTitle(props.task?.title)
      setDifficulty(props.task?.difficulty)
      setid(props.task?.id)
    }

  }, [props.task])
  

  const addTaskHandle = (e: FormEvent <HTMLFormElement>) =>{

    e.preventDefault()

    if(props.handleUpdate){
      props.handleUpdate(id, title, difficulty)

    } else{
      setid(id+1)

      const taskInfos: iTask = {title, difficulty, id}
  
      props.setTaskList!([...props.taskList, taskInfos])
  
      setTitle('')
      setDifficulty(0)
    }

    
    
  }


  return (
    <form onSubmit={addTaskHandle} className={styles.form}>

      <div className={styles.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name='title' placeholder='Titulo da Tarefa'  />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input value={difficulty}  onChange={(e) => setDifficulty(parseInt(e.target.value))}  type="number" name='difficulty' placeholder='Dificuldade da tarefa' />
      </div>

      <input type="submit" value={props.btnText} />
      
    </form>
  );
}
