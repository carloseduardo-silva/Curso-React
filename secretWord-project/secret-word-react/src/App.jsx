//REACT
import { useState, useEffect, useCallback } from 'react'

//CSS
import './App.css'

//DATA
import {wordsList} from './data/words'

//COMPONENTS
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import GameOver from './components/GameOver'

const stages = [
  {id:1 , name:'start'},
  {id:2 , name:'game'},
  {id:3 , name:'end'}
];






function App() {
  const [count, setCount] = useState(0)

  const [gamestage, setGameStage] = useState(stages[0].name)

  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])


  const[score, setScore] = useState(0)
  const[tries, setTries] = useState(3)
  const[guessesLetters, setGuessesLetters] = useState([])
  const[wrongLetters, setWrongLetters] = useState([])

 

  const randomCategoryandWord = useCallback(() =>{

    const categories = Object.keys(wordsList)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const wordList = words[category]

    const word = wordList[Math.floor(Math.random() * Object.keys(wordList).length)]


    return [category, word]
  },[words])

  const resetStates = () =>{
  
    setGuessesLetters([])
    setWrongLetters([])
    setScore(0)
    setTries(3)


  }


  const startScreen = () =>{

    resetStates()
    setGameStage(stages[0].name)
  
  }


 
  
  const startGame = useCallback(() =>{
    //clear all letters when games restart
    clearLettersStates()

  
    //pick a random category + word
    const [category, word]= randomCategoryandWord()
    console.log(category, word)
   

    //create an array of letters from word
    var wordLetters = word.split('')
    wordLetters = wordLetters.map((i) => i.toLowerCase())
    console.log(wordLetters)

    //fill states

    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordLetters)
  


    //starts the game page
    
    setGameStage(stages[1].name)
    
  }, [randomCategoryandWord])

  const clearLettersStates = () =>{
    console.log('limpou')
    setGuessesLetters([])
    setWrongLetters([])
    console.log(guessesLetters)
  
  }


  const verifyLetter = (letter) =>{
    
    const normalizedLetter = letter.toLowerCase()

    //case the input has a Letter that have already played.
    if(guessesLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter) ){
      window.alert('Esta letra ja foi utilizada!')
      return
    }
    //case the input has a right letter
    else if(letters.includes(normalizedLetter)){
      setGuessesLetters((actualGuessLetters) =>  [
        ...actualGuessLetters,
        normalizedLetter
      ])
      
      
      
} 
//case of the user passed away the 3 tries
    else if(letter ==='end'){
      setGameStage(stages[2].name)

    }
    
    //case the input has a wrong letter
    else{
      setTries(parseInt(tries)-1)
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

    }

  
  }

  

  useEffect( () =>{

    const uniqueLetters = [... new Set(letters)]

    //win condition

    if(uniqueLetters.length === guessesLetters.length){

      // add score 
      console.log(guessesLetters)
      setScore((actualScore) => actualScore += 100)

      //reset
      
      startGame()

    }

}, [guessesLetters, letters, startGame])


 

  
  return (<>

  {gamestage == stages[0].name && <StartScreen startGame={startGame} />}

  {gamestage == stages[1].name && <GameScreen verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessesLetters={guessesLetters} wrongLetters={wrongLetters} tries={tries} score={score} reset={clearLettersStates}  />}

  {gamestage == stages[2].name && <GameOver startScreen={startScreen} score={score}    />}
     
    
    

    </>)
}

export default App
