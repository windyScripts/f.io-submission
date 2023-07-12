import { useState } from "react";

import Counters from "./Components/UI/Counters";
import Submit from "./Components/UI/Submit";

import "./App.module.css";

const DUMMY_COUNTERS = [
  { number: 1, id: crypto.randomUUID(), count: 0 },
  { number: 2, id: crypto.randomUUID(), count: 0 },
  { number: 3, id: crypto.randomUUID(), count: 0 },
];

function App() {
  const [counters, setCounters] = useState(DUMMY_COUNTERS);
  const countChangeHandler = (id, count) => {
    setCounters((previousCounters) => {
      const changedEntry = previousCounters.filter((e) => e.id === id);
      changedEntry.count = count;
      return { ...previousCounters, changedEntry };
    });
  };

  return (
    <>
      <Counters
        counters={counters}
        onSetCounters={setCounters}
        onCountChange={countChangeHandler}
      />
      <Submit counters={counters} />
    </>
  );
}

export default App;
