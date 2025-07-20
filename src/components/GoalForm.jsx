import { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    title: '',
    targetAmount: '',
    description: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (parseFloat(formData.targetAmount) <= 0) {
      alert("Target amount must be greater than 0.");
      return;
    }

    const newGoal = {
      title: formData.title.trim(),
      targetAmount: parseFloat(formData.targetAmount),
      description: formData.description.trim(),
      currentAmount: 0
    };

    onAddGoal(newGoal);
    setFormData({ title: '', targetAmount: '', description: '' });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 mb-6 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Add a New Goal</h2>

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Goal Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Target Amount (Ksh)
        <input
          type="number"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>

      <label className="block mb-4 text-sm font-medium text-gray-700">
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;
