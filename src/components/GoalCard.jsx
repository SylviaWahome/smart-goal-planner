import React from 'react';

function GoalCard({ goal, onDelete, onDeposit, onEdit }) {
  const { title, targetAmount, currentAmount, id } = goal;

  const progress = Math.min((currentAmount / targetAmount) * 100, 100);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        Target: <span className="font-medium">Ksh {targetAmount}</span>
      </p>
      <p className="text-sm text-gray-600 mb-3">
        Saved: <span className="font-medium">Ksh {currentAmount}</span>
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <button
          onClick={() => onDeposit(id)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Deposit
        </button>
        <button
          onClick={() => onEdit(id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalCard;
