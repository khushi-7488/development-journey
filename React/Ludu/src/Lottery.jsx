import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum, celebrate } from "./helperlottry";


export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;
  let buyTicket = () => {
    setTicket(genTicket(3));
  }

  function checkWinner(isWinning) {
    if (isWinning) {
        celebrate();
    } 
}


  return (
    <div>
      <h1>Lottery</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congrats, you won lottery!"}</h3>
      <h3>{isWinning && checkWinner(isWinning)} </h3>
    </div>
  );
}
