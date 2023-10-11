import Trip from "./Trip";
import "./Tripstyle.css";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="content">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default TripData;
