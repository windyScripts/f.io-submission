import classes from './Counter.module.css'

function Counter(props) {
  const countDecreaseHandler = (event) => {
    const id = event.target.id.slice(7);
    const newCount = props.count>0? props.count -1: 0;
    props.onCountChange(id, newCount);
  };
  const countIncreaseHandler = (event) => {
    const id = event.target.id.slice(9);
    props.onCountChange(id, props.count + 1);
  };
  return (
    <div className={classes.counterMain}>
      <p>{`Counter ${props.number}`}</p>
      <div className={classes.counterValue}>
        <button className={classes.buttonLeft+" "+classes.button} id={`reduce_${props.id}`} onClick={countDecreaseHandler}>-</button>
        <p className={classes.value} id={`value${props.id}`}>{props.count}</p>
        <button className={classes.buttonRight+" "+classes.button} id={`increase_${props.id}`} onClick={countIncreaseHandler}>+</button>
      </div>
    </div>
  );
}

export default Counter;
