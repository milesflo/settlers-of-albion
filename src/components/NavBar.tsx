import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  user?: Player;
}

interface NavBarState {
  overflow: boolean;
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  state = {
    overflow: false
  }
  constructor(props: NavBarProps) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  public render() {
    return (
      <header className="App-header">
        <ul style={{
          justifyContent: "left"
        }}>
          <li><Link to="/">Settlers of Albion</Link></li>
        </ul>
        <ul style={{
          justifyContent: "right",
          display: "flex"
        }}>
          <li><Link to="/game">1</Link></li>
          <li><button onClick={this.toggleMenu}>☰</button></li>
        </ul>
      </header>
    )
  }

  public toggleMenu() {
    this.setState({overflow: !this.state.overflow})
  }
}

export default NavBar;
