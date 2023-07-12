import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.count);
  const countDecreaseHandler = (event) => {
    setCount((previousCount) => {
      return previousCount > 0 ? previousCount - 1 : 0;
    });
    const id = event.target.id.slice(7);
    props.onCountChange(id,count);
  };
  const countIncreaseHandler = (event) => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
    const id = event.target.id.slice(10);
props.onCountChange(id,count);
  };
  return (
    <div>
      <p>{`Counter ${props.number}`}</p>
      <div>
        <button id={`reduce_${props.id}`} onClick={countDecreaseHandler}>-</button>
        <p id={`value${props.id}`}>{props.count}</p>
        <button id={`increase_${props.id}`} onClick={countIncreaseHandler}>+</button>
      </div>
    </div>
  );
}

export default Counter;
