import classes from "./Count.module.css";

function Count(props) {
  return (
    <div className={classes.container}>
      <p className={classes.id}>{`Counter ${props.number}`}</p>{" "}
      <p className={classes.count}>{props.count}</p>
    </div>
  );
}

export default Count;
