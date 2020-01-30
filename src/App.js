import React from 'react';
// import MatchJ from "./matchboxbrasil"
import SingleCard from "./Components/Card"

function App() {
    // const test = MatchJ.data.map( (datas)=> {
    //   console.log(datas)
    // })
    const i = require("./Logo/logo_matchbox_amarelo.png")
  return (
    <div className="app">
      <div className="title-logo">
        <img src={i}/>
        <h1>ranking</h1>
      </div>
      <SingleCard />
    </div>
  );
}

export default App;
