import { useState, useRef } from 'react'
import './GameScreen.css'

const GameScreen = ({verifyLetter, pickedWord, pickedCategory, letters, wrongLetters, guessesLetters, tries, score,}) => {
  
const [letter, setLetter] = useState('')


const letterInputRef = useRef('')

const handleSubmit = (e) =>{
    e.preventDefault()

    if(tries > 1){
      if(!letter || !isNaN(letter)){
        window.alert('Por favor, digite uma letra para jogar!')
  
      }else{
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus()
      }
    }

    else{
      verifyLetter('end')
    }

   
   
}

  
  return (
    <div>
        <p> <span className='bold'>Pontuação:</span> {score}</p>

        <h1> Advinhe a Palavra</h1>
        <h3> Dica sobre a palavra: <span className='gold'> {pickedCategory} </span> </h3>
        <p>Você ainda tem {tries} tentativa(s). </p>

        <div className='gold-border'>

          <div className='card-box'>
            {letters.map((letter, i) => (
              guessesLetters.includes(letter) ? 
              ( <input key={i}  className='card' type="text" value={letter} />) 
              :
              ( <input key={i}  className='card' type="text" />)


            ))}


          </div>
        </div>

        <p>Tente advinhar uma letra da palavra:</p>


      <form onSubmit={handleSubmit} className='input-box'>

      <input value={letter} onChange={(e) => {setLetter(e.target.value)}} ref={letterInputRef} type="text" />

      <button>JOGAR!</button>
    

      </form>

      <p> Letras já utilizadas:
        {wrongLetters.map((letter, i) =>(
          <span key={i}> {letter}, </span>
        ))}
      </p>
      
    </div>
  )
}

export default GameScreen
