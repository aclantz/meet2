
import { useState } from "react";


const NumberOfEvents = () => {
  // const [NOEValue, setNOEValue] = useState('32');

  return(
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events"
        defaultValue={32}
      ></input>
    </div>
  )
};

export default NumberOfEvents;