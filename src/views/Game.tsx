import React from "react"
import openSocket from 'socket.io-client';

interface GameProps {
  user: Player;
  serverId: ServerID;
}

interface GameState {
  players: Player[];
  socket: SocketIOClient.Socket;
}

class Game extends React.Component<any, GameState> {
  state: GameState = {
    players: [] as Player[],
    socket: {} as SocketIOClient.Socket
  }

  constructor(props: any) {
    super(props);
    this.keypressHandler = this.keypressHandler.bind(this);
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

  public componentDidMount() {
    const socket = openSocket('http://localhost:3001');

    console.log(socket)

    this.setState({ socket })
    document.addEventListener("keydown", this.keypressHandler)
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.keypressHandler)
  }

  public keypressHandler(event: KeyboardEvent) {
    switch(event.keyCode) {
      // Escape
      case(27): {
        console.log("Pressed Escape")
        this.state.socket.emit("message")
        break;
      }
    }
  }
}

export default Game;
