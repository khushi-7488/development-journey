import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum, celebrate } from "./helperlottry";
import Ticket from "./Ticket";


export default function Lottery({n=3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  }
  

  function checkWinner(isWinning) {
    if (isWinning) {
        celebrate();
    } 
}


  return (
    <div>
      <h1>Lottery</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congrats, you won lottery!"}</h3>
      <h3>{isWinning && checkWinner(isWinning)} </h3>
    </div>
  );
}
