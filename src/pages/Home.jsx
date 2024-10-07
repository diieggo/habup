import React from "react";
import { DaysList, ProgressCircle } from "../components";
import { HabitList } from "../components/Habit";
import { Nav } from "../layout";

export function Home() {
  return (
    <>
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
            <DaysList />
          </div>

          <ProgressCircle />

          <div className="habits mt-8 px-4 pb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Habits</h2>
            </div>
            <HabitList />
          </div>
        </div>
      </div>
      
      <Nav active={"home"} />
    </>
  );
}
