import "./GameOver.css"

const GameOver = ({startScreen, score}) => {
  return (
    <div className="gameover">

      <h2> Fim de jogo!</h2>

      <p> A sua pontuação foi: <span className="bold">{score}</span>  </p>

      <button onClick={startScreen}>REINICIAR</button>
      
    </div>
  )
}

export default GameOver
