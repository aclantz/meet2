// exercise 4.4, Full-Stack Immersion

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetailsClick = () => {
    setShowDetails(true);
  };
  const handleHideDetailsClick = () => {
    setShowDetails(false);
  }

  return (
    <li className="event">
      <p><b>{event.summary}</b></p>
      <p>{event.start.dateTime}</p>
      <p>{event.location}</p>
      <button onClick={handleShowDetailsClick} className="details-btn">Show Details</button>
      {showDetails ? <div id="event-details">
        <button onClick={handleHideDetailsClick} className="details-btn">Hide Details</button>
      </div> : null}
    </li>
  );
};

export default Event;
