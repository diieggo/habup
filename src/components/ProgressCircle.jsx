import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function ProgressCircle() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-blue-900 text-white p-4 mx-4 rounded-xl flex items-center gap-4">
        <div>
          <CircularProgressbar
            className="h-16 w-16"
            value={25}
            text={`${25}%`}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "24px",
              pathColor: "rgba(255, 255, 255)",
              textColor: "#FFF",
              trailColor: "rgb(198, 207, 220, 0.25)",
              backgroundColor: "#FFF",
            })}
          />
        </div>
        <div className="">
          <p className="font-quicksand text-base font-medium">
            Your daily goals almost done! 🔥
          </p>
          <p className="font-quicksand text-sm mt-2 text-[#c6cfdcbf]">
            1 of 4 completed
          </p>
        </div>
      </div>
    </>
  );
}
