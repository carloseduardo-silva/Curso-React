import { ReactNode} from "react";
import styles from "./Modal.module.css"

export interface IAppProps {
  children:ReactNode;
  
}

export function Modal (props: IAppProps) {

  

  const closeModal = (e:React.MouseEvent):void =>{
   const modal =  document.querySelector('#modal')
   modal!.classList.add('hide')

  }

  return (
    <div className="hide" id="modal">
      <div onClick={closeModal} className={styles.fade}></div>

      <div className={styles.modal}>
        <h2>Editar Tarefa</h2>
        {props.children}
      </div>
    </div>
  );
}
