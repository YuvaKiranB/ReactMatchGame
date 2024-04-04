import './index.css'

const GetGameOverCard = props => {
  const {totalScore, clickedPlayAgain} = props

  const clickedButton2 = () => {
    clickedPlayAgain()
  }

  return (
    <div className="cardContainer">
      <div className="gameOverCard">
        <img
          className="image5"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="p3">YOUR SCORE</p>
        <p className="p4">{totalScore}</p>
        <button className="button3" type="button" onClick={clickedButton2}>
          <img
            className="image6"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="p5">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GetGameOverCard
