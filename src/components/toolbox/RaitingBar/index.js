import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./style.scss";
import "react-circular-progressbar/dist/styles.css";

const RaitingBar = ({ vote_average, className }) => {
  return (
    <div className={className}>
      <CircularProgressbar
        value={raiting(vote_average)}
        text={`${raiting(vote_average)}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "black",
          textColor: "white",
          pathColor: RatingColor(parseInt(raiting(vote_average))),
          trailColor: "transparent",
        })}
      />
    </div>
  );
};
export default RaitingBar;

function RatingColor(param) {
  if (param >= 75 && param <= 100) return "green";
  else if (param >= 50 && param < 75) return "yellow";
  else if (param >= 0 && param < 50) return "yellow";
  else return "black";
}
function raiting(rate) {
  //10 üzerinden rate
  return rate * 10;
}
