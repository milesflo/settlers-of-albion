import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <ul>
          <li><Link to="/">Settlers of Albion</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
