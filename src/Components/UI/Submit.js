import { useState } from "react";

import Count from "./Count";
import classes from "./Submit.module.css"

function Submit(props) {
  const [counters, setCounters] = useState([]);
  const submitHandler = () => {
    setCounters(props.counters);
  };
  return (
    <section className={classes.section}>
      <button className={classes.button} type="button" onClick={submitHandler}>Submit</button>
      {counters.map((e) => (
        <Count key={e.id} id={e.id} count={e.count} number={e.number} />
      ))}
    </section>
  );
}

export default Submit;
