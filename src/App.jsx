import { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  IconCheck,
  IconHome,
  IconPlus,
  IconSun,
  IconTrack,
  IconUser,
} from "./assets/icons";

function App() {
  const [daysToShow, setDaysToShow] = useState([]);
  const todayRef = useRef(null);

  const habits = [
    {
      icon: "💧",
      name: "Drink the water",
      progress: 500,
      goal: 2000,
      type: "ML",
      completed: false,
    },
    {
      icon: "🚶‍♂️",
      name: "Walk",
      progress: 500,
      goal: 2000,
      type: "STEPS",
      completed: false,
    },
    {
      icon: "🌿",
      name: "Water Plants",
      progress: 0,
      goal: 1,
      type: "TIMES",
      completed: false,
    },
    {
      icon: "🧘‍♂️",
      name: "Meditate",
      progress: 1,
      goal: 1,
      type: "TIMES",
      completed: true,
    },
  ];

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
    <>
      <div className="">
        <div className="">
          <div className="">
            <div className="mx-auto max-w-4xl px-4 py-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="font-quicksand text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-600">
                  Habup
                </h1>
                <div className="bg-blue-200 h-8 w-8 flex place-content-center rounded-full">
                  <p className="text-xl leading-normal">🎱</p>
                </div>
              </div>
              <div>
                <p className="font-quicksand text-lg md:text-xl font-semibold text-gray-700">
                  Hi, Diego 👋
                </p>
                <p className="font-quicksand font-medium text-sm md:text-base text-gray-500">
                  Let's make habits together!
                </p>
              </div>
            </div>

            <div className="bg-[#F6F9FF] pt-4 pb-20 border-t border-t-gray-100 md:pb-10">
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

              <div className="habits mt-8 px-4 pb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Habits</h2>
                </div>
                <div className="flex flex-col gap-2">
                  {habits.map((habit, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 bg-white rounded-2xl"
                    >
                      <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-4">
                          <div className="rounded-full leading-none text-lg">
                            <CircularProgressbar
                              className="h-12 w-12"
                              value={(habit.progress / habit.goal) * 100}
                              text={habit.icon}
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
                            <h3 className="font-medium text-sm">
                              {habit.name}
                            </h3>
                            <p className="text-sm font-light text-gray-400">
                              {habit.progress}/{habit.goal} {habit.type}
                            </p>
                          </div>
                        </div>
                        <button
                          size="icon"
                          className={`border border-gray-100 p-2 rounded-lg ${
                            habit.completed ? "text-green-700" : "text-gray-700"
                          }`}
                        >
                          {habit.completed ? <IconCheck/> : <IconPlus />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-2 left-4 right-4 border bg-white border-gray-100 p-2 rounded-full md:hidden">
          <div className="flex justify-around">
            <button className="text-gray-400">
              <IconHome width={20} height={20} />
            </button>
            <button className="text-gray-400">
              <IconTrack width={20} height={20} />
            </button>
            <button className="bg-gradient-to-br from-blue-500 to-blue-900 p-2 text-white rounded-full">
              <IconPlus width={20} height={20} />
            </button>
            <button className="text-gray-400">
              <IconSun width={20} height={20} />
            </button>
            <button className="text-gray-400">
              <IconUser width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
