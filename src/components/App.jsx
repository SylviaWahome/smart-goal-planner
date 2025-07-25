import React, { useEffect, useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const API_URL = 'https://smart-goal-planner.onrender.com/goals';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setGoals)
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  function handleAddGoal(newGoal) {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal),
    })
      .then((r) => r.json())
      .then((data) => setGoals([...goals, data]));
  }

  function handleDeleteGoal(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(() =>
      setGoals(goals.filter((goal) => goal.id !== id))
    );
  }

  function handleUpdateGoal(id, updatedGoal) {
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal),
    })
      .then((r) => r.json())
      .then((data) =>
        setGoals(goals.map((goal) => (goal.id === id ? data : goal)))
      );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎯 Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleUpdateGoal}
      />
    </div>
  );
}

export default App;
