import React, { useState } from "react";
import Ticket from "./Ticket";
import { generateArr, Sum } from "../helper";

const Lottery = () => {
  // let tickets = [{id : 1,num:5},{id : 2,num:6},{id : 3,num:9}]

  const [tickets, setTickets] = useState(generateArr(3));
  const [isWin, setWin] = useState(false);

  const handleTickets = () => {
    const newTickets = generateArr(3);
    setTickets(newTickets);
    const win = Sum(newTickets) == 15;
    setWin(win);
  };

  return (
    <>
      <h1>Lottery</h1>
      <Ticket tickets={tickets} handleTickets={handleTickets} isWin={isWin} />
      {isWin && (
        <h3 style={{ color: "#FF1493" }}>
          Congratulations, You have won the Lottery game
        </h3>
      )}
    </>
  );
};

export default Lottery;
