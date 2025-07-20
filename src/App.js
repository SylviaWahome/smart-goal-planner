// src/App.js
import React, { useEffect, useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const API = "https://smart-goal-planner.onrender.com/goals";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  function handleAddGoal(newGoal) {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((createdGoal) => setGoals([...goals, createdGoal]));
  }

  function handleDeleteGoal(id) {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setGoals(goals.filter((goal) => goal.id !== id));
    });
  }

  // Edit an existing goal
  function handleEditGoal(id, updatedFields) {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals(
          goals.map((goal) => (goal.id === id ? updatedGoal : goal))
        );
      });
  }
  
  function handleDeposit(goalId, amount) {
    const goal = goals.find((g) => g.id === goalId);
    const updatedAmount = Number(goal.savedAmount) + Number(amount);

    fetch(`${API}/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals(
          goals.map((g) => (g.id === goalId ? updatedGoal : g))
        );
      });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-6">
        🎯 Smart Goal Planner
      </h1>

      <GoalForm onAdd={handleAddGoal} />

      <div className="my-8">
        <Overview goals={goals} />
      </div>

      <GoalList
        goals={goals}
        onDelete={handleDeleteGoal}
        onDeposit={handleDeposit}
        onEdit={handleEditGoal}
      />
    </div>
  );
}

export default App;
