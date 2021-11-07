import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./style.scss";
import "react-circular-progressbar/dist/styles.css";

const RaitingBar = ({ rate, className, color }) => {
  return (
    <div className={className}>
      <CircularProgressbar
        value={rate}
        text={`${rate}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "black",
          textColor: "white",
          pathColor: color,
          trailColor: "transparent",
        })}
      />
    </div>
  );
};
export default RaitingBar;
