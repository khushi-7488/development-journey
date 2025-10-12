import { useState } from "react";

export default function Counter() {
  let [count, setCont] = useState(0);
  function incCount() {
    setCont(count + 1);
    console.log(count)
  }

  return (
    <div>
      <h3>count = {count}</h3>
      <button onClick={incCount}> Increase Count</button>
    </div>
  );
}
