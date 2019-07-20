import React from 'react';
import './css/App.css';
import Game from './views/Game';
import Home from './views/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

interface AppState {
  user?: Player;
}

class App extends React.Component<any,AppState> {
  state = {
    user: {} as Player
  }

  render() {
    return (
      <>
        <NavBar/>
        <Router>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/game" component={Game}/>
        </Router>
      </>
    );

  }
}

export default App;
