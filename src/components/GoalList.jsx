import React from 'react';
import GoalCard from './GoalCard';

function GoalList({ goals, onDelete, onDeposit, onEdit }) {
  return (
    <div className="mt-6 grid gap-4">
      {goals.length === 0 ? (
        <p className="text-gray-500 text-center">No goals added yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={onDelete}
            onDeposit={onDeposit}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;
