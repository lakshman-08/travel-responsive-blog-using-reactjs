import TripData from "./TripData";
import "./Tripstyle.css";
import coorg from "../assets/coorg.jpeg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={coorg}
          heading="Trip in Coorg"
          text="It was Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station.
        It is popular for its beautiful green hills and the streams cutting right through them.
         It also stands as a popular destination because of its culture and people. 
       "
        />
        <TripData
          image="https://www.holidify.com/images/foreign/compressed/overview_1512.jpg"
          heading="Trip in Maldives"
          text="The Maldives is an archipelago of 1,192 coral islands grouped into natural atolls. However, only 200 islands are inhabited.
        Each resort generally occupies an entire atoll.Imagine having a room on a pier jutting out from the shore with a glass floor under 
        which manta rays and reef sharks can be seen swimming."
        />
        <TripData
          image="https://www.holidify.com/images/compressed/686.jpg?v=1.1"
          heading="Trip in Shimla"
          text="Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners.
        Situated at the height of 2200m, it was the summer capital of British India.The hill station still retains its old-world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and the ridge lined up with multiple shops, cafes and restaurants."
        />
      </div>
    </div>
  );
}

export default Trip;
