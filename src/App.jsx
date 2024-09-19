import { useState } from "react";

function App() {
  const [activeDay, setActiveDay] = useState(3);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const habits = [
    {
      name: "Drink the water",
      progress: "500/2000 ML",
    },
    {
      name: "Walk",
      progress: "0/10000 STEPS",
    },
    {
      name: "Water Plants",
      progress: "0/1 TIMES",
    },
    {
      name: "Meditate",
      progress: "30/30 MIN",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-4xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
                  Habup
                </h1>
                <p className="text-lg md:text-xl text-gray-600">Hi, Mert 👋</p>
                <p className="text-sm text-gray-500">
                  Let's make habits together!
                </p>
              </div>
              <div className="h-12 w-12 md:h-16 md:w-16">
                <div>😇</div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-6">
              {days.map((day, index) => (
                <button
                  key={day}
                  variant={activeDay === index ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setActiveDay(index)}
                >
                  <div className="text-center">
                    <div className="text-sm font-semibold">{index + 1}</div>
                    <div className="text-xs">{day}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">
                  Your daily goals almost done! 🔥
                </h2>
                <span className="text-2xl font-bold">25%</span>
              </div>
              <div>25%</div>
              <p className="text-sm mt-2">1 of 4 completed</p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Habits</h2>
              <button variant="link" className="text-blue-600">
                VIEW ALL
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {habits.map((habit, index) => (
                <div
                  key={index}
                  className={index === 1 ? "border-blue-500 border-2" : ""}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 p-2 rounded-full">
                        {habit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{habit.name}</h3>
                        <p className="text-sm text-gray-500">
                          {habit.progress}
                        </p>
                      </div>
                    </div>
                    <button variant="outline" size="icon">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden">
          <div className="flex justify-around">
            <button variant="ghost" size="icon">
              Icon
            </button>
            <button variant="ghost" size="icon">
              Icon{" "}
            </button>
            <button variant="default" size="icon" className="rounded-full">
              Icon
            </button>
            <button variant="ghost" size="icon">
              Icon
            </button>
            <button variant="ghost" size="icon">
              Icon
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
