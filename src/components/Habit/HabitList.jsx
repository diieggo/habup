import React from "react";
import { HabitItem } from "./index";

export function HabitList() {
  const habits = [
    {
      id: "T-1",
      icon: "💧",
      title: "Drink the water",
      progress: 500,
      goal: 2000,
      type: "ML",
      completed: false,
    },
    {
      id: "T-2",
      icon: "🚶‍♂️",
      title: "Walk",
      progress: 500,
      goal: 1000,
      type: "STEPS",
      completed: false,
    },
    {
      id: "T-3",
      icon: "🌿",
      title: "Water Plants",
      progress: 0,
      goal: 1,
      type: "TIMES",
      completed: false,
    },
    {
      id: "T-4",
      icon: "🧘‍♂️",
      title: "Meditate",
      progress: 1,
      goal: 1,
      type: "TIMES",
      completed: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        {habits.map(habit => (
          <HabitItem
            key={habit.id}
            title={habit.title}
            type={habit.type}
            progress={habit.progress}
            goal={habit.goal}
            icon={habit.icon}
            completed={habit.completed}
          />
        ))}
      </div>
    </>
  );
}
