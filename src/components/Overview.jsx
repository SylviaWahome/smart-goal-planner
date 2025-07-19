import React from 'react';

function Overview({ goals }) {
  const totalTarget = goals.reduce((sum, g) => sum + Number(g.targetAmount), 0);
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const progressPercent = totalTarget > 0 ? ((totalSaved / totalTarget) * 100).toFixed(1) : 0;

  return (
    <div className="bg-blue-100 rounded-xl p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">💡 Savings Overview</h2>
      <p className="text-gray-700">
        Total Target: <strong>KES {totalTarget.toLocaleString()}</strong>
      </p>
      <p className="text-gray-700">
        Total Saved: <strong>KES {totalSaved.toLocaleString()}</strong>
      </p>
      <div className="w-full bg-gray-200 h-3 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <p className="text-sm text-right text-gray-600 mt-1">{progressPercent}% Saved</p>
    </div>
  );
}

export default Overview;
