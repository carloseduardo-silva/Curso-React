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

  console.log(words)

  return (<>

  {gamestage == stages[0].name && <StartScreen setGameStage={setGameStage} />}

  {gamestage == stages[1].name && <GameScreen/>}

  {gamestage == stages[2].name && <GameOver/>}
     
    
    

    </>)
}

export default App
