import { Component } from "react";
import "./Destinationstyle.css";
import ooty1 from "../assets/OOTY.jpg";
import ooty2 from "../assets/OOTY2.webp";
import Destination from "./Destination";

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img alt="img" src={this.props.image1} />
            <img alt="img" src={this.props.image2} />
          </div>
        </div>
      </>
    );
  }
}

export default DestinationData;
