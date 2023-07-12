import { useState } from "react";

import Count from "./Count";

function Submit(props){
    const [counters, setCounters] = useState([]);
    const submitHandler = () => {
        setCounters(props.counters);
    }
    return (
        <>
        <button onClick={submitHandler}>submit</button>
        {counters.map(e => <Count key={e.id} id={e.id} count={e.count} number={e.number} />)}
        </>
    )
}

export default Submit;