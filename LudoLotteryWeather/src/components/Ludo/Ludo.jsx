// import React, { useState } from 'react'

// const Ludo = () => {

//   const [coins,setCoins] = useState([{color:"red",moves:0},{color:"yellow",moves:0},{color:"blue",moves:0},{color:"green",moves:0}]);

//   const handleButton = (color) => {
//     if(color == "red"){
//       setCoins((prevCoins)=>{...prevCoins,prevCoins[0].moves++});
//     }
//     else if(color == "yellow"){
//       setCoins((prevCoins)=>{...prevCoins,prevCoins[1].moves++});
//     }
//     else if(color == "blue"){
//       setCoins((prevCoins)=>{...prevCoins,prevCoins[2].moves++});
//     }
//     else if(color == "green"){
//       setCoins((prevCoins)=>{...prevCoins,prevCoins[3].moves++});
//     }
//   }

//   return (
//     <>
//       <h1>Ludo</h1>
//       {coins.map((coin,index)=><Coin key={index} coin={coin} coins={coins}/>)}
//     </>
//   )
// }

// export default Ludo;

// import React, { useState } from "react";
import { useState } from "react";
import Coin from "./Coin";
import { genPoint } from "../helper";

const Ludo = () => {
  const [coins, setCoins] = useState([
    { color: "red", moves: 0, point: 0 },
    { color: "yellow", moves: 0, point: 0 },
    { color: "blue", moves: 0, point: 0 },
    { color: "green", moves: 0, ponit: 0 },
  ]);

  const handleButton = (color) => {
    setCoins((prevCoins) =>
      prevCoins.map((coin) =>
        coin.color === color
          ? { ...coin, moves: coin.moves + 1, point: genPoint() }
          : coin
      )
    );
  };

  return (
    <>
      <h1>
        <span style={{ color: "red" }}>L</span>
        <span style={{ color: "yellow" }}>U</span>
        <span style={{ color: "blue" }}>D</span>
        <span style={{ color: "green" }}>O</span>
      </h1>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{ display: "flex", flexWrap: "row" }}>
          {coins.map((coin, index) => (
            <Coin key={index} coin={coin} handleButton={handleButton} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ludo;
