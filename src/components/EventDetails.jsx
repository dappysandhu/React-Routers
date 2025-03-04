import {  Link, useParams } from "react-router";

function EventDetails() {
  const { month, year } = useParams();


  return (
    <div>
      <h2>Event Details</h2>
      
      <p>
        {" "}
        <div  >
        <Link to="/events">Select Date</Link><span> to see the event</span>
        </div>
        Year : {year} and month is : {month}{" "}
      </p>
    </div>
  );
}

export default EventDetails;
