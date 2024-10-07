import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconCheck, IconPlus } from "../../assets/icons";

export function HabitItem({
  id,
  title,
  type,
  progress,
  goal,
  icon,
  completed,
}) {
  return (
    <>
      <div className="border border-gray-100 bg-white rounded-2xl">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-4">
            <div className="rounded-full leading-none text-lg">
              <CircularProgressbar
                className="h-12 w-12"
                value={(progress / goal) * 100}
                text={icon}
                styles={buildStyles({
                  strokeLinecap: "round",
                  textSize: "32px",
                  pathColor: "#007FFF",
                  textColor: "#FFF",
                  trailColor: "rgb(198, 207, 220, 0.25)",
                  backgroundColor: "#FFF",
                })}
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">{title}</h3>
              <p className="text-sm font-light text-gray-400">
                {progress}/{goal} {type}
              </p>
            </div>
          </div>
          <button
            size="icon"
            className={`border border-gray-100 p-2 rounded-lg ${
              completed ? "text-green-600" : "text-gray-700"
            }`}
          >
            {completed ? <IconCheck /> : <IconPlus />}
          </button>
        </div>
      </div>
    </>
  );
}
