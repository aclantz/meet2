import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [NOEValue, setNOEValue] = useState("32");

  const handleUserInput = (event) => {
    const value = event.target.value;
    let errorText;

    if (isNaN(value) || value <= 0) {
      errorText = "Please only use positive numbers.";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setNOEValue(value);
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label className="number-of-events-label">Number of events: </label>
      <input
        id="NOE-textbox"
        type="text"
        className="number-of-events-input"
        value={NOEValue}
        onChange={handleUserInput}></input>
    </div>
  );
};

export default NumberOfEvents;
