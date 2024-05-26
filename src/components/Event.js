// exercise 4.4, Full-Stack Immersion
import moment from 'moment'; //date time format
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
      <p>{moment(event.start).format('MMMM Do YYYY, h:mm:ss a')}</p> 
      <p>{event.location}</p>
      <button onClick={handleShowDetailsClick} className="details-btn">Show Details</button>
      {showDetails ? <div id="event-details">
        <p>{event.description}</p>
        <button onClick={handleHideDetailsClick} className="details-btn">Hide Details</button>
      </div> : null}
    </li>
  );
};

export default Event;

