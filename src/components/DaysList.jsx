import React from "react";
import { useEffect, useRef, useState } from "react";

export function DaysList() {
  const [daysToShow, setDaysToShow] = useState([]);
  const todayRef = useRef(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const dateNow = new Date(Date.now());
    var yearNow = dateNow.getFullYear();
    var monthNow = dateNow.getMonth();
    var dayNow = dateNow.getDate();

    var daysOfMonth = new Date(yearNow, monthNow + 1, 0).getDate();

    const range = 7;
    var d = dayNow - range;
    var auxMonth = monthNow;

    let updatedDays = [];

    for (let i = 0; i <= range * 2; i++) {
      if (d <= 0) {
        auxMonth = auxMonth - 1;
        daysOfMonth = new Date(yearNow, auxMonth + 1, 0).getDate();
        d = new Date(yearNow, auxMonth + 1, 0).getDate() + d;
      } else if (d > daysOfMonth) {
        auxMonth = auxMonth + 1;
        d = 1;
      }

      let thisDate = new Date(yearNow, auxMonth, d).toDateString();
      let index = new Date(yearNow, auxMonth, d).getDay();
      let newDayToAdd = {
        id: thisDate.replaceAll(" ", ""),
        dayNum: d,
        dayWeek: daysOfWeek[index],
        monthIndex: auxMonth,
        month: monthsOfYear[auxMonth],
        year: yearNow,
        today: thisDate === dateNow.toDateString(),
      };

      updatedDays.push(newDayToAdd);
      d++;
    }

    setDaysToShow(updatedDays);
  }, []);

  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [daysToShow]);

  return (
    <div className="pb-4 overflow-x-scroll snap-x snap-mandatory no-scrollbar">
      <div className="flex">
        {daysToShow.map((day) => (
          <div
            key={day.id}
            className="snap-start pl-4 last:pr-4"
            ref={day.today ? todayRef : null}
          >
            <div
              className={`text-center bg-white border flex flex-col place-content-center h-16 w-12 rounded-xl ${
                day.today ? "border-2 border-primary" : ""
              }`}
            >
              <div
                className={`text-lg font-semibold ${
                  day.today ? "text-primary" : ""
                }`}
              >
                {day.dayNum}
              </div>
              <div className="text-xs font-medium text-gray-400 uppercase">
                {day.dayWeek}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
