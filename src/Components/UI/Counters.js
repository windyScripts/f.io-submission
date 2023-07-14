import Counter from "../Counter/Counter";
import classes from './Counters.module.css'

function Counters(props) {
  const addCounterHandler = (event) => {
    event.preventDefault();
    props.onSetCounters((previousCounters) => {
      return [
        ...previousCounters,
        {
          id: crypto.randomUUID(),
          count: 0,
          number: previousCounters.length + 1,
        },
      ];
    }
    );
  };
  return (
    <section className={classes.section}>
      {props.counters.map((e) => (
        <Counter
          key={e.id}
          id={e.id}
          count={e.count}
          number={e.number}
          onCountChange={props.onCountChange}
        />
      ))}
      <button className={classes.button} type="button" onClick={addCounterHandler}>
        Add
      </button>
    </section>
  );
}

export default Counters;
