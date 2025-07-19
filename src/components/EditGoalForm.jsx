import React, { useState } from 'react';

function EditGoalForm({ goal, onUpdate, onCancel }) {
  const [formData, setFormData] = useState({
    title: goal.title,
    description: goal.description,
    targetAmount: goal.targetAmount,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(goal.id, {
      ...goal,
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Goal Title"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        placeholder="Target Amount"
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditGoalForm;
