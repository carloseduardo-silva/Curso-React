import {forwardRef, useRef, useImperativeHandle} from 'react'

const Examples = forwardRef((props, ref) => {

    const localInputRef = useRef()

    useImperativeHandle(ref, () =>{
        return{
            validate: () =>{
                if(localInputRef.current.value.length > 3){
                    localInputRef.current.value = "";
                }
            }
        }
    })

    return (
      <div> 
        <label >
            <p> Insira no maximo 3 caracteres </p>
            <input type="text" ref={localInputRef} />
        </label>

      </div>
    )
  })

export default Examples