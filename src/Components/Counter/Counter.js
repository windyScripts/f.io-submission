import { useState } from "react";

import classes from './Counter.module.css'

function Counter(props) {
  const [count, setCount] = useState(props.count);
  const countDecreaseHandler = (event) => {
    setCount((previousCount) => {
      return previousCount > 0 ? previousCount - 1 : 0;
    });
    const id = event.target.id.slice(7);
    props.onCountChange(id, count - 1);
  };
  const countIncreaseHandler = (event) => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
    const id = event.target.id.slice(9);
    props.onCountChange(id,count + 1);
  };
  return (
    <div className={classes.counterMain}>
      <p>{`Counter ${props.number}`}</p>
      <div className={classes.counterValue}>
        <button id={`reduce_${props.id}`} onClick={countDecreaseHandler}>-</button>
        <p id={`value${props.id}`}>{count}</p>
        <button id={`increase_${props.id}`} onClick={countIncreaseHandler}>+</button>
      </div>
    </div>
  );
}

export default Counter;
