import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  user?: Player;
}

class NavBar extends React.Component<NavBarProps> {
  public render() {
    return (
      <header className="App-header">
        <ul style={{
          justifyContent: "left"
        }}>
          <li><Link to="/">Settlers of Albion</Link></li>
        </ul>
        <ul style={{
          justifyContent: "right"
        }}>
          <li><Link to="/game">1</Link></li>
          <li><Link to="/">2</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
