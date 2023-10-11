import "./Destinationstyle.css";
import ooty1 from "../assets/OOTY.jpg";
import ooty2 from "../assets/OOTY2.webp";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see alot,within a time frame.</p>
      <DestinationData
        className="first-dest "
        heading="Ooty,Tamilnadu"
        text="Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
       a hill station in Tamil Nadu which serves as a top-rated tourist
       destination. Once regarded as the summer headquarters of the East
       India Company, the Queen of the hills is a picturesque
       getaway.Dotted with tea gardens, serene waterfalls, winding country
       lanes, and charming colonial architecture, Ooty is the perfect
       respite everyone.."
        image1={ooty1}
        image2={ooty2}
      />
      <DestinationData
        className="first-dest-reverse"
        heading="Manali,Himachal Pradesh"
        text="Over the last few years, Manali has evolved into a place loved by young people looking for more extended stays. With ambient cafes, 
       good wifi availability, small eateries, and convenient shops, Old Manali is among the favorite neighborhood for such people.
        In addition, many homestays and hostels offer dorm beds for cheap for longer durations."
        image1="https://www.holidify.com/images/cmsuploads/compressed/Rohtang_pass_snowy_valley01_20190320140229.jpg"
        image2="https://www.holidify.com/images/bgImages/MANALI.jpg"
      />
      <DestinationData
        className="first-dest "
        heading="Andaman and Nicobar Islands"
        text="The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites.
        Indigenous Andaman Islanders inhabit the more remote islands, many of which are off limits to visitors."
        image1="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/shutterstock_316235984.jpg"
        image2="https://www.holidify.com/images/cmsuploads/compressed/Andaman_Islands_india_20190205183251jpg"
      />
      <DestinationData
        className="first-dest-reverse"
        heading="Pondicherry"
        text="Pondicherry, officially known as Puducherry, and commonly referred to as just Pondy, is one of the seven Union Territories of India 
       which is bounded by the southern state of Tamil Nadu. This former French colony is a perfect amalgamation of the traditional
        Indian sensibilities and French architecture, making it a dreamy escape that offers the best of both worlds."
        image1="https://www.holidify.com/images/cmsuploads/compressed/10153432896_dda6dc2f73_b_20190625121219.jpg"
        image2="https://img.onmanorama.com/content/dam/mm/en/travel/outside-kerala/images/2022/12/24/pondicherry-beach.jpg"
      />
    </div>
  );
};
export default Destination;
