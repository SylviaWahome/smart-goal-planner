import React, { useEffect, useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const API = "https://smart-goal-planner.onrender.com/goals";

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch on load
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setGoals)
      .catch(err => console.error("Error fetching goals:", err));
  }, []);

  // Add new goal
  function handleAddGoal(newGoal) {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then(res => res.json())
      .then((createdGoal) => setGoals([...goals, createdGoal]));
  }

  // Delete goal
  function handleDeleteGoal(id) {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then(() => setGoals(goals.filter(g => g.id !== id)));
  }

  // Edit goal
  function handleEditGoal(id, updatedFields) {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then(res => res.json())
      .then((updatedGoal) => {
        setGoals(goals.map(g => g.id === id ? updatedGoal : g));
      });
  }

  // Deposit money
  function handleDeposit(goalId, amount) {
    const goal = goals.find(g => g.id === goalId);
    const updatedAmount = Number(goal.savedAmount) + amount;

    fetch(`${API}/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedAmount }),
    })
      .then(res => res.json())
      .then((updatedGoal) => {
        setGoals(goals.map(g => g.id === goalId ? updatedGoal : g));
      });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🎯 Smart Goal Planner</h1>
      <GoalForm onAdd={handleAddGoal} />
      <div className="my-6">
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
