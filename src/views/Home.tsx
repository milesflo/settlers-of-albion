import React from "react"
import VillageSpash from "../images/anglo-village.jpg"

const Home: React.FC = () => (
  <>
    <div style={{
      minHeight: "calc(100vh - 63px)",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1>Settlers of Albion</h1>
      <p style={{
        maxWidth: "80vw"
      }}>A light-weight, browser-first boardgame inspired by <i>Settlers of Catan</i>.</p>
    </div>
    <div style={{
      backgroundImage: `url(${VillageSpash})`,
      minHeight: "300px",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
    </div>
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1>Team</h1>
      <p>Miles Florence &amp; Brenden Satake</p>
    </div>
  </>
)

export default Home;
