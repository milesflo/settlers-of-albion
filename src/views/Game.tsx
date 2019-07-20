import React from "react"

interface GameProps {
  user: Player;
  serverId: ServerID;
}

interface GameState {
  players: Player[];
}

class Game extends React.Component<any, GameState> {
  state: GameState = {
    players: [] as Player[]
  }

  public render() {
    return (
      <>
        <div>
          <h1> Game !</h1>
        </div>
      </>
    )
  }
}

export default Game;
