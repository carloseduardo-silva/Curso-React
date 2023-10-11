import './StartScreen.css'

const StartScreen = ({setGameStage}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p> Clique no botão abaixo para começar a jogar!</p>
        <button onClick={ () => setGameStage('game')} >COMEÇAR JOGO</button>
        
      
    </div>
  )
}

export default StartScreen
