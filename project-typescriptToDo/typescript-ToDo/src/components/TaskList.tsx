

import styles from './TaskList.module.css'

import { iTask } from '../interfaces/Task';


export interface IAppProps {
  taskList:iTask[];
  handleDelete(id:number):void;
  handleEditModal(task:iTask):void;
}

export function TaskList (props: IAppProps) {



  return (
    <>
      {props.taskList.length > 0 ? (props.taskList.map(task => <div className={styles.task}>
        
        <div key={task.id} className={styles.details}>
          <h4>{task.title}</h4>
          <p>Dificuldade: {task.difficulty}</p>
        </div>

        <div  className={styles.actions}>
           <i onClick={() => props.handleEditModal(task)} class="bi bi-pencil"></i>
           <i onClick={() => props.handleDelete(task.id)} class="bi bi-trash3"></i>
        </div>

      </div> ))
      : (<p>Não há tarefas cadastradas</p>)}

    </>
  );
}
