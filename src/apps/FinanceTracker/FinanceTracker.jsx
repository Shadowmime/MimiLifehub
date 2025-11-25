import { useState } from 'react'
//import reactLogo from '../assets/react.svg'
//import viteLogo from '../vite.svg'
import { Link } from 'react-router-dom';

function FinanceTracker() {
  const [entries, setEntries] = useState([]);
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('income');

  const total = entries.reduce((acc, e) => {
    return acc + (e.type === 'income' ? e.amount : -e.amount);
  }, 0);

  const addEntry = () => {
    const value = parseFloat(amount);
    if (isNaN(value)) return;

    const newEntry = {
      amount: value,
      desc,
      type,
    };

    setEntries([newEntry, ...entries]);
    setAmount('');
    setDesc('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">💸 Money Tracker</h1>

      <div style={{ padding: '20px' }}>
        <p>Finance Tracker to be implemented soon...</p>
        <Link to="/"><button>⬅ Back to Dashboard</button></Link>
      </div>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-xl font-semibold">Balance: ${total.toFixed(2)}</h2>
      </div>

      <div className="bg-white rounded shadow p-4 mb-4 space-y-2">
        <h3 className="text-lg font-semibold">Add Entry</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border p-2 rounded w-full"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={addEntry}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          ➕ Add
        </button>
      </div>

      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">History</h3>
        {entries.length === 0 ? (
          <p className="text-gray-500">No entries yet.</p>
        ) : (
          <ul className="space-y-1">
            {entries.map((e, idx) => (
              <li
                key={idx}
                className={`flex justify-between ${
                  e.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                <span>{e.type === 'income' ? '+' : '-'}${e.amount}</span>
                <span>{e.desc}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FinanceTracker;