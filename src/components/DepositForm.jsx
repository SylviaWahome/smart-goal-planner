import React, { useState } from 'react';

function DepositForm({ goalId, onDeposit }) {
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      onDeposit(goalId, depositAmount);
      setAmount('');
    } else {
      alert('Please enter a valid deposit amount');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2 items-center">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-28 p-1 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Deposit
      </button>
    </form>
  );
}

export default DepositForm;
