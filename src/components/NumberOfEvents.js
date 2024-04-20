import { useState } from "react";


const NumberOfEvents = ({ setCurrentNOE }) => {
  const [NOEValue, setNOEValue] = useState("32");

  const handleUserInput = (event) => {
    const value = event.target.value;
    setNOEValue(value);
    setCurrentNOE(value);
  }

  return(
    <div id="number-of-events">
      <label className="number-of-events-label">Number of events: </label>
      <input
        id="NOE-textbox"
        type="text"
        className="number-of-events-input"
        value={NOEValue}
        onChange={handleUserInput}
      ></input>
    </div>
  )
};

export default NumberOfEvents;