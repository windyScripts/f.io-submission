import classes from "./Count.module.css";

function Count(props) {
  return (
    <div className="container">
      <p className="id">{`Counter ${props.number}`}</p>{" "}
      <p className="count">{props.count}</p>
    </div>
  );
}

export default Count;
