import "./App.css";
import Ludo from "./Ludo";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import TicketNum from "./TIcketNum";
import { sum } from "./helperlottry";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) == 15;
  };
  return (
    <>
      <Lottery n={3}  winCondition={winCondition}/>
    </>
  );
}

export default App;
