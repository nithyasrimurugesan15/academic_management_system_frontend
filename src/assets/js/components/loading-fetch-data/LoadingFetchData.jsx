import React from "react";
import "./LoadingFetchData.css";
import { Player } from "@lottiefiles/react-lottie-player";
function LoadingFetchData() {
  return (
    <React.Fragment>
      <div className="Loding-feachData">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={require("../../../img/Players/Loading.json")}
          className="player"
        />
        <span>Loading</span>
      </div>
    </React.Fragment>
  );
}
export default LoadingFetchData;
